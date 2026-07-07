import timeline from './timeline_new.js';

const main = {

  init: function() {

    
    timeline.init(null, 1560, 1900, 'population', 'continuousYear');
    $('#timeline').css({opacity: 1});
  },


}
main.init();
