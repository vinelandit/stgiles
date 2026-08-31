import * as THREE from 'three';

import {
    CSS2DRenderer,
    CSS2DObject
} from 'three/addons/renderers/CSS2DRenderer.js';

import timeline from './timeline_new.js';
import GeoDBSCAN from "@dentreality/geodbscan";

import {
    landmarks
} from './landmarks.js';
import {
    inset
} from './inset.js';
/* import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js'; */


import { Project } from './project.js';

const m = {

    texLoaded: [ null, null, null, null, null],
    overviewGroup: new THREE.Group(),
    // overviewMat: new THREE.LineBasicMaterial( { vertexColors: false, color: new THREE.Color(0x000000), transparent: true } ),
            

    mapConfig: {
      north: 59.36977,
      south: 54.487505,
      east: -1.439095,
      west: -7.96315,
      width: 5798,
      height: 7965,
      offsetY: 0,
      scale: 100,
      invert: true,
      mode: 'mercator'
    },

    _shader: null, 
    _year: 0,

    inset: inset,
    
    
    
    reset: function() {
        

        this.scene.remove(this.overviewGroup);
        delete this.overviewGroup;
        this.overviewGroup = new THREE.Group();
        this.scene.add(this.overviewGroup);
        
        // this.overviewMat.opacity = 0;

        this.spin = false;
        this.spinFree = true;
        this.flying = false;
        this.maxSpherePhase = 0.3;
        this.activeOpacityFactor = 1;
        this.spinDir = -1;
        this.spinRate = 0.0;
        this.spinPhase = 0.0;

        if(this.isMobile) {
            this.camera.position.set(this.cameraPositionMobileInit[0], this.cameraPositionMobileInit[1], this.cameraPositionMobileInit[2]);
            this.lookAt = new THREE.Vector3(this.lookAtMobileInit[0], this.lookAtMobileInit[1], this.lookAtMobileInit[2]);
            
        } else {
            this.camera.position.set(this.cameraPositionInit[0], this.cameraPositionInit[1], this.cameraPositionInit[2]);
            this.lookAt = new THREE.Vector3(this.lookAtInit[0], this.lookAtInit[1], this.lookAtInit[2]);
            this.cameraSpinOffset = new THREE.Vector3(this.cameraSpinOffsetInit[0], this.cameraSpinOffsetInit[1], this.cameraSpinOffsetInit[2]);
           
        }
         
        this.camera.lookAt(this.lookAt);
        // this.sMaterialOverview.opacity = 1;

        // update active parish
        gsap.set('.landmark.parish', {
            opacity: 0
        });
    },

    init: function(callback, spieler, debug, ui, isMobile = false) {

        console.log('init map3d', isMobile);
        const _this = this;

        if(isMobile) {

            this.mapConfig = {
              north: 61,
              south: 49,
              east: 2.2,
              west: -11,
              width: 1812,
              height: 2800,
              offsetY: -200,
              mapCentreOffsetY: 0,
              scale: 40,
              invert: true,
              mode: 'equirectangular'
            }
        } else {
            this.mapConfig = {
              north: 61,
              south: 49,
              east: 2.2,
              west: -11,
              width: 9059,
              height: 14000,
              offsetY: -1000,
              mapCentreOffsetY: 0,
              scale: 200,
              invert: true,
              mode: 'equirectangular'
            }
            this.FPSCounter = new fpsCounter();
        }

        this.isMobile = isMobile;
        this.callback = callback;
        this.spieler = spieler;
        this.timeline = timeline;
        this.spinRateInc = 0.00001;
        this.spinRateMax = 0.00075;
        this.elevation = 5;
        this.spheres = {};
        this.ui = ui;
        this.activeYear = null;
        this.debug = debug;



        this.geodbscan = new GeoDBSCAN();

        this.lodPhase = { value: 1.0 };

        this.infix = this.debug ? '_small' : '_small';

        this.currentPosition = { lat: 55, lon: -5 }; // for animating inset map

        this.spherePhase = 0;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.screen.width / (isMobile ? window.screen.width : window.screen.height), 0.1, 1000);

        if(!isMobile) this.camera.setViewOffset(window.screen.width, window.screen.height, 0, 275, window.screen.width, window.screen.height);
        this.axesHelper = new THREE.AxesHelper(5);
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        // this.sun = new THREE.DirectionalLight(0xffffff, 0.5);
        this.frame = 0;
        this.pivotGroup = new THREE.Group();

        this.dims = [this.mapConfig.width, this.mapConfig.height];
        this.project = new Project(this.mapConfig);


        this.orbitTarget = new THREE.Object3D();
        this.orbitTarget.position.set(0, 0, 0);

        this.vMesh = null;


        this.label = null;
        this.label3 = null;
        this.pin = null;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });


        this.geometryGroup = new THREE.Group();
        this.scene.add(this.geometryGroup);
        this.scene.add(this.overviewGroup);

        // this.scene.add( this.axesHelper );
        // this.scene.add( this.ambientLight );
        this.scene.background = new THREE.Color(0xdbdede);
        

        this.camera.eulerOrder = 'YXZ';


        this.cameraPositionInit = [0, 77.5, 9.21];
        this.cameraPositionFinal = [0, 77.5, 9.21];
        this.lookAtInit = [0, 0, 9.22];

        this.cameraPositionMobileInit = [0, 40, 11];
        this.lookAtMobileInit = [0, 0, 10.1];
        




        this.cameraSpinOffsetInit = [0, 0, -5];


        this.cameraPositionMobile = [0, 45, 11];
        this.lookAtMobile = [0, 0, 11.1];

        this.rotationMatrix = new THREE.Matrix4();
        this.targetQuaternion = new THREE.Quaternion();

        // this.pivotGroup.add(this.camera);

        this.renderer.setSize(window.screen.width, isMobile ? window.screen.width :  window.screen.height);
        this.renderer.sortObjects = true;

        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.outputColorSpace = 'srgb';
        THREE.ColorManagement.enabled = false; // or false
        this.renderer.useLegacyLights = false; // or true

        document.getElementById('mapHolder').appendChild(this.renderer.domElement);




        this.plane = null;
        
        const mapLoader = new THREE.TextureLoader();


        mapLoader.load(isMobile ? '../images/sg_tex_col-2_mobile.jpg' : './images/sg_tex_col-1_desat_B.jpg',
            function(tex) {
                tex.encoding = THREE.sRGBEncoding;
                tex.colorSpace = THREE.SRGBColorSpace;
                _this.texLoaded[0] = tex;
                _this.checkTex();

            },
            function(err) {
                console.error(err);
            }
        ); 

        const noiseLoader = new THREE.TextureLoader();

        mapLoader.load('./images/noise.png',
            function(tex) {
                tex.encoding = THREE.sRGBEncoding;
                tex.colorSpace = THREE.SRGBColorSpace;
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                _this.texLoaded[4] = tex;
                _this.checkTex();

            },
            function(err) {
                console.error(err);
            }
        ); 

        if(!isMobile) {
            const hmapLoader = new THREE.TextureLoader();
            hmapLoader.load('./images/sg_tex_height_normalised.png',
                function(tex) {
                    // tex.encoding = THREE.sRGBEncoding;
                    // tex.colorSpace = THREE.SRGBColorSpace;
                    _this.texLoaded[1] = tex;
                    _this.checkTex();

                },
                function(err) {
                    console.error(err);
                }
            ); 
            
            const lodLoader = new THREE.TextureLoader();
            lodLoader.load('./images/sg_tex_col-2-B.jpg',
                function(tex) {
                    // tex.encoding = THREE.sRGBEncoding;
                    // tex.colorSpace = THREE.SRGBColorSpace;
                    _this.texLoaded[3] = tex;
                    _this.checkTex();

                },
                function(err) {
                    console.error(err);
                }
            ); 
        }
        


        const maskLoader = new THREE.TextureLoader();
        maskLoader.load(isMobile ? '../images/sg_tex_mask_mobile.png' : './images/sg_tex_mask_small.jpg',
            function(tex) {
                // tex.encoding = THREE.sRGBEncoding;
                // tex.colorSpace = THREE.SRGBColorSpace;
                _this.texLoaded[2] = tex;
                _this.checkTex();

            },
            function(err) {
                console.error(err);
            }
        ); 



        this.sGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
        this.sMaterialActive = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            opacity: 0.0,
            userData: { intrinsicOpacity: 0 }
        });
        /* this.sMaterialOverview = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            opacity: 1.0,
            userData: { intrinsicOpacity: 1 }
        }); */
        this.activeSphere = new THREE.Mesh(this.sGeometry, this.sMaterialActive);
        this.scene.add(this.activeSphere);
    },

    populate: function(state, dataRoot, pop, remoteRoot, callback) {

        const _this = this;
        // initialise modules
        if(this.isMobile) {
            // ignore
        } else {

            this.ui.populate(state.surname);
            if(!$('body').hasClass('changer')) {
                this.ui.showMap();
            }
        }

        this.spieler.init(state.surname, state.id, dataRoot, pop, function(coords, names) { 
          
          if(coords && state.num_records > 300) {

            const k = Object.keys(coords);


            _this.ui.ph('first_year', k[0]);
            _this.ui.ph('final_description', _this.spieler.data[ _this.spieler.data.length - 1 ].text);

            const p = [];
            const n = [];


            for (var i in coords) {
              p.push([ coords[i][1] * 0.25, coords[i][0] ]); // scaling down x because it's more important to thin out than y
              n.push(names[i]);
            }

            // console.log('data', p, _this.spieler.data);

            // Now we can generate our clusters
            const clusters = _this.geodbscan.cluster(p, {
              minPts: 2,
              epsilon: 10000,
            });

            const suppress = [];

            for(var c in clusters) {
              let max = 0;
              let maxID = -1;

              for(var i in clusters[c]) {
                const source = _this.spieler.data[ clusters[c][i] ];
                suppress.push(clusters[c][i]);
                if(source.total > max) {
                  max = source.total;
                  maxID = clusters[c][i];
                }
              } 

              const index = suppress.indexOf(maxID);
              if(index > -1) {
                suppress.splice(index, 1);
              }
              
              console.log('in cluster ' + c + ', the ID of the largest cluster is ' + maxID + ' and the quantity is ' + max);
            }


            pop.init(state.id, dataRoot);
            if(!_this.isMobile) timeline.init(pop, coords, 1560, 1900, 'population', 'continuousYear');
            

            _this.reset();
            _this.makeSpheres(coords, names, suppress);
            
            if(!_this.isMobile) {
                if(!_this.isMobile) _this.inset.initLinks(coords);
                _this.ui.showQR(state.id, remoteRoot);
            }

            
            callback();

            
          } else {
            // insufficient data for this surname -
            // load what data we have anyway and show explanatory panel
            pop.init(_this.state.id, _this.dataRoot, function(data) {
              ui.movePanel('insufficient');
              // outlierSpiel.show(data, _this.state.surname, _this.state.num_records);
            });
            
          }
          
        }, this.debug);
        
    },


    makeSpheres: function(coords, names, suppress) {

        this.coords = coords;

        for (var s in this.spheres) {
            this.scene.remove(this.spheres[s]);
            delete this.spheres[s];
        }

        $('.overviewLabel').remove();

        let init = true;

        let j = 0;

        for (var i in coords) {

            const name = names[i];
            const xy = this.project.ll2xy(coords[i][0], coords[i][1]);

            xy[1] += this.project.options.mapCentreOffsetY;

            /* const sphere = new THREE.Mesh(this.sGeometry, this.sMaterialOverview);
            sphere.position.set(xy[0], 0, xy[1]);
            sphere.scale.set(0.5, 0.5, 0.5);
            this.spheres[i] = sphere;

            this.scene.add(sphere);
            */
            
            if(init) {
                // set active sphere to first location
                this.activeSphere.position.set(xy[0], 0, xy[1]);
                init = false;
            }
            

            let mapped = this.project.ll2xy( coords[i][0], coords[i][1], true );


            this._shader.uniforms['uHotspot' + j].value.x = mapped[0] * this.mapConfig.scale;
            this._shader.uniforms['uHotspot' + j].value.y = this.mapConfig.height - mapped[1] * this.mapConfig.scale;
            this._shader.uniforms['uHotspot' + j].value.z = 0;


            if(!this.isMobile) {
                let mappedInset = this.inset.project.ll2xy( coords[i][0], coords[i][1], true );
                

                mappedInset[1] = this.inset.config.height - mappedInset[1];
                
                this.inset._shader.uniforms['uHotspot' + j].value.x = mappedInset[0];
                this.inset._shader.uniforms['uHotspot' + j].value.y = mappedInset[1];
                this.inset._shader.uniforms['uHotspot' + j].value.z = 1;
            }
            
               

            // overview labels
            const pin = new THREE.Group();

            pin.position.set(xy[0] + (this.isMobile ? 18.6 : 0), 0, xy[1]);
            this.overviewGroup.add(pin);
            
            const label = document.createElement('label');
            label.className = 'overviewLabel' + (suppress.indexOf(j) > -1 ? ' suppress' : '');

            const span = document.createElement('span');
            span.textContent = name;
            label.appendChild(span);
            const label3 = new CSS2DObject(label);
            label3.position.set(0, 0.0, 0);
            label3.center.set(0, 0);
            pin.add(label3);

            pin.renderOrder = 1;

            j++;


        }

        // hide remaining hotspot slots
        for(j = j; j < 12; j++) {
            this._shader.uniforms['uHotspot' + j].value.x = 0;
            this._shader.uniforms['uHotspot' + j].value.y = 0;
            this._shader.uniforms['uHotspot' + j].value.z = 0;

            if(!this.isMobile) {       
                this.inset._shader.uniforms['uHotspot' + j].value.x = 0;
                this.inset._shader.uniforms['uHotspot' + j].value.y = 0;
                this.inset._shader.uniforms['uHotspot' + j].value.z = 0;
            }
        }
    },


    goMobile: function() {


        const _this = this;
        const cd = this.spieler.clusterDensities(1900);
        for(var i in cd) {
            
            this._shader.uniforms['uHotspot' + i].value.z = cd[i] * 1.3;
        }
        gsap.to(this._shader.uniforms['uHeatmapVisiblePhase'], {
            value: 1,
            duration: 5
        });
        this.spin = false;
        // this.camera.up.set(0, 1, 0);
        gsap.to(this.camera.position, {
            x: this.cameraPositionMobile[0],
            y: this.cameraPositionMobile[1],
            z: this.cameraPositionMobile[2],
            ease: 'power1.out',
            duration: 2,
            delay: 0.0,
            onUpdate: function() {
                _this.camera.lookAt(_this.lookAt);
            },
            onComplete: function() {
                console.log('done');
            }
        });
        gsap.to(this.lookAt, {
            x: this.lookAtMobile[0],
            y: this.lookAtMobile[1],
            z: this.lookAtMobile[2],
            ease: 'power1.out',
            duration: 2,
            delay: 0.0,
            onUpdate: function() {
                _this.camera.lookAt(_this.lookAt);
            }
        });
    },

    fly: function(year, name, position, callback, init) {

        const tf = $('body').hasClass('changer') ? 0 : 1;
        console.log('tf', tf);
        
        const _this = this;
        let xy;
        this.spin = true;
        // this.spinRate = 0;
        const parishLabel = document.querySelector('.landmark.parish');
        const parishLabelText = document.querySelector('.landmark.parish span');
        this.camera.up.set(0, 1, 0);

        this.flying = true;

        if(init == -1) {
            // last record
            inset.hide();
            gsap.to(this.sMaterialOverview, {
                opacity: 1.0,
                ease: 'sine.inOut', 
                duration: tf * 2,
                delay: tf * 2
            });
            gsap.to(this, {
                activeOpacityFactor: 0,
                duration: tf * 2,
                ease: 'sine.inOut'
            });

            gsap.to(this._shader.uniforms['uHeatmapVisiblePhase'], {
                value: 1,
                duration: tf * 5
            });


        } else {
            inset.show();
            gsap.to(this.currentPosition, {
                lat: position[0],
                lon: position[1],
                duration: tf * 5,
                ease: 'sine.inOut',
                onUpdate: function() {
                    inset.update(_this.currentPosition);
                }
            });


        }
        

        if (init != -1) {

            // not last date
            xy = this.project.ll2xy(position[0], position[1]);
            xy[1] += this.project.options.mapCentreOffsetY;

            gsap.to('.landmark.hidden span', {
                opacity: 1,
                duration: 0.5,
                onComplete: function() {
                    $('.landmark.hidden').removeClass('hidden');
                }
            });

            // update active parish
            gsap.to('.landmark.parish', {
                opacity: 0,
                duration: 1,
                onComplete: function() {
                    landmarks.activeParish.position.set(xy[0], 0, xy[1]);
                    parishLabelText.innerHTML = name;
                    parishLabel.classList.remove('noText');
                    
                    const tc = landmarks.tooClose(position[0], position[1])
                    if ( tc != -1) {
                        $('#landmark' + tc[2]).addClass('hidden');
                        gsap.to('#landmark' + tc[2] + ' span', {
                            opacity: 0,
                            duration: 0.5
                        });
                    }
                    parishLabelText.innerHTML = name;
                    gsap.to('.landmark.parish', {
                        opacity: 1,
                        duration: 1,
                        delay: 2.5
                    });


                }
            });

            gsap.to(this, {
                activeOpacityFactor: 0.0,
                ease: 'sine.inOut', 
                duration: 2.5,
                onComplete: function() {
                    _this.activeSphere.position.set(xy[0], 0, xy[1]);
                    gsap.to(_this, {
                        activeOpacityFactor: 1.0,
                        ease: 'sine.inOut',
                        duration: 2.5
                    });
                }
            });
            
        } 

        const r = 5;

        if (init == 1 || init == -2) {

            if(init == -2) {

                gsap.to(this._shader.uniforms['uHeatmapVisiblePhase'], {
                    value: 0,
                    duration: 5
                });
            }

            this.spinFree = true;

            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[0]);
            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[1]);
            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[2]);
            this.spinPhase = 0;
            this.spinRate = 0;

            // first zoom
            gsap.to(this.camera.position, {
                x: xy[0],
                y: this.elevation,
                z: xy[1] - 10, // - 5 
                ease: 'power1.inOut',
                delay: 0,
                duration: 5,

            });


            gsap.to(this.lodPhase, {
                value: 0,
                duration: 2.5,
                ease: 'sine.inOut'
            });

            $('#mapHolder').addClass('tiltshift');

            this.cameraSpinOffset.setY(this.elevation);

            gsap.to(this.lookAt, {
                x: xy[0],
                y: 0,
                z: xy[1] - 0,
                ease: 'power1.inOut',
                delay: 0,
                duration: 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                },
                onComplete: function() {
                    // _this.spinPhase = 0;
                    _this.spin = true;
                    
                    
                    callback();
                    
                }
            });

            
        } else if (init == -1) {


            // last record, zoom out

            gsap.to(this.lodPhase, {
                value: 1,
                duration: tf * 5,
                ease: 'power1.inOut'
            });

            $('#mapHolder').removeClass('tiltshift');

            this.spin = true;
            // this.spinRate = 0;

            this.spinFree = false;
            gsap.to(this, {
                spinPhase: this.spinPhase > Math.PI * 0.5 ? Math.PI : 0,
                duration: tf * 5,
                ease: 'sine.inOut'
            });


            gsap.to(this.camera.position, {
                x: this.cameraPositionFinal[0],
                y: this.cameraPositionFinal[1],
                z: this.cameraPositionFinal[2],
                ease: 'sine.inOut',
                duration: tf * 5,
                delay: 0.0,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                },
                onComplete: function() {
                    callback();
                }
            });

            gsap.to(this.lookAt, {
                x: this.lookAtInit[0],
                y: this.lookAtInit[1],
                z: this.lookAtInit[2],
                ease: 'sine.inOut',
                duration: tf * 5,
                delay: 0.0,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                	// inset.update(_this.lookAt.x, _this.lookAt.z );
                }
            });

            gsap.to(this.cameraSpinOffset, {
                x: this.cameraSpinOffsetInit[0],
                y: this.cameraSpinOffsetInit[1],
                z: this.cameraSpinOffsetInit[2],
                ease: 'sine.inOut',
                duration: tf * 5,
                delay: 0.0,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                }
            }); 
            gsap.to('.landmark.parish', {
                opacity: 0,
                duration: tf * 1,
            });

            // reinit compass
            gsap.to('#compass', {
                transform: 'rotate(0)',
                duration: tf * 0.5,
                ease: 'sine.inOut'
            });
            

        } else {


            gsap.to(this.cameraSpinOffset, {
                y: this.elevation * 3,
                ease: 'sine.inOut',
                delay: 0.0,
                duration: tf * 2.5,

            });
            gsap.to(this.cameraSpinOffset, {
                y: this.elevation,
                ease: 'sine.inOut',
                delay: tf * 2.5,
                duration: tf * 2.5,

            });
            gsap.to(this.cameraSpinOffset, {
                x: 0,
                z: -10,
                ease: 'sine.inOut',
                duration: tf * 5,
                onUpdate: function() {
                    _this.camera.position.setX(_this.lookAt.x + _this.cameraSpinOffset.x);
                    _this.camera.position.setY(_this.lookAt.y + _this.cameraSpinOffset.y);
                    _this.camera.position.setZ(_this.lookAt.z + _this.cameraSpinOffset.z);
                    _this.camera.lookAt(_this.lookAt);
                },
                onComplete: function() {
                    // _this.spinPhase = 0;
                    _this.spin = true;
                    callback();
                }
            });
            
            
            gsap.to(this.lookAt, {
                x: xy[0],
                y: 0,
                z: xy[1] - 0,
                ease: 'sine.inOut',
                duration: tf * 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                }
            });


        }

        window.setTimeout(function() {
            _this.flying = false;
        }, tf * 6000);
        
        this.lastPosition = xy;

    },

    checkTex: function() {
        
        const _this = this;

        console.log('check tex');
        if ((this.isMobile && this.texLoaded[0] && this.texLoaded[2] && this.texLoaded[4]) || (!this.isMobile && this.texLoaded[0] && this.texLoaded[1] && this.texLoaded[2] && this.texLoaded[3] && this.texLoaded[4] )) {

            // CSS2D labels

            landmarks.init(this.scene, this.camera, this.project, this.isMobile);
        
            this.spinTarget = landmarks.spinTarget;




            // END VOLUMETRIC	

            this.materials = {};


            // untiled map
            if(this.isMobile) {
                this.materials['untiled'] = new THREE.MeshStandardMaterial({
                    map: this.texLoaded[0],
                    // aoMap: this.texLoaded[3],
                    emissiveMap: this.texLoaded[0],
                    emissive: new THREE.Color(0xffffff),
                    normalMap: this.texLoaded[2], // using normal map slot for mask
                    alphaMap: this.texLoaded[0]

                });
            } else {
                this.materials['untiled'] = new THREE.MeshStandardMaterial({
                    map: this.texLoaded[0],
                    // aoMap: this.texLoaded[3],
                    displacementMap: this.texLoaded[1],
                    displacementScale: 0.2, // 0.6,
                    displacementBias: 0,
                    emissiveMap: this.texLoaded[0],
                    emissive: new THREE.Color(0xffffff),
                    normalMap: this.texLoaded[2], // using normal map slot for mask
                    alphaMap: this.texLoaded[3]

                });
            }
            




            this.ar = this.mapConfig.width / this.mapConfig.height;
            

            const numHotspots = 12;
            let injectUniforms = `uniform float uLodPhase; 
            uniform float uHeatmapVisiblePhase; 
            uniform float uAspectRatio; 
            uniform vec2 uResolution;
            `;

            let injectPost = `vec2 p = vMapUv; p.y /= uAspectRatio; float density = 0.0;

            float cutoff = 0.05;
            float bands = 15.;
            float bias = -.25;
            float smoothness = 0.2;
            float exponent = 35.;
            float factor = 1.0;
            vec2 h;
            `;


            for(let i = 0; i < numHotspots; i++) {
                this.materials['untiled'].userData['hotspot' + i] = { value: [0.0, 0.0, 0.0] };
                

                injectUniforms += `uniform vec3 uHotspot` + i + `;
                `;

                injectPost += `
                
                // gaussian         
                
                h = uHotspot${i}.xy;
                h.y /= uAspectRatio;

                density += (factor * uHotspot${i}.z) * exp( - exponent * length(p - h / uResolution)); 
                // density += float(length(p - h / uResolution) < 0.01);
                
                `
            }


            injectPost += `
                
            if(density < cutoff) {
                density = 0.0;
            }

            density *= texture(normalMap, vMapUv + vec2(0., 1000./14000.)).r; // compensating for Y texture offset
            density = round(density * bands) / bands;

            // map LOD
            gl_FragColor = mix(gl_FragColor, texture(alphaMap, vMapUv), uLodPhase); 
            

            float grid = 0.5 + (0.5 + bias) * sin(vMapUv.t * ${ this.isMobile ? '1000' : '1500' }.);

            grid += bias;

            density *= uHeatmapVisiblePhase;

            float final = smoothstep(grid, grid + smoothness, density);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(113., 195., 179.) / 255.0, final);
            `;



            this.materials['untiled'].onBeforeCompile = shader => {
                shader.uniforms['uLodPhase'] = new THREE.Uniform(0.0);
                shader.uniforms['uHeatmapVisiblePhase'] = new THREE.Uniform(0.0);
                shader.uniforms['uAspectRatio'] = new THREE.Uniform(this.ar);
                shader.uniforms['uResolution'] = new THREE.Uniform([ this.mapConfig.width, this.mapConfig.height ]);
                for(let i = 0; i < numHotspots; i++) {
                    shader.uniforms['uHotspot' + i] = new THREE.Uniform(new THREE.Vector3(this.materials['untiled'].userData['hotspot' + i].value[0], this.materials['untiled'].userData['hotspot' + i].value[1], this.materials['untiled'].userData['hotspot' + i].value[2]));
                }

                shader.fragmentShader = injectUniforms + shader.fragmentShader;
                
                shader.fragmentShader = shader.fragmentShader.replace(`#include <dithering_fragment>`, `#include <dithering_fragment>
                    ${injectPost}`);

                this._shader = shader;

            }


            this.materials['untiled'].toneMapping = false;

            const geometry = new THREE.PlaneGeometry(this.dims[0] / this.mapConfig.scale, this.dims[1] / this.mapConfig.scale, parseInt(8 * this.dims[0] / this.mapConfig.scale), parseInt(8 * this.dims[1] / this.mapConfig.scale));
            const plane = new THREE.Mesh(geometry, this.materials['untiled']);

            this.geometryGroup.add(plane);






            // clouds

            this.materials['clouds'] = new THREE.MeshStandardMaterial({
                map: this.texLoaded[4],
                
                transparent: true,
                color: 0xffffff,
                blending: THREE.CustomBlending,
                blendEquation: THREE.AddEquation,
                blendSrc: THREE.SrcAlphaFactor,
                blendDst: THREE.DstAlphaFactor
            });

            let injectUniformsClouds = `
            uniform vec2 uResolution; 
            uniform float uFrame; 

            //SETTINGS//
            const float timeScale = 5.0;
            const float cloudScale = 1.5;
            const float skyCover = 0.6; //overwritten by mouse x drag
            const float softness = 0.35;
            const float brightness = 2.0;
            const int noiseOctaves = 5;
            const float curlStrain = 3.0;
            
            //SETTINGS//

            float saturate(float num)
            {
                return clamp(num,0.0,1.0);
            }

            float noise(vec2 uv, sampler2D map)
            {
                return texture(map,uv).r;
            }

            vec2 rotate(vec2 uv, sampler2D map)
            {
                uv = uv + noise(uv*0.2, map)*0.005;
                float rot = curlStrain;
                float sinRot=sin(rot);
                float cosRot=cos(rot);
                mat2 rotMat = mat2(cosRot,-sinRot,sinRot,cosRot);
                return uv * rotMat;
            }

            float fbm (vec2 uv, sampler2D map)
            {
                float rot = 1.57;
                float sinRot=sin(rot);
                float cosRot=cos(rot);
                float f = 0.0;
                float total = 0.0;
                float mul = 0.5;
                mat2 rotMat = mat2(cosRot,-sinRot,sinRot,cosRot);
                
                for(int i = 0;i < noiseOctaves;i++)
                {
                    f += noise(uv+vec2(uFrame/60.*0.00015*timeScale, 0.) *(1.0-mul), map)*mul;
                    total += mul;
                    uv *= 3.0;
                    uv=rotate(uv, map);
                    mul *= 0.5;
                }
                return f/total;
            }


            `;

            let injectPostClouds = `
            vec2 uv = vMapUv.xy * uResolution / (1000.0 * cloudScale);
            
            float cover = 0.65;
            
            float bright = brightness*(1.8-cover);
            
            float color1 = fbm(uv-vec2(0.5+uFrame/60.*0.00004*timeScale, 0.), map);
            float color2 = fbm(uv-vec2(10.5+uFrame/60.*0.00002*timeScale, 0.), map);
            
            float clouds1 = smoothstep(1.0-cover,min((1.0-cover)+softness*2.0,1.0),color1);
            float clouds2 = smoothstep(1.0-cover,min((1.0-cover)+softness,1.0),color2);
            
            float cloudsFormComb = saturate(clouds1+clouds2);
            
            vec4 skyCol = vec4(208.0, 216.0, 192.0, 0.) / 255.;
            float cloudCol = saturate(saturate(1.0-pow(color1,2.0)*0.5)*bright * 1.0);
            vec4 clouds1Color = vec4(cloudCol,cloudCol,cloudCol,1.0);
            vec4 clouds2Color = mix(clouds1Color,skyCol,0.4);
            vec4 cloudColComb = mix(clouds1Color,clouds2Color,saturate(clouds2-clouds1));
            cloudColComb.rgb *= cloudColComb.a;

            gl_FragColor = mix(skyCol,cloudColComb,cloudsFormComb);
            gl_FragColor.a *= 0.15;
            `;



            this.materials['clouds'].onBeforeCompile = shader => {
                shader.uniforms['uFrame'] = new THREE.Uniform(0.0);
                shader.uniforms['uResolution'] = new THREE.Uniform([ this.dims[0] / this.mapConfig.scale, this.dims[1] / this.mapConfig.scale ]);
                
                shader.fragmentShader = injectUniformsClouds + shader.fragmentShader;
                
                shader.fragmentShader = shader.fragmentShader.replace(`#include <dithering_fragment>`, `#include <dithering_fragment>
                    ${injectPostClouds}`);

                this._cloudshader = shader;

            }

            const cloudPlaneGeo = new THREE.PlaneGeometry(this.dims[0] / this.mapConfig.scale, this.dims[1] / this.mapConfig.scale);
            const cloudPlane1 = new THREE.Mesh(geometry, this.materials['clouds']);

            cloudPlane1.position.z = 2.75;

            this.geometryGroup.add(cloudPlane1);









            
            this.renderer.setAnimationLoop(this.animate.bind(this));
            
            this.geometryGroup.rotateZ(Math.PI / 2.0);
            this.geometryGroup.rotateX(-Math.PI / 2.0);
            this.geometryGroup.rotateY(Math.PI / 2.0);
            
            this.geometryGroup.rotateZ(Math.PI);

            console.log('blork');
            this.callback();


        }
    },

    animate: function(timestamp) {
        if(!this.isMobile) this.FPSCounter.update(timestamp);

        this.frame++;
        const y = this.camera.position.y;


        this.spherePhase += 0.0025;

        if (this.spherePhase > this.maxSpherePhase) {
            this.spherePhase = 0;

        }
       
        this.activeSphere.scale.set(this.spherePhase * 2, this.spherePhase * 2, this.spherePhase * 2);
        // this.sMaterialActive.opacity = (this.maxSpherePhase - this.spherePhase) * this.activeOpacityFactor;
        
        if(this._shader) {
            this._shader.uniforms['uLodPhase'].value = this.lodPhase.value;
        }
        if(this._cloudshader) {
            this._cloudshader.uniforms['uFrame'].value = this.frame;
        }

        if(!this.isMobile && this.timeline.continuousYear != this._year) {
            this._year = this.timeline.continuousYear;
            const cd = this.spieler.clusterDensities(this._year);
            for(var i in cd) {
                this._shader.uniforms['uHotspot' + i].value.z = cd[i];
                this.inset._shader.uniforms['uHotspot' + i].value.z = cd[i];
            }
        }



        if (this.spin) {
            const dx = this.lookAt.x - this.camera.position.x;
            const dy = this.lookAt.z - this.camera.position.z;

            const r = Math.sqrt(dx * dx + dy * dy);

            let angle = Math.PI / 2 + 0.25 * Math.sin(this.spinPhase);
            // console.log(angle);

            if(this.spinFree) {
                this.spinPhase += this.spinRate;
                if (this.spinRate < this.spinRateMax) {
                    this.spinRate += this.spinRateInc;
                }

                this.spinPhase = this.spinPhase % (Math.PI * 2);
            }

            // update compass
            let degrees = angle * 180 / Math.PI;
            degrees -= 90;
            gsap.set('#compass', {
                transform: 'rotate(' + parseFloat(-degrees) + 'deg)'
            });


            this.cameraSpinOffset.setX(-r * Math.cos(angle));
            this.cameraSpinOffset.setZ(-r * Math.sin(angle));


            this.camera.position.x = this.lookAt.x + this.cameraSpinOffset.x;
            this.camera.position.z = this.lookAt.z + this.cameraSpinOffset.z;

            this.camera.lookAt(this.lookAt);


        }

        this.renderer.render(this.scene, this.camera);

        landmarks.render(this.scene, this.camera);

    },


};

export {
    m
};