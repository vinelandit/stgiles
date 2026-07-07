import Globe from 'globe.gl';
import { fifo } from './fifo.js';
import * as THREE from 'three';
import * as topojson from 'https://esm.sh/topojson-client';

const globe = {
	
	center: { lat: 56.49, lon: -4.10 },
	curIndex: 0,
	anim: null,

	init: function(data, reinit = false) {

		console.log('init globe');

		this.materialsInitialised = false;

		fifo.init(data, reinit);

		const _this = this;

		this.data = data;

		// for de-duplicating arcs
		this.originToArc = {};

		this.arcsData = [];

		for(var i in data) {
			if(typeof this.originToArc[data[i].origin] == 'undefined') {
				console.log('fuck adding', data[i].origin);
				this.arcsData.push({
					startLat: this.center.lat,
					startLng: this.center.lon,
					endLat: parseFloat(data[i].lat),
					endLng: parseFloat(data[i].lon),
					length: this.distance(this.center.lat, this.center.lon, parseFloat(data[i].lat), parseFloat(data[i].lon)),
					color: 'red'
				});

				this.originToArc[data[i].origin] = this.arcsData.length - 1;
			}
			
		}

		console.log(this.arcsData, this.originToArc);
	  
		if(reinit) {
			this.g.arcsData(this.arcsData);
			this.curIndex = 0;
			window.clearTimeout(this.anim);
		} else {
			this.g = new Globe(document.getElementById('globeViz'))
	  		      // .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg')    
	    .arcsData(this.arcsData)
	    .arcColor('color')
	    .arcStroke(0.35)
			.backgroundColor('rgba(0,0,0,0)')
			.showAtmosphere(false)
	    .arcDashLength((arc) => { return 0.05 / arc.length; })
	    .arcDashGap((arc) => { return 0.05 / arc.length })
	    .arcDashAnimateTime((arc) => { return 5000 * arc.length })
	    .pointOfView({ lat: this.center.lat - 12, lng: this.center.lon, altitude: 1 }, 0);


	    fetch('./js/land-110m.json').then(res => res.json())
	      .then(landTopo => {
	        _this.g
	          .polygonsData(topojson.feature(landTopo, landTopo.objects.land).features)
	          .polygonCapMaterial(new THREE.MeshLambertMaterial({ color: 'grey', side: THREE.DoubleSide }))
	          .polygonSideColor(() => 'rgba(255,0,0,0)')
	          .polygonAltitude(0.0075)
	          .polygonsTransitionDuration(0);


	      });

		}
	  


    // start animation
    this.anim = window.setTimeout(function(){
    	_this.animate();
    }, 1);


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

	initMaterials: function() {
		const a = this.g.arcsData();
	
		for(var i = 0; i < a.length; i++) {
			const mat = a[i].__threeObjArc.children[0].material;
			if(!mat.userData.hacked) {
				console.log('not hacked, hacking', i);
				mat.customProgramCacheKey = function () {	
						return i + ' ' + Date.now();
				};

				mat.needsUpdate = true;
				mat.onBeforeCompile = function ( shader ) {

					shader.uniforms.alpha = { value: 0.1 };

					shader.fragmentShader = 'uniform float alpha;\n' + shader.fragmentShader;
					shader.fragmentShader = shader.fragmentShader.replace(
						'gl_FragColor = vColor;',
						'gl_FragColor = vColor * alpha;');

					mat.userData.shader = shader;
					
				};

				mat.userData.hacked = true;
			} else {
				console.log('already hacked', i);
			}
		}
		
		this.materialsInitialised = true;
	},

	animate: function() {
		const _this = this;
		if(!this.materialsInitialised) {
			this.initMaterials();
			this.anim = window.setTimeout(function() {		
				_this.animate();
			}, 0);
			return true;
		}
		// go to data el, then iterate

		let prevIndex = this.curIndex - 1;
		if(prevIndex < 0) {
			prevIndex = this.data.length - 1;
		}

		const prevArcIndex = this.originToArc[ this.data[prevIndex].origin ];
		const arcIndex = this.originToArc[ this.data[this.curIndex].origin ];


		console.log('current origin', this.data[this.curIndex].origin, arcIndex);
		console.log('prev index', prevArcIndex);

		gsap.to(this.arcsData[arcIndex].__threeObjArc.children[0].material.uniforms.alpha, {
			value: 1,
			duration: 0.5
		});

		if(prevArcIndex != arcIndex) {
			gsap.to(this.arcsData[prevArcIndex].__threeObjArc.children[0].material.uniforms.alpha, { 
				value: 0.2,
				duration: 0.5
			});
		}
		

		this.g.pointOfView({ lat: this.data[this.curIndex].lat, lng: this.data[this.curIndex].lon, altitude: 1 }, 1000);
		this.curIndex++;
		if(this.curIndex >= this.data.length) {
			this.curIndex = 0;
		}
		
		
		this.anim = window.setTimeout(function() {
			fifo.increment();
			_this.animate();
		}, 3000);
	}

}

export { globe };

    