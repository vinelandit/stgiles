import Globe from 'globe.gl';
import { fifo } from './fifo.js';
import * as THREE from 'three';
import * as topojson from 'topojson-client';


const globe = {
	
	center: { lat: 56.49, lon: -4.10 },
	anim: null,

	init: function(data, reinit = false) {

    	console.log('init globe', data);
		
		this.animating = false;
		this.curIndex = 2;
		this.materialsInitialised = false;

		// shuffle data first
		data.push(data.shift());
		data.push(data.shift());
		data.push(data.shift());

		fifo.init(data, reinit);

		const _this = this;

		this.data = data;

		// for de-duplicating arcs
		this.originToArc = {};

		this.arcsData = [];

		for(var i in data) {
			if(typeof this.originToArc[data[i].origin] == 'undefined') {
				this.arcsData.push({
					startLat: this.center.lat,
					startLng: this.center.lon,
					endLat: parseFloat(data[i].lat),
					endLng: parseFloat(data[i].lon),
					length: this.distance(this.center.lat, this.center.lon, parseFloat(data[i].lat), parseFloat(data[i].lon)),
					color: '#aa7f26',
					stroke: 0.75
				});

				this.originToArc[data[i].origin] = this.arcsData.length - 1;
			} else {
				console.log('already have ' + data[i].origin);
			}
			
		}

		console.log('arcsData', this.arcsData, this.originToArc);

		// console.log(this.arcsData, this.originToArc);
	  	
		if(reinit) {
			this.g.arcsData(this.arcsData);
			this.curIndex = 2;
		} else {
			this.g = new Globe(document.getElementById('globeVizInner'))
	  		    .globeImageUrl('./images/globe-tex-6000x3000px.jpg') 
	  		    // .globeImageUrl('./images/earth_equi_hires.jpg')    
			    .arcsData(this.arcsData)
			    .arcColor('color')
			    .arcStroke((arc) => { return arc.stroke } )
				.backgroundColor('rgba(0,0,0,0)')
				.showAtmosphere(false)
			    .arcDashLength((arc) => { return 0.02 / arc.length; })
			    .arcDashGap((arc) => { return 0.01 / arc.length })
			    .arcDashAnimateTime((arc) => { return 10000 * arc.length })
			    .pointOfView({ lat: this.center.lat - 12, lng: this.center.lon, altitude: 2 }, 0);

			const atGeo = new THREE.SphereGeometry(this.g.getGlobeRadius() + 0.3, 128, 64);
			this.atMat = new THREE.MeshNormalMaterial({
				transparent: true
			});


			const l = this.g.lights();
			l[1].intensity = 0;
			this.g.lights(l);
			// customising atmosphere shader
	
			this.atMat.onBeforeCompile = function ( shader ) {
				shader.fragmentShader = shader.fragmentShader.replace(
					`gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );`,
					`vec3 nn = (normal); 
					 float grad = clamp(-0.5 + 2.0 * pow(1.0 - nn.z, 0.75), 0.0, 1.0);

					 gl_FragColor = vec4( vec3(42.0, 94.0, 100.0) / 255., grad * diffuseColor.a );`
					)
				_this.atMat.needsUpdate = true;
				
			}	
			this.atmosphere = new THREE.Mesh(atGeo, this.atMat);
			this.atmosphere.renderOrder = -100000;

			this.g.scene().add(this.atmosphere);

			this.g.renderer().premultipliedAlpha = false;

		} 
	
	  	
		window.setTimeout(function(){
	    	_this.initMaterials(reinit);
	    	_this.show();
	    }, 100);
	    
	},

	hide: function() {
        this.pauseAnimation();
        gsap.to('#globeViz', {
            opacity: 0,
            duration: 0.2,
            onComplete: function() {
                gsap.set('#globeViz', {
                    display: 'none'
                });
            }
        });
    },

    show: function() {
        this.resumeAnimation();
        this.g.resumeAnimation();
        this.animating = true;
        if($('#globeViz').css('display') == 'none') {
        	gsap.set('#globeViz', {
	            display: 'block',
	            opacity: 0
	        });
        }
        
        gsap.to('#globeViz', {
            opacity: 1,
            duration: 0.2
        });
    },

    focus: function() {
    	
    	const _this = this;
    	this.animating = false;
    	window.clearInterval(this.animDaemon);
		delete this.animDaemon;

		const pov = this.g.pointOfView();
		this.g.pointOfView({ lat: pov.lat, lng: pov.lng, altitude: pov.altitude }, 0);
		window.setTimeout(function() {

			_this.g.pointOfView({ lat: -30 + _this.center.lat, lng: _this.center.lon, altitude: 1.75 }, 2000);
		}, 10);

		// slide globe up
		gsap.to([this.atmosphere.position, this.g.scene().children[4].position], {
			y: -30,
			duration: 2,
			ease: 'power1.inOut'
		});


		/* for(var i in this.arcsData) {
			console.log(i, this.arcsData[i]);
			gsap.to(this.arcsData[i].__threeObjArc.children[0].material.uniforms.alpha, { 
				value: 0.0,
				delay: 1,
				duration: 1
			});
		} */

		window.setTimeout(function() {
			console.log(_this.arcsData.length);
			for(var i in _this.arcsData) {
				
				gsap.to(_this.arcsData[i].__threeObjArc.children[0].material.uniforms.alpha, { 
					value: 0.0,
					delay: 0,
					duration: 1
				});
			}
		}, 1000);

    },

	pauseAnimation: function() {
		console.log('pausing globe animation');
		this.g.pauseAnimation();
		this.animating = false;
		window.clearInterval(this.animDaemon);
		delete this.animDaemon;
	},

	resumeAnimation: function() {
		
		if(!this.animating) {
			this.g.resumeAnimation();
			this.animating = true;	
		}
		
	},

	distance(lat1,lon1,lat2,lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = this.deg2rad(lon2-lon1); 
	  var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  
	  return c;
	},

	deg2rad: function(deg) {
	  return deg * (Math.PI/180);
	},

	initMaterials: function(reinit) {

		const _this = this;

		const a = this.g.arcsData();
		console.log(a.length);

		for(var i = 0; i < a.length; i++) {
			const mat = a[i].__threeObjArc.children[0].material;
			// mat.transparent = true;
			if(!mat.userData.hacked) {

				mat.customProgramCacheKey = function () {	
					return i + ' ' + Date.now();
				};

				mat.needsUpdate = true;
				mat.onBeforeCompile = function ( shader ) {

					shader.uniforms.alpha = { value: 0.1 };

					shader.fragmentShader = 'uniform float alpha;\n' + shader.fragmentShader;
					shader.fragmentShader = shader.fragmentShader.replace(
						'gl_FragColor = vColor;',
						'gl_FragColor = vColor; gl_FragColor *= vec4(1.0, 1.0, 1.0, alpha);');

					mat.userData.shader = shader;
					
				};

				mat.userData.hacked = true;
			} 
		}
		
		this.materialsInitialised = true;
		this.animating = true;



		// restore globe to centre
		if(reinit) {
			gsap.to([this.atmosphere.position, this.g.scene().children[4].position], {
				y: 0,
				duration: 0.5
			});	
			
		} else {
			this.atmosphere.position.y = 0;
			this.g.scene().children[4].position.y = 0;
		}

		// start animation
		window.setTimeout(function() {
			_this.animate();
			if(typeof _this.animDaemon == 'undefined') {
		    	_this.animDaemon = window.setInterval(function(){
		    		
		    		_this.animate();
		    	}, 3000);
		    }
		}, 500);



	},

	animate: function() {
		
		if(!this.animating) {
			return false;

		}


		const _this = this;
		
		// go to data el, then iterate

		let prevIndex = this.curIndex - 1;
		if(prevIndex < 0) {
			prevIndex = this.data.length - 1;
		}

		const prevArcIndex = this.originToArc[ this.data[prevIndex].origin ];
		const arcIndex = this.originToArc[ this.data[this.curIndex].origin ];

		
		gsap.to(this.arcsData[arcIndex].__threeObjArc.children[0].material.uniforms.alpha, {
			value: 1,
			duration: 1
		});

		if(prevArcIndex != arcIndex) {
			gsap.to(this.arcsData[prevArcIndex].__threeObjArc.children[0].material.uniforms.alpha, { 
				value: 0.1,
				duration: 1
			});
		}

		let lat = parseFloat(this.data[this.curIndex].lat);

		if(lat >= 0) {
			lat -= 25;
		} else {
			console.log('boink', lat, lat + 40);
			lat += 25;
		}

		// lat += 40;

		this.g.pointOfView({ lat: lat, lng: this.data[this.curIndex].lon, altitude: 2.5 }, 1000);
		this.curIndex++;
		if(this.curIndex >= this.data.length) {
			this.curIndex = 0;
		}
		
		
		fifo.increment();
		
			
	}

}

export { globe };

    