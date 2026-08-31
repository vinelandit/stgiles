import { m } from './modules/map3d.js';
import { globe } from './modules/globe.js';
import { spieler } from './modules/spieler.js';
import outlierSpiel from './modules/outlierSpiel.js';
import pop from './modules/pop.js';
import ui from './modules/ui.js';
import text from './modules/text.js';
import { scroll } from './modules/scroll.js';
import { countrySearch } from './modules/countrySearch.js';


const debug = false;


const main = {

  maxVisitors: 15,

  send: function(payload, callback) {
    payload.auth = "s$fsqi-928";
    let url = this.dbRoot + "/?";

    for(var i in payload) {
      url += i + "=" + payload[i] + "&";
    }
    console.log('URL', url);
    const d = $.get(
      url, callback
    );


  },

  

  init: function() {

    const _this = this;

    if(false && document.URL.indexOf('localhost') > -1) {
      this.dbRoot = 'http://localhost:8888';
      this.dataRoot = 'http://localhost:8888/api';
    } else {
      this.dbRoot = 'https://ray.scot/stgiles';
      this.dataRoot = 'https://ray.scot/stgiles';
    }
    
    // this.apiRoot = 'https://ray.scot/stgiles';
    this.remoteRoot = 'https://ray.scot/stgiles2/dist';
    
    this.state = {
      origin: null,
      surname: debug ? "SMITH" : null,
      id: debug ? 239126 : null,
      num_records: debug ? 100000 : 0,
      noAncestry: 0,
      visitors: []
    }

    scroll.init();
    
    countrySearch.init(function(origin, lat, lon) {
      _this.state.origin = origin;
      _this.state.lat = lat;
      _this.state.lon = lon;
      _this.saveState();
      ui.movePanel('interstitial');
      ui.keyboard.clearInput('countrySearch');
    });

    ui.init(_this.goNext.bind(this), _this.goPrev.bind(this), this.dbRoot, globe, m, this,
      // name chosen callback
      function(name, id, num_records) {
        
        _this.state.surname = name;
        _this.state.id = id;
        _this.state.num_records = num_records;

        if(!$('body').hasClass('changer')) {
          // get recent clanspeople
          _this.send({ command: "recentClanspeople", surname: _this.state.surname}, function(data) {
            const rc = JSON.parse(data);
            globe.hide();
            scroll.show(rc.origins);
          });

          ui.movePanel('where');
        } else {
          m.populate(_this.state, _this.dataRoot, pop, _this.remoteRoot, function() {

            ui.skipToOverview();
            ui.hideChanger();
            console.log('updated changer');
          });
        }
        

      },
      // about to show map callback
      function() {
        gsap.to('.panels_background, .panels_heading', {
          opacity: 0,
          duration: 1,
          onComplete: function() {
            gsap.set('.panels_background, .panels_heading', {
              display: 'none'
            });
          }
        });
        m.populate(_this.state, _this.dataRoot, pop, _this.remoteRoot, function() {
          _this.setUI('initial');
        });
      },
      // restart callback
      function() {
        _this.setUI('hideAll');
        scroll.hide();
        countrySearch.search('');
        globe.init([..._this.state.visitors], true);
      },
      // prepare interstitial callback
      function() {
        scroll.hide();
      }
    );
    
    m.inset.init();
    m.init(function() {
      ui.debug = debug;

      _this.loadVisitors(function() {
        // all elements loaded, remove loading overlay
        if(!debug) {

          globe.init([..._this.state.visitors]);
        }
        ui.hideLoading(debug);
      });
      
    }, spieler, debug, ui, false);    


    if(debug) {
      // this.populate();
    }

  },

  loadVisitors: function(callback) {
    const _this = this;
    this.send({ command: "loadLastVisitors", count: this.maxVisitors}, function(data) {
      _this.state.visitors = JSON.parse(data).data;
      callback();
    });
  },

  saveState: function() {
    
    const _this = this;

    // store the origin, name and ID in the database
    console.log('saving state', this.state);

    if(this.state.origin != '') {
      this.state.visitors.unshift({
        surname: this.state.surname,
        origin: this.state.origin,
        lat: this.state.lat,
        lon: this.state.lon,
        noAncestry: this.state.noAncestry
      });

      if(this.state.visitors.length > this.maxVisitors) {
        this.state.visitors.pop();
      }
    }
    

    this.send({ 
      command: "save", 
      surname: this.state.surname,
      origin: this.state.origin,
      lat: this.state.lat,
      lon: this.state.lon,
      noAncestry: this.state.noAncestry
    }, function(data) {
      data = JSON.parse(data);
      console.log('save result', data);
      _this.state.dbID = data.id;
    });
  },


  setUI(mode) {
    console.log('setUI', mode);
    const tf = $('body').hasClass('changer') ? 0.1 : 1;
    if(mode == 'hideAll') {

      // returning to intro panels
      gsap.to('.illustrations', {
        duration: 0.5,
        opacity: 0
      });

      gsap.set('.panels_background, .panels_heading', {
        display: 'block'
      });
      gsap.to('.panels_background, .panels_heading', {
        opacity: 1,
        duration: 1,
        
      });

      $('#mapHolder').removeClass('tiltshift');

      gsap.set(m.lodPhase, {
          value: 1
      });

      gsap.to('#backgroundFill', {
        opacity: 0,
        duration: 1,
        onComplete: function() {
          gsap.set('#backgroundFill', {
            display: 'none'
          });
        }
      });


      gsap.set('.default_heading', {
        opacity: 1,
        display: 'block'
      });

      gsap.set('.previous_visitors_heading, .first_visitor_heading', {
        opacity: 0,
        display: 'none'
      });

      gsap.to('#tlYear, .overview, #mapHeading', {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
          gsap.set('#tlYear, .overview, #mapHeading', {
            display: 'none'
          });
        }
      });

      gsap.to('.panels_underlay', {
        y: 200,
        opacity: 0,
        duration: 0.5
      });
      
      $('#nrs_logo, #frame').removeClass('mapActive').removeClass('final');

      
    } 
    else if(mode == 'final') {
      // last record, rearrange UI
      

      $('#frame').addClass('final');
      gsap.to('#inset', {
        opacity: 0,
        x: -200,
        duration: tf * 1
      });
      gsap.to('#descriptionHolder', {
        opacity: 0,
        x: 200,
        duration: tf * 1
      });

      gsap.to('#tlOuter', {
        opacity: 0,
        duration: tf * 1
      });
      gsap.to('#compassHolder', {
        opacity: 0,
        x: 100,
        duration: tf * 1
      });
      gsap.to('.overview', {
        opacity: 0,
        x: 100,
        duration: tf * 1
      });
      gsap.to('.restart', {
        opacity: 0,
        duration: tf * 1
      });

      gsap.to('#tlYear', {
        opacity: 0,
        duration: tf * 1
      });

      if(tf == 1) {
        gsap.set('.overviewLabel', {
          display: 'block',
          opacity: 0
        });
        gsap.to('.overviewLabel', {
          opacity: 1,
          duration: tf * 2,
          delay: tf * 3
        });
      } else {
        window.setTimeout(function() {
          gsap.set('.overviewLabel', {
            display: 'block',
            opacity: 0
          });
          gsap.to('.overviewLabel', {
            opacity: 1,
            duration: tf * 2,
            delay: tf * 3
          });
        }, 100);
      }
      
      gsap.to(m.overviewMat, {
        opacity: 1,
        duration: tf * 2,
        delay: tf * 3
      });

      gsap.set('#overviewFrame, #qrHolder, #overviewTitle, #navOverview', {
        display: 'block',
        opacity: 0
      });

      gsap.to('#overviewFrame, #qrHolder, #overviewTitle, #navOverview', {
        opacity: 1,
        duration: tf * 2,
        delay: tf * 3
      });

      gsap.to('#tlYear', {
        y: '10vh',
        duration: tf * 5,
        ease: 'power1.inOut',
        delay: 0
      });

      gsap.to('.illustrations', {
        delay: 5,
        duration: 1,
        opacity: 1
      });



    } else if (mode == 'main') {
      // main section
      console.log('setui main');
      // returning to intro panels
      gsap.to('.illustrations', {
        duration: 0.5,
        opacity: 0
      });
      gsap.set('#tlOuter, .overview, #tlYear, #mapHeading', {
        display: 'block'
      });

      gsap.set('#tlOuter, .overview, #mapHeading', {
        opacity: 0
      });

      gsap.to('#tlOuter, .overview, #tlYear, #mapHeading', {
          opacity: 1,
          duration: 1,
          delay: 4
      });

      gsap.to('#overviewFrame, #qrHolder, #overviewTitle, #navOverview', {
        opacity: 0,
        duration: 1,
        delay: 0,
        onComplete: function() {
          gsap.set('#overviewFrame, #qrHolder, #overviewTitle, #navOverview', {
            display: 'none'
          });
        }
      });

      gsap.set('#nav, #frame, #descriptionHolder, #descriptionInner, #ribbon, #stats, #inset, .restart, #compassHolder', {
          display:'block'
      });

      gsap.to(['#compassHolder'], {
          opacity:1,
          x: 0,
          duration: 1,
          delay:4
      });  

      gsap.to('#frame, #descriptionHolder, #ribbon, #stats, #inset, .restart', {
          opacity: 1,
          duration: 1,
          delay: 4
      });

      gsap.to('#tlYear', {
        y: '0',
        duration: 5,
        delay: 0
      });

      $('.restart').addClass('visible');

      

      gsap.to('.overview', {
        x: 0,
        duration: 1,
        delay: 4
      });

      gsap.to('#inset', {
        x: 0,
        duration: 1,
        delay: 4
      });

      gsap.to('#descriptionHolder', {
        x: 0,
        duration: 1,
        delay: 4
      });

      gsap.to('.overviewLabel', {
        opacity: 0,
        duration: 2,
        delay: 1
      });
      gsap.to(m.overviewMat, {
        opacity: 0,
        duration: 2,
        delay: 1
      });


      $('#nrs_logo, #frame').addClass('mapActive');


    } else if (mode == 'initial') {

      gsap.set('#backgroundFill', {
        display: 'block',
        opacity: 0
      });
      gsap.to('#backgroundFill', {
        opacity: 1,
        duration: 1,
        
      });

      m._shader.uniforms['uHeatmapVisiblePhase'].value = 0;

      // initial map view
      console.log('setui initial');
      gsap.set('#overviewFrame, #qrHolder, #overviewTitle, #tlYear, .overview, #navOverview, .overview', {
        display: 'none'
      });

      gsap.set('#tlYear', {
        opacity: 0,
        y: 0
      });

      gsap.set('.overviewLabel', {
        opacity: 0,
      });
      gsap.set(m.overviewMat, {
        opacity: 0
      });
    }
  },

  goNext: function(dir = 1, init, absolute = false) {

    if(!absolute && (spieler.index == 0 && dir == -1) || (spieler.index == spieler.data.length -1 && dir == 1)) {
      return false;
    }

    

    ui.disableNav();
    
    const info = spieler.getNext(dir, init, absolute);
    
    info.births = pop.data.births.totals[ info.year ];
    info.deaths = pop.data.deaths.totals[ info.year ];
    info.marriages = pop.data.marriages.totals[ info.year ];
    info.population = pop.population( info.year );

    if(info.year == 1900) info.population = pop.population(1890);

    m.timeline.scrollTo(info.year);

    if(info.init == 1 || absolute) {
      ui.hideBegin();
    } 

    text.show(info);
    m.activeYear = info.year;


    if(info.init == -1) {
      this.setUI('final');
    } else if ($('#tlYear').html() == '1900') {
      // returning from final state
      this.setUI('main');
    } 

    m.fly(info.year, info.name, info.pos, function() {
      if(info.year < 1900) {
        window.setTimeout(function() {
          ui.enableNav();
        }, 1);
      }
      
      if(info.init == -1) {
        // ui.showBegin();
        
      } else {
        ui.hideBegin();
      }
      
    }, info.init);
  },

  goPrev: function() {
    this.goNext(-1);
  }

}
$(window).on('load', function(){

  // wait a second for layout to stabilise, to fix incorrect dimensions reported by Chrome
  window.setTimeout(function() { 
    main.init();
  }, 30);

});

