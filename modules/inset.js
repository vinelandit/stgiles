import {
    Project
} from './project.js';

const inset = {

  config: {
    north: 60.86,
    south: 54.634,
    east: -0.7624839,
    west: -8.6667826,
    scale: 1,
    invert: false,
    mode: 'equirectangular'
  },

  init: function() {

    const _this = this;
    // get dimensions 
    this.el = $('#insetInner img');
    this.marker = $('#insetMarker');
    this.config.width = this.el.width();
    this.config.height = this.el.height();

    const offset = 0.5 * ($('#insetInner').width() - this.config.width);

    console.log(this.config.width, this.config.height, 'mork');
    $('#insetOverlay').css({ 
      width: this.el.width() + 'px',
      height: this.el.height() + 'px' ,
      left: offset + 'px'
    });
    this.project = new Project(this.config);
  },

  hide: function() {
    this.marker.removeClass('show');
  },

  show: function() {
    this.marker.addClass('show');
  },

  update: function(position) {
    
    const xy = this.project.ll2xy(position.lat, position.lon);
    
    this.marker.css({
      transform: 'translate(' + (xy[0] + 'px, ' + xy[1] + 'px)')
      
    });
  }

};

export { inset };