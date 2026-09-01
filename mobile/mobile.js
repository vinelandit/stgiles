import { spieler } from '../modules/spieler.js';
import outlierSpiel from '../modules/outlierSpiel.js';
import pop from '../modules/pop.js';
import { m } from '../modules/map3d.js';
import ui from '../modules/ui.js';

const mobile = {

  tpl: `
    <div class="mobile_entry">
      <h2>{year}</h2>
      <p>{text}</p>
      <p class="small">Population estimate {pop}</p>
    </div>
  `,

  mReady: false,
  dReady: false,

  state: {
    mobileVisitorID: 0,
    alreadyAnsweredID: 0
  },

  init: function() {

    const _this = this;


    m.init(function() {
      console.log('map initialised');
      _this.mReady = true;
      _this.startIfReady();
    }, spieler, false, ui, true);

    this.target = $('#mobile_content_target');
    // this.apiRoot = 'http://localhost';
    this.apiRoot = 'https://ray.scot/stgiles';
    
    // get name
    const url_string = window.location.href; 
    const url = new URL(url_string);
    const id = parseInt(url.searchParams.get('id'));

    const flush = url.searchParams.get('flush');
    if(flush == 'yes') {
      localStorage.removeItem('mobileVisitorID');
      localStorage.removeItem('alreadyAnsweredID');
    }

    const checkMobileVisitorID = parseInt(localStorage.getItem('mobileVisitorID'));
    const checkAlreadyAnsweredID = parseInt(localStorage.getItem('alreadyAnsweredID'));


    const dbID = parseInt(url.searchParams.get('dbID'));

    if(checkMobileVisitorID > 0) {
      this.state.mobileVisitorID = checkMobileVisitorID;
      if(checkAlreadyAnsweredID > 0) {
        this.state.alreadyAnsweredID = checkAlreadyAnsweredID;
      }
    }

    console.log('id', id);
    if(id > 0) {
      const url = _this.apiRoot + '/?auth=s$fsqi-928&command=nameFromID&id=' + id;

      $.get(url, function(data){
        data = JSON.parse(data).data;
        _this.state.id = data.id;
        _this.state.surname = data.surname;
        _this.state.num_records = data.num_records;
        ui.ph('surname', ui.capitalizeFirstLetter(_this.state.surname.toLowerCase()));
        ui.ph('num_records', _this.state.num_records);
        _this.dReady = true;


        // register mobile visitor in db
        if(!_this.state.mobileVisitorID) {
          _this.send({ 'command': 'registerMobile', 'surname' : _this.state.surname, 'dbID' : dbID }, 
            function(data) {
              data = JSON.parse(data);
              _this.state.mobileVisitorID = data.id;
              console.log('got mobile visitor ID', _this.state.mobileVisitorID);
              localStorage.setItem('mobileVisitorID', _this.state.mobileVisitorID);
              _this.initUI();
            }
          );
        } else {
          console.log('using previously stored mobile visitor ID', _this.state.mobileVisitorID);
          if(!_this.state.alreadyAnsweredID) {
            _this.initUI();
          } else {
            console.log('not showing UI because already answered');
          }
          
        }
        



        _this.startIfReady();
      });
    }
    



  },

  initUI: function() {

    const _this = this;
    // set up response form
    // $('#footer').slideDown(500);

    $('button.interested').click(function(e){
      e.preventDefault();
      const answer = $(this).attr('data-answer');
      if(answer == 'yes' || answer == 'no') {
        _this.send({ 'command' : 'updateMobile', 'surname': _this.state.surname, 'id': _this.state.mobileVisitorID, 'interested' : answer }, function() {
          // updated successfully

          localStorage.setItem('alreadyAnsweredID', _this.state.mobileVisitorID);
          $('#footer').slideUp(500);
          $('#footerAnswered').slideDown(500);
        })
      }
    });
  },

  send: function(payload, callback) {
    payload.auth = "s$fsqi-928";
    let url = this.apiRoot + "/?";

    for(var i in payload) {
      url += i + "=" + payload[i] + "&";
    }
    console.log('URL', url);
    const d = $.get(
      url, callback
    );


  },

  startIfReady: function() {

    const _this = this;
    if(this.mReady && this.dReady) {

        m.populate(this.state, this.apiRoot, pop, null, function() {
          console.log('map populated');
          _this.populate();
          // m.reset();

          gsap.set('#overviewTitle', {
            display: 'block',
            opacity: 0
          });

          gsap.to('#mapHolder, #overviewTitle',{
            opacity: 1,
            duration: 1
          });
          gsap.to('#mobile_loading', {
            opacity:0,
            scale: 1,
            duration: 1,
            onComplete: function() {
              gsap.set('#mobile_loading', {
                display: 'none'
              });
            }
          });

          window.setTimeout(function() {
            
            m.goMobile();
            gsap.to('.overviewLabel', {
                opacity: 1,
                duration: 2,
                delay: 1
              });
            
          }, 30);
          
          
        });
        
    }
  },

  populate: function() {

    const _this = this;
        
    pop.init(this.state.id, this.apiRoot, function() {

      let html = '';
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
    
    
    
  },

  

}

$(document).ready(function(){
  mobile.init();
  
});

