import * as THREE from 'three';
// import { MapControls } from 'three/addons/controls/MapControls.js';
import {
    ImprovedNoise
} from 'three/addons/math/ImprovedNoise.js';
import {
    CSS2DRenderer,
    CSS2DObject
} from 'three/addons/renderers/CSS2DRenderer.js';
import {
    cloudShaders
} from './cloudShaders.js';
import {
    landmarks
} from './landmarks.js';
import {
    inset
} from './inset.js';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import { Project } from './project.js';

const m = {

    texLoaded: [ null, null, null, null, null],

    mapConfig: {
      north: 59.36977,
      south: 54.487505,
      east: -1.439095,
      west: -7.96315,
      width: 5798,
      height: 7965,
      scale: 100,
      invert: true,
      mode: 'mercator'
    }, 
    /*
    
    mapConfig: {
      north: 61,
      south: 49,
      east: 2.2,
      west: -11,
      width: 9059 * 2,
      height: 14000 * 2,
      scale: 300,
      invert: true,
      mode: 'equirectangular'
    },
    
    */
    reset: function() {
        this.spin = false;
        this.flying = false;
        this.maxSpherePhase = 0.3;
        this.activeOpacityFactor = 1;
        this.spinDir = -1;
        this.spinRate = 0.0;
        this.spinPhase = 0.0;
        this.camera.position.set(this.cameraPositionInit[0], this.cameraPositionInit[1], this.cameraPositionInit[2]);
        this.lookAt = new THREE.Vector3(this.lookAtInit[0], this.lookAtInit[1], this.lookAtInit[2]);
        this.cameraSpinOffset = new THREE.Vector3(this.cameraSpinOffsetInit[0], this.cameraSpinOffsetInit[1], this.cameraSpinOffsetInit[2]);
        
        this.camera.lookAt(this.lookAt);
        this.sMaterialOverview.opacity = 0;

        // update active parish
        gsap.set('.landmark.parish', {
            opacity: 0
        });
    },

    init: function(callback, debug) {

        const _this = this;

        this.callback = callback;
        this.spinRateInc = 0.000005;
        this.spinRateMax = 0.0015;
        this.elevation = 2;
        this.spheres = {};
        this.activeYear = null;
        this.debug = debug;

        this.infix = this.debug ? '' : '';

        this.currentPosition = { lat: 55, lon: -5 }; // for animating inset map

        this.spherePhase = 0;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / (window.innerHeight + 200), 0.1, 1000);
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
        this.labelRenderer = null;
        this.label = null;
        this.label3 = null;
        this.pin = null;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        console.log('IS WEBGL2?', this.renderer.capabilities.isWebGL2);

        console.log(this.dims, this.mapConfig.scale);
        console.log(this.dims[0] / this.mapConfig.scale, this.dims[1] / this.mapConfig.scale, this.dims[0] / 2, this.dims[1] / 2);


        this.geometryGroup = new THREE.Group();
        this.scene.add(this.geometryGroup);

        // this.scene.add( this.axesHelper );
        // this.scene.add( this.ambientLight );
        this.scene.background = new THREE.Color(0xdbdede);
        

        this.camera.eulerOrder = 'YXZ';


        this.cameraPositionInit = [0, 105, -25];
        
        this.lookAtInit = [0.0, 0.0, 0.0];



        this.cameraPositionFinal = [0, 300, -5.001];
        this.cameraSpinOffsetInit = [0, 0, -5];

        
        this.rotationMatrix = new THREE.Matrix4();
        this.targetQuaternion = new THREE.Quaternion();

        // this.pivotGroup.add(this.camera);

        this.renderer.setSize(window.innerWidth, window.innerHeight + 200);
        this.renderer.sortObjects = true;

        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.outputColorSpace = 'srgb';
        THREE.ColorManagement.enabled = false; // or false
        this.renderer.useLegacyLights = false; // or true

        document.getElementById('mapHolder').appendChild(this.renderer.domElement);



        this.plane = null;

        
        /*
        for(var i = 0; i < 4; i++) {

            const k = i;
            new THREE.TextureLoader().load('./images/map_texture_' + k + '.jpg',
                function(tex) {
                    tex.encoding = THREE.sRGBEncoding;
                    tex.colorSpace = THREE.SRGBColorSpace;
                    _this.texLoaded[0][k] = tex;
                    console.log('LOADED map', k);
                    _this.checkTex();

                },
                function(err) {
                    console.error(err);
                }
            );
            new THREE.TextureLoader().load('./images/heightmap_' + k + '.jpg',
                function(tex) {
                    tex.encoding = THREE.sRGBEncoding;
                    tex.colorSpace = THREE.SRGBColorSpace;
                    _this.texLoaded[1][k] = tex;
                    console.log('LOADED height', k);
                    _this.checkTex();

                },
                function(err) {
                    console.error(err);
                }
            );
            new THREE.TextureLoader().load('./images/map_alpha_' + k + '.jpg',
                function(tex) {
                    tex.encoding = THREE.sRGBEncoding;
                    tex.colorSpace = THREE.SRGBColorSpace;
                    _this.texLoaded[2][k] = tex;
                    console.log('LOADED alpha', k);
                    _this.checkTex();

                },
                function(err) {
                    console.error(err);
                }
            );
        }
        */
        
        const mapLoader = new THREE.TextureLoader();
        mapLoader.load('./images/map_contours_modified' + this.infix + '.jpg',
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

        const hmapLoader = new THREE.TextureLoader();
        hmapLoader.load('./images/heightmap_modified' + this.infix + '.jpg',
            function(tex) {
                tex.encoding = THREE.sRGBEncoding;
                tex.colorSpace = THREE.SRGBColorSpace;
                _this.texLoaded[1] = tex;
                _this.checkTex();

            },
            function(err) {
                console.error(err);
            }
        ); 


        inset.init();

        this.sGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
        this.sMaterialActive = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            opacity: 0.0,
            userData: { intrinsicOpacity: 0 }
        });
        this.sMaterialOverview = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            opacity: 0.0,
            userData: { intrinsicOpacity: 0 }
        });
        this.activeSphere = new THREE.Mesh(this.sGeometry, this.sMaterialActive);
        this.scene.add(this.activeSphere);
    },


    makeSpheres: function(coords) {

        console.log('make spheres');
        for (var s in this.spheres) {
            this.scene.remove(this.spheres[s]);
            delete this.spheres[s];
        }

        let init = true;
        for (var i in coords) {
            const xy = this.project.ll2xy(coords[i][0], coords[i][1]);

            const sphere = new THREE.Mesh(this.sGeometry, this.sMaterialOverview);
            sphere.position.set(xy[0], 0, xy[1]);
            sphere.scale.set(1.5, 1.5, 1.5);
            this.spheres[i] = sphere;

            this.scene.add(sphere);

            if(init) {
                // set active sphere to first location
                this.activeSphere.position.set(xy[0], 0, xy[1]);
                init = false;
            }
        }

    },

    fly: function(year, name, position, callback, init) {

        const _this = this;
        let xy;
        this.spin = true;
        // this.spinRate = 0;
        const parishLabel = document.querySelector('.landmark.parish');
        const parishLabelText = document.querySelector('.landmark.parish span');
        this.camera.up.set(0, 1, 0);

        if(init == -1) {
            // last record
            inset.hide();
            gsap.to(this.sMaterialOverview, {
                opacity: 0.5,
                ease: 'sine.inOut', 
                duration: 2,
                delay: 2
            });
            gsap.to(this, {
                activeOpacityFactor: 0,
                duration: 2,
                ease: 'sine.inOut'
            });

        } else {
            inset.show();
            gsap.to(this.currentPosition, {
                lat: position[0],
                lon: position[1],
                duration: 5,
                ease: 'sine.inOut',
                onUpdate: function() {
                    inset.update(_this.currentPosition);
                }
            });

            gsap.to(this.sMaterialOverview, {
                opacity: 0.0,
                ease: 'sine.inOut', 
                duration: 2,
                delay: 1
            });

        }
        

        if (init != -1) {

            // not last date
            xy = this.project.ll2xy(position[0], position[1]);
            // update active parish
            gsap.to('.landmark.parish', {
                opacity: 0,
                duration: 1,
                onComplete: function() {
                    landmarks.activeParish.position.set(xy[0], 0, xy[1]);
                    if (landmarks.tooClose(position[0], position[1]) == -1) {
                        parishLabelText.innerHTML = name;
                        parishLabel.classList.remove('noText');
                    } else {
                        parishLabelText.innerHTML = '';
                        parishLabel.classList.add('noText');
                    }
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

        // disable video play for the moment
        // document.querySelector('#inset video').play();

        const r = 5;

        if (init == 1 || init == -2) {

            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[0]);
            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[1]);
            this.cameraSpinOffset.setX(this.cameraSpinOffsetInit[2]);
            this.spinPhase = 0;
            this.spinRate = 0;

            // first zoom
            gsap.to(this.camera.position, {
                x: xy[0],
                y: this.elevation,
                z: xy[1] - 5,
                ease: 'sine.inOut',
                delay: 0,
                duration: 5,

            });

            this.cameraSpinOffset.setY(this.elevation);

            gsap.to(this.lookAt, {
                x: xy[0],
                y: 0,
                z: xy[1],
                ease: 'sine.inOut',
                delay: 0,
                duration: 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                	inset.update(_this.lookAt.x, _this.lookAt.z );
                },
                onComplete: function() {
                    // _this.spinPhase = 0;
                    _this.spin = true;
                    
                    
                    callback();
                    console.log(_this.camera, _this.lookAt, _this.cameraSpinOffset);
                }
            });

            
        } else if (init == -1) {
            // last record, zoom out
            this.spin = false;
            gsap.to(this.camera.position, {
                x: this.cameraPositionFinal[0],
                y: this.cameraPositionFinal[1],
                z: this.cameraPositionFinal[2],
                ease: 'sine.inOut',
                duration: 5,
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
                duration: 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                	inset.update(_this.lookAt.x, _this.lookAt.z );
                }
            });

            gsap.to(this.cameraSpinOffset, {
                x: this.cameraSpinOffsetInit[0],
                y: this.cameraSpinOffsetInit[1],
                z: this.cameraSpinOffsetInit[2],
                ease: 'sine.inOut',
                duration: 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                }
            });
            gsap.to('.landmark.parish', {
                opacity: 0,
                duration: 1,
            });

            // reinit compass
            gsap.to('#compass', {
                transform: 'rotate(0)',
                duration: 5,
                ease: 'sine.inOut'
            });

        } else {


            gsap.to(this.cameraSpinOffset, {
                y: this.elevation * 6,
                ease: 'sine.inOut',
                delay: 0.0,
                duration: 2.5,

            });
            gsap.to(this.cameraSpinOffset, {
                y: this.elevation,
                ease: 'sine.inOut',
                delay: 2.5,
                duration: 2.5,

            });
            gsap.to(this.cameraSpinOffset, {
                x: 0,
                z: -5,
                ease: 'sine.inOut',
                duration: 5,
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
                    console.log(_this.camera, _this.lookAt);
                }
            });
            
            
            gsap.to(this.lookAt, {
                x: xy[0],
                y: 0,
                z: xy[1],
                ease: 'sine.inOut',
                duration: 5,
                onUpdate: function() {
                    _this.camera.lookAt(_this.lookAt);
                	inset.update(_this.lookAt.x, _this.lookAt.z );
                }
            });


        }
        if(init !== -1) {
            this.flying = true;
        }
        this.lastPosition = xy;

    },

    checkTex: function() {
        
        // if (this.texLoaded[0].length === 4 && this.texLoaded[1].length === 4 && this.texLoaded[2].length === 4
        //   && !this.texLoaded[0].includes(undefined)
        //    && !this.texLoaded[1].includes(undefined)  
        //    && !this.texLoaded[2].includes(undefined)  
        //     ) {

         if (this.texLoaded[0] && this.texLoaded[1]) {

            // CSS2D labels

            landmarks.init(this.scene, this.camera, this.project);
            this.spinTarget = landmarks.spinTarget;

            // volumetric clouds
            // Texture



            // END VOLUMETRIC	

            this.materials = {};


            // untiled map
            this.materials['untiled'] = new THREE.MeshStandardMaterial({
                map: this.texLoaded[0],
                // aoMap: texLoaded[3],
                displacementMap: this.texLoaded[1],
                displacementScale: 0.6, // 0.6,
                displacementBias: 0,
                emissiveMap: this.texLoaded[0],
                emissive: new THREE.Color(0xffffff),
                // normalMap: this.texLoaded[2],
                // normalScale: new THREE.Vector2(1.0, 1.0),
                // normalMapType: THREE.TangentSpaceNormalMap,


            });

            this.materials['untiled'].toneMapping = false;

            const geometry = new THREE.PlaneGeometry(this.dims[0] / this.mapConfig.scale, this.dims[1] / this.mapConfig.scale, 0.5 * this.dims[0], 0.5 * this.dims[1]);
            const plane = new THREE.Mesh(geometry, this.materials['untiled']);
            // plane.position.x = (-0.25 + x * 0.5) * this.dims[0] / this.mapConfig.scale;
            // plane.position.y = (-0.25 + y * 0.5) * this.dims[1] / this.mapConfig.scale;
            
            this.geometryGroup.add(plane);
            
            // tiled map


            /* 

            let j = 0;
            for(var y = 1; y > -1; y--) {
                for(var x = 0; x < 2; x++) {
                    this.materials[x + '_' + y] = new THREE.MeshStandardMaterial({
                        map: this.texLoaded[0][j],
                        // aoMap: texLoaded[3],
                        displacementMap: this.texLoaded[1][j],
                        alphaMap: this.texLoaded[2][j],
                        displacementScale: 0.5, // 0.6,
                        displacementBias: 0,
                        transparent: true,
                        emissiveMap: this.texLoaded[0][j],
                        emissive: new THREE.Color(0xffffff),
                        // normalMap: this.texLoaded[2],
                        // normalScale: new THREE.Vector2(1.0, 1.0),
                        // normalMapType: THREE.TangentSpaceNormalMap,


                    });

                    this.materials[x + '_' + y].toneMapping = false;

                    const resolution = j <= 1 ? 0.05 : 0.005;

                    const geometry = new THREE.PlaneGeometry(0.5 * this.dims[0] / this.mapConfig.scale, 0.5 * this.dims[1] / this.mapConfig.scale, resolution * this.dims[0], resolution * this.dims[1]);
                    const plane = new THREE.Mesh(geometry, this.materials[x + '_' + y]);
                    plane.position.x = (-0.25 + x * 0.5) * this.dims[0] / this.mapConfig.scale;
                    plane.position.y = (-0.25 + y * 0.5) * this.dims[1] / this.mapConfig.scale;
                    
                    this.geometryGroup.add(plane);
                    j++;
                }
            }
            */
            
            this.renderer.setAnimationLoop(this.animate.bind(this));
            
            this.geometryGroup.rotateZ(Math.PI / 2.0);
            this.geometryGroup.rotateX(-Math.PI / 2.0);
            this.geometryGroup.rotateY(Math.PI / 2.0);
            
            this.geometryGroup.rotateZ(Math.PI);

            console.log(this.geometryGroup);
            this.callback();
        }
    },

    animate: function() {

        this.frame++;
        const y = this.camera.position.y;
        

        this.spherePhase += 0.0025;

        if (this.spherePhase > this.maxSpherePhase) {
            this.spherePhase = 0;
        }
       
        this.activeSphere.scale.set(this.spherePhase * 2, this.spherePhase * 2, this.spherePhase * 2);
        this.sMaterialActive.opacity = (this.maxSpherePhase - this.spherePhase) * this.activeOpacityFactor;
        

        // let compassAngle = Math.atan()
        // gsap.set('#compass', { transform: 'rotate(-' + parseFloat(angle * (180 / Math.PI)) + 'deg)' })

        if (this.spin) {
            const dx = this.lookAt.x - this.camera.position.x;
            const dy = this.lookAt.z - this.camera.position.z;

            const r = Math.sqrt(dx * dx + dy * dy);

            let angle = Math.PI / 2 + 0.75 * Math.sin(this.spinPhase);
            // console.log(angle);
            this.spinPhase += this.spinRate;

            // update compass
            let degrees = angle * 180 / Math.PI;
            degrees -= 90;
            gsap.set('#compass', {
                transform: 'rotate(' + parseFloat(-degrees) + 'deg)'
            });


            if (this.spinRate < this.spinRateMax) {
                this.spinRate += this.spinRateInc;
            }


            this.cameraSpinOffset.setX(-r * Math.cos(angle));
            this.cameraSpinOffset.setZ(-r * Math.sin(angle));


            this.camera.position.x = this.lookAt.x + this.cameraSpinOffset.x;
            this.camera.position.z = this.lookAt.z + this.cameraSpinOffset.z;

            this.camera.lookAt(this.lookAt);


        }


        /* this.vMesh.material.uniforms.cameraPos.value.copy( this.camera.position );
        this.vMesh.material.uniforms.threshold.value = 0.525 + 0.05 * Math.sin(this.frame / 100);
        this.vMesh.rotation.y = - performance.now() / 15000;


        this.vMesh.material.uniforms.fogNear.value = this.fog.near;
        this.vMesh.material.uniforms.fogFar.value = this.fog.far;

        this.vMesh.material.uniforms.frame.value += 5;
        */

        this.renderer.render(this.scene, this.camera);



        landmarks.render(this.scene, this.camera);
        // pivotGroup.rotateY(0.0025);

    },


};

export {
    m
};