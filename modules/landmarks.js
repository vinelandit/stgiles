import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { ld } from './ld.js';

const landmarks = {
	
	data: [],
	activeParish: null,

	init: function(scene, camera, project) {

		this.project = project; // pre-initialised map projection module

		this.camera = camera;
		this.scene = scene;
		this.labelRenderer = new CSS2DRenderer();
		this.labelRenderer.setSize( window.innerWidth, (window.innerHeight + 200));
		this.labelRenderer.domElement.style.position = 'absolute';
		this.labelRenderer.domElement.style['pointer-events'] = 'none';

		this.labelRenderer.domElement.style.top = 0;
		this.labelRenderer.domElement.style.left = 0;
		
		document.getElementById('mapHolder').appendChild( this.labelRenderer.domElement );

		// add active parish marker
		const parish = new THREE.Group();
		
		parish.position.set(0, 0, 0);
		scene.add(parish);
		
		const label = document.createElement('label');
		label.className = 'landmark';
		label.classList.add('parish');

		const span = document.createElement('span');
		span.textContent = 'PENDING';
		label.appendChild(span);
		const label3 = new CSS2DObject(label);
		label3.position.set(0, 0.1, 0);
		label3.center.set(0, 0);
		parish.add(label3);

		/* const buf = new THREE.BufferGeometry();
		const mat = new THREE.LineBasicMaterial( { vertexColors: false, color: new THREE.Color(0x000000), transparent: true } );
		const positions = [
			new THREE.Vector3(0, 0,   0),
			new THREE.Vector3(0, 0.2, 0)
		];

		buf.setFromPoints(positions);
		const line = new THREE.Line(buf, mat);
		parish.add(line);
		*/
		parish.renderOrder = -100000;
		this.activeParish = parish;

		for(var i = 0; i < ld.length; i++) {
			const pin = new THREE.Group();
			const xy = this.project.ll2xy(ld[i].lat, ld[i].lon);

			pin.position.set(xy[0], 0, xy[1]);
			scene.add(pin);
			
			const label = document.createElement('label');
			label.className = 'landmark';

			const pop = parseInt(ld[i].pop.replace(',', ''));
			if(pop > 100000) {
				label.classList.add('large');
			} else if (pop > 50000) {
				label.classList.add('medium'); 
			} else if (pop > 20000) {
				label.classList.add('small');
			} else {
				label.classList.add('village');
			}

			const span = document.createElement('span');
			span.textContent = ld[i].name;
			label.appendChild(span);
			const label3 = new CSS2DObject(label);
			label3.position.set(0, 0.2, 0);
			label3.center.set(0, 0);
			pin.add(label3);

			const buf = new THREE.BufferGeometry();
			const mat = new THREE.LineBasicMaterial( { vertexColors: false, color: new THREE.Color(0x000000), transparent: true } );
			const positions = [
				new THREE.Vector3(0, 0,   0),
				new THREE.Vector3(0, 0.2, 0)
			];

			buf.setFromPoints(positions);
			const line = new THREE.Line(buf, mat);
			pin.add(line);
			pin.renderOrder = -100000;

			this.data.push({
				pin: pin,
				label: label,
				label3: label3,
				mat: mat
			});

			
			
		}
		
	},

	tooClose: function(lat, lon, limit = 1) {
		for(var i in ld) {
			const dist = this.dist(lat, lon, ld[i].lat, ld[i].lon);
			if(dist < limit) {
				return [dist, ld[i] ];
			}
		}
		return -1;
	},

	dist(lat1, lon1, lat2, lon2) {
	  if (lat1 == lat2 && lon1 == lon2) {
	    return 0;
	  }

	  const radlat1 = (Math.PI * lat1) / 180;
	  const radlat2 = (Math.PI * lat2) / 180;

	  const theta = lon1 - lon2;
	  const radtheta = (Math.PI * theta) / 180;

	  let d =
	    Math.sin(radlat1) * Math.sin(radlat2) +
	    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

	  if (d > 1) {
	    d = 1;
	  }

	  d = Math.acos(d);
	  d = (d * 180) / Math.PI;
	  d = d * 60 * 1.1515;
	  d = d * 1.609344; //convert miles to km
	  
	  return d;
	},

	smoothstep: function (min, max, value) {
		const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
		return x*x*(3 - 2*x);
	},

	render(scene, camera) {

		this.labelRenderer.render( scene, camera );

		for(var i = 0; i < this.data.length; i++) {
			const d = camera.position.distanceTo(this.data[i].pin.position);
			const opacity = this.smoothstep(10, 5, d);
			this.data[i].label.style.opacity = opacity;
			this.data[i].mat.opacity = opacity;
		}
		
	
	}

		
}

export { landmarks };