import { m } from './modules/map3d.js';
import { globe } from './modules/globe.js';
import { spieler } from './modules/spieler.js';
import outlierSpiel from './modules/outlierSpiel.js';
import pop from './modules/pop.js';
import ui from './modules/ui.js';
import text from './modules/text.js';
// import geocoder from './modules/geocoder.js';
import { countrySearch } from './modules/countrySearch.js';
import timeline from './modules/timeline_new.js';

const debug = true;

const main = {

  maxVisitors: 30,

  send: function(payload, callback) {
    payload.auth = "s$fsqi-928";
    let url = this.apiRoot + "/?";

    for(var i in payload) {
      url += i + "=" + payload[i] + "&";
    }
    
    const d = $.get(
      url, callback
    );


  },

  init: function() {

    const _this = this;
    // this.apiRoot = 'http://localhost';
    this.apiRoot = 'https://ray.scot/stgiles';
    this.remoteRoot = 'https://ray.scot/stgiles2/dist';
    
    this.state = {
      origin: null,
      surname: null,
      id: null,
      noAncestry: 0,
      visitors: []
    }
    
    countrySearch.init(function(origin, lat, lon) {
      _this.state.origin = origin;
      _this.state.lat = lat;
      _this.state.lon = lon;
      ui.movePanel('name');
      ui.keyboard.clearInput('countrySearch');
    });

    ui.init(_this.goNext, _this.goPrev, this.apiRoot, 
      // name chosen callback
      function(name, id, num_records) {
        
        _this.state.surname = name;
        _this.state.id = id;
        _this.state.num_records = num_records;

        _this.saveState();

      },
      // about to show map callback
      function() {
        _this.populate();
      },
      // restart callback
      function() {
        console.log('reinitialising globe');
        globe.init([..._this.state.visitors], true);
      }
    );
    m.init(function() {
      ui.debug = debug;

      _this.loadVisitors(function() {
        // all elements loaded, remove loading overlay
        globe.init(_this.state.visitors);
        ui.hideLoading(debug);
      });
      
    }, debug);    

  },

  loadVisitors: function(callback) {
    const _this = this;
    this.send({ command: "loadLastVisitors", count: this.maxVisitors}, function(data) {
      _this.state.visitors = JSON.parse(data).data;
      callback();
    });
  },

  saveState: function() {
    // store the origin, name and ID in the database
    console.log('saving state', this.state);
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

    this.send({ 
      command: "save", 
      surname: this.state.surname,
      origin: this.state.origin,
      lat: this.state.lat,
      lon: this.state.lon,
      noAncestry: this.state.noAncestry
    }, function(data) {
      console.log('save result', data);
    });
  },

  populate: function() {

    const _this = this;
    // initialise modules
    ui.populate(this.state.surname);

    spieler.init(this.state.surname, this.state.id, this.apiRoot, function(coords) { 
      
      if(coords && _this.state.num_records > 300) {
        console.log('data', coords);
        pop.init(_this.state.id, _this.apiRoot);
        timeline.init(pop, coords, 1560, 1900, 'population', 'continuousYear');
        
        m.makeSpheres(coords);
        ui.showMap();
        ui.showQR(_this.state.id, _this.remoteRoot);
        m.reset();
        
      } else {
        // insufficient data for this surname -
        // load what data we have anyway and show explanatory panel
        pop.init(_this.state.id, _this.apiRoot, function(data) {
          ui.movePanel('insufficient');
          outlierSpiel.show(data, _this.state.surname, _this.state.num_records);
        });
        
      }
      
    }, debug);
    
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

    timeline.scrollTo(info.year);

    if(info.init == 1 || absolute) {
      ui.hideBegin();
    } 


    text.show(info);
    m.activeYear = info.year;

    m.fly(info.year, info.name, info.pos, function() {
      window.setTimeout(function() {
        ui.enableNav();
      }, 500);
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
  window.setTimeout(function() { main.init(); }, 1000);
});

