import { spieler } from '../modules/spieler.js';
import outlierSpiel from '../modules/outlierSpiel.js';
import pop from '../modules/pop.js';
import ui from '../modules/ui.js';

const mobile = {

  tpl: `
    <div class="mobile_entry">
      <h2>{year}</h2>
      <p>{text}</p>
      <p class="small">Population estimate {pop}</p>
    </div>
  `,

  init: function() {

    const _this = this;

    this.target = $('#mobile_content_target');
    // this.apiRoot = 'http://localhost';
    this.apiRoot = 'https://ray.scot/stgiles';
    
    // get name
    const url_string = window.location.href; 
    const url = new URL(url_string);
    const id = parseInt(url.searchParams.get('id'));
    if(id > 0) {
      const url = _this.apiRoot + '/?auth=s$fsqi-928&command=surnameFromID&id=' + id;
      $.get(url, function(data){
        data = JSON.parse(data);
        _this.id = data.id;
        _this.surname = data.surname;
        _this.num_records = data.num_records;
        ui.ph('surname', _this.surname);
        ui.ph('num_records', _this.num_records);
        _this.populate();
      });
    }
    

  },

  populate: function() {

    const _this = this;

    spieler.init(this.surname, this.id, this.apiRoot, function(coords) { 
      console.log(spieler.data);

      let html = '';
      if(coords) {
        
        pop.init(_this.id, _this.apiRoot, function() {
          for(var i in spieler.data) {
            
            let o = _this.tpl;
            const row = spieler.data[i];
            o = o.replaceAll('{year}', row.year);
            o = o.replaceAll('{text}', row.text + (row.historical == '' ? '' : ' </p><p class="small">' + row.historical + '<p>'));
            o = o.replaceAll('{pop}', pop.population(row.year));

            html += o;

          }

          _this.target.html(html);
        });
        
        

      } else {
        // insufficient data for this surname -
        // load what data we have anyway and show explanatory panel
        pop.init(_this.id, _this.apiRoot, function(data) {
          outlierSpiel.show(data, _this.surname, _this.num_records, true);
        });
        
      }
      
    });
    
  },

  

}

$(window).on('load', function(){
  mobile.init();
});

