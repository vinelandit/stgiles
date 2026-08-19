import * as THREE from 'three';
import {
    Project
} from './project.js';

const inset = {

  config: {
    north: 60.86,
    south: 54.634,
    east: -0.7624839,
    west: -8.6667826,
    offsetY: 0,
    scale: 1,
    invert: false,
    mode: 'equirectangular'
  },

  init: function() {

    const _this = this;

    this.frame = 0;
    // get dimensions 
    this.el = $('#insetInner img');
    this.marker = $('#insetMarker');
    this.config.width = this.el.width();
    this.config.height = this.el.height();

    const offset = 0.5 * ($('#insetInner').width() - this.config.width);

    $('#insetOverlay').css({ 
      width: this.el.width() + 'px',
      height: this.el.height() + 'px' ,
      left: offset + 'px'
    });

    this.project = new Project(this.config);
    this.tex = null;

    const mapLoader = new THREE.TextureLoader();
        mapLoader.load('./images/inset_map.png',
            function(tex) {
                tex.encoding = THREE.sRGBEncoding;
                tex.colorSpace = THREE.SRGBColorSpace;

                _this.tex = tex;
                _this.initHeat();

            },
            function(err) {
                console.error(err);
            }
        ); 

    
  },

  initHeat: function() {

    this.renderer = new THREE.WebGLRenderer({
        antialias: true
    });


    this.renderer.setSize(this.config.width, this.config.height);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(this.config.width / - 2, this.config.width / 2, this.config.height / 2, this.config.height / - 2);
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);

    this.scene.add(this.camera);
    document.getElementById('insetInner').appendChild(this.renderer.domElement);


    this.material = new THREE.MeshStandardMaterial({
        map: this.tex,

    });

    this.ar = this.config.width / this.config.height;
    

    const numHotspots = 20;
    let injectUniforms = `
    uniform float uAspectRatio; 
    `;
    let injectPost = `
    vec2 p = vMapUv; p.y /= uAspectRatio; float density = 0.0;
    float cutoff = 0.05;
    float bands = 15.;
    float bias = -.25;
    float smoothness = 0.2;
    float exponent = 35.;
    float factor = 3.0;
    vec2 h;

    vec2 uResolution = vec2(${this.config.width}, ${this.config.height});
    `;


    for(let i = 0; i < numHotspots; i++) {
        this.material.userData['hotspot' + i] = { value: [0.0, 0.0, 0.0] };
        
        
        injectUniforms += `uniform vec3 uHotspot` + i + `;
        `;

        injectPost += `

        // gaussian         
                
        h = uHotspot${i}.xy;
        h.y /= uAspectRatio;

        density += (factor * (uHotspot${i}.z)) * exp( - exponent * length(p - h / uResolution));


        

        // density += float(length(p - h / uResolution) < 0.01);
        `
    }


    injectPost += `; 
    gl_FragColor = vec4(0.5) * texture(map, vMapUv).a;
    

    // density = smoothstep(cutoff * 0.99, cutoff * 1.01, density);
    
    
    
    // density *= texture(map, vMapUv).a; // compensating for Y texture offset
    density = round(density * bands) / bands;


    
    float grid = 0.5 + (0.5 + bias) * sin(vMapUv.t * 500.);

    grid += bias;

    float final = smoothstep(grid, grid + smoothness, density);
  
    gl_FragColor = mix(gl_FragColor, gl_FragColor * vec4(62., 139., 103., 255.0) / 255.0, final);
    ;
    
`;



    this.material.onBeforeCompile = shader => {
        shader.uniforms['uAspectRatio'] = new THREE.Uniform(this.ar);
        shader.uniforms['uTest'] = new THREE.Uniform(1);
        for(let i = 0; i < numHotspots; i++) {
            shader.uniforms['uHotspot' + i] = new THREE.Uniform(new THREE.Vector3(this.material.userData['hotspot' + i].value[0], this.material.userData['hotspot' + i].value[1], this.material.userData['hotspot' + i].value[2]));
        }

        shader.fragmentShader = injectUniforms + shader.fragmentShader;
        
        shader.fragmentShader = shader.fragmentShader.replace(`#include <dithering_fragment>`, `#include <dithering_fragment>
            ${injectPost}`);

        this._shader = shader;

    }

    this.material.toneMapping = false;

    const geometry = new THREE.PlaneGeometry(this.config.width, this.config.height);
    const plane = new THREE.Mesh(geometry, this.material);

    this.scene.add(plane);

    this.renderer.render(this.scene, this.camera);

    
  },

  initLinks: function(data) {

    const _this = this;
    let html = '';
    const target = $('#insetOverlay');
    $('.mapLink').remove();
    for(var year in data) {
      html += `<div class="mapLink" style="transform:translate(`;

      const xy = _this.project.ll2xy(data[year][0], data[year][1]);
      html += `${xy[0]}px, ${xy[1]}px`;
      html += `)"></div>`;
    }
    
    target.append(html);
  },

  hide: function() {
    this.marker.removeClass('show');
  },

  show: function() {
    this.marker.addClass('show');
  },

  update: function(position) {

    this.frame++;

    const xy = this.project.ll2xy(position.lat, position.lon);
    
    // console.log('update inset', position, xy);
    this.marker.css({
      transform: 'translate(' + (xy[0] + 'px, ' + xy[1] + 'px)')
      
    });

    this.renderer.render(this.scene, this.camera);

  }

};

export { inset };