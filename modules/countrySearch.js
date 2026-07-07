import { countries } from './countries.js';
import { states } from './states_USA.js';

const countrySearch = {

  tpl: `<div class="country" data-latitude="{latitude}" data-longitude="{longitude}">{country}</div>`,

  init: function(callback) {
    
    this.callback = callback;
    const _this = this;
    $(document).on('click', '.country', function(){
      $('#countrySearch').val('');
      $('#countryResults').html('');
      callback($(this).html(), $(this).attr('data-latitude'), $(this).attr('data-longitude'));
    });

    $('#countrySearch').on('keydown change', function(){
      
      const val = $(this).val().toLowerCase();
      _this.search(val);
        
    });
  },
  
  search: function(str) {
    const matches = [];
    if(str.length >= 2) {

      const l = str.length;
      for(var i = 0; i < states.length; i++) {
        
        if(states[i].state.substr(0, l).toLowerCase() == str.toLowerCase()) {
          matches.push({ origin: states[i].state + ' (USA)', latitude: states[i].latitude, longitude: states[i].longitude });
        }
        if(matches.length > 8) {
          break;
        }
      }


      for(var i = 0; i < countries.length; i++) {
        
        if(countries[i].name.substr(0, l).toLowerCase() == str.toLowerCase()) {
          matches.push({ origin: countries[i].name, latitude: countries[i].latitude, longitude: countries[i].longitude });
        }
        if(matches.length > 8) {
          break;
        }
      }
    }
    
    return this.parse(matches);

  },

  parse: function(matches) {
    let html = '';
    let tpl = '';
    for(var i = 0; i < matches.length; i++) {
      tpl = this.tpl;
      tpl = tpl.replaceAll('{country}', matches[i].origin);
      tpl = tpl.replaceAll('{latitude}', matches[i].latitude);
      tpl = tpl.replaceAll('{longitude}', matches[i].longitude);
      html += tpl;
    }
    $('#countryResults').html(html);
  }
}

export { countrySearch };