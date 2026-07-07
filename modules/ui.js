import search from './search.js';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import QRCode from 'qrcode'

export default {

    init: function(goNext, goPrev, apiRoot, nameCallback, loadCallback, restartCallback) {

        const _this = this;
        
        this.goNext = goNext;
        this.goPrev = goPrev;
        this.nameCallback = nameCallback;
        this.loadCallback = loadCallback;
        this.restartCallback = restartCallback;
        this.curPanelID = 'home';
        this.panels = $('.panel');
        this.search = search;
        this.pb = $('.progressBarInner');
        this.nav = document.getElementById('nav');
        this.begin = document.getElementById('begin');
        this.loading = document.getElementById('loading');
        this.outlier = document.getElementById('outlier');
        this.activeInput = null;
        this.inactivityTimeout = 180; // seconds

        search.init($('#searchName'), $('#searchResults'), function(surname, id, num_records) {
            _this.ph('surname', surname);
            _this.ph('surname_plural', surname.at(-1) == 'S' ? surname : surname + 's');
            _this.ph('id', id);
            _this.ph('num_records', num_records.toLocaleString());
            _this.nameCallback(surname, id, num_records);
            search.clear();
            _this.keyboard.clearInput('searchName');
            _this.movePanel('interstitial');
        }, apiRoot);
    

        $('#begin').click(function() {
            gsap.to(['#timeline'], {
                opacity: 1,
                duration: 1,
                delay: 0
            });
            _this.hidePanels();
            _this.goNext(1, true);

        });

        $('#next').click(function() {
            if ($('#nav').hasClass('disabled')) return false;
            _this.goNext();
        });

        $('#back').click(function() {
            if ($('#nav').hasClass('disabled')) return false;
            _this.goPrev();

        });

        $('.btnNextPanel').click(function(){
            const targetID = $(this).attr('data-id');
            _this.movePanel(targetID);
        });

        $('.restart').click(function(){
            _this.restart();
        });

        $(document).on('click', '.tlEvent', function(e){

            if(_this.nav.classList.contains('disabled') || $(this).hasClass('selected')) {
                return false;
            }
            const index = $(this).index('.tlEvent');
            _this.goNext(index, false, true);
        });

        this.keyboard = new Keyboard({
          onChange: input => onChangeKeyboard(input),
          layout: {
            default: [
              "Q W E R T Y U I O P {bksp}",
              "A S D F G H J K L '",
              "Z X C V B N M",
              "{space}"
            ],
          }
        });

        function onChangeKeyboard(input){
          // document.querySelector(".input").value = input;
          console.log("Input changed", input);
          _this.activeInput.val(input).change();
        }

        this.setInactivityTimeout();

        $(document).click(function() {
            window.clearTimeout(_this.tDaemon);
            _this.setInactivityTimeout();
        });

    },

    setInactivityTimeout: function() {
        // start inactivity timeout
        const _this = this;
        this.tDaemon = window.setTimeout(function() {
            _this.restart();
            _this.setInactivityTimeout();
        }, this.inactivityTimeout * 1000);
    },

    restart: function() {
        gsap.globalTimeline.clear();
        this.hideQR();
        this.showPanels();
        this.movePanel('home');
        this.restartCallback();
    },

    showMap: function() {
        gsap.set('#compass', {
            transform: 'rotate(0deg)'
        });
        gsap.to('#p_interstitial', {
            'background-color': 'rgba(100, 100, 100, 0)',
            duration: 1,
            ease: 'power1.inOut'
        });
        gsap.to('.progressBar', {
            opacity:0,
            duration:1,
            ease: 'power1.inOut'
        });

        // $('#panels').fadeOut(500);
        gsap.to(['#compassHolder'], {
            opacity:1,
            x: 0,
            duration: 0.5,
            delay:0
        });  
        this.showBegin();
    },

    ph: function(id, val) {
        $('.ph_' + id).html(val);
    },

    populate: function(surname) {
         $('.surname').html(surname);
    },

    enableNav: function() {
        this.nav.classList.remove('disabled');
    },

    disableNav: function() {
        this.nav.classList.add('disabled');
    },

    hideLoading: function(skip = false) {

    	const _this = this;
        $('#loading').fadeOut(500);
        
        this.showPanels(skip);
    },

    showQR: function(id, rootURL) {
        console.log('show QR', id, rootURL);
        QRCode.toDataURL(rootURL + '/mobile/?id=' + id)
          .then(url => {
            $('#qr').attr('src', url);
          })
          .catch(err => {
            console.error(err)
          })
    },

    hideQR: function() {
        
    },

    showPanels: function(skip) {

        const _this = this;



        // hide containers
        gsap.set('#p_interstitial', {
            'background-color': 'rgba(80, 80, 80, 1)'
        });
        gsap.set('.progressBar', {
            opacity: 1
        });

        gsap.to(['#stats', '#compassHolder', '#qrHolder'], {
            opacity:0,
            x: -200,
            duration: 0.5,
            delay:0,
            onComplete: function() {
                $('#panels').fadeIn(500);
                _this.movePanel(skip ? 'name' : 'home');
            }
        });  

        gsap.to(['#inset'], {
            opacity:0,
            x: 200,
            duration: 0.5,
            delay:0
        }); 

        gsap.to(['#timeline'], {
            opacity:0,
            duration: 0.5,
            delay:0
        });  

        gsap.to(['#descriptionHolder'], {
            opacity: 0,
            y: 200,
            duration: 0.5,
            delay:0
        });

        gsap.to(['#begin', '#nav'], {
            y: 200,
            duration: 0.5,
            delay:0
        });

        if(skip || skip == 'home') {
            $('.restart').addClass('visible');
        } else {
            $('.restart').removeClass('visible');
        }


    },

    hidePanels: function() {
        $('#panels').fadeOut(500);
    },

    movePanel: function(id) {
        
        const _this = this;

        if(id != 'home') {
            $('.restart').addClass('visible');
        }


        if(id != this.curPanelID) {
            $('#keyboard-holder').hide();
            const me = $('.panel#p_' + this.curPanelID);
            const next = $('.panel#p_' + id);
            gsap.set(next, {
                x: '100%'
            });
            gsap.to(me, {
                x: '-100%',
                duration: 1.0,
                ease: 'power1.inOut'
            });
            gsap.to(next, {
                x: '0',
                duration: 1.0,
                ease: 'power1.inOut',
                onComplete: function() {
                    if(id == 'where' || id =='name') {
                        $('#keyboard-holder').show();
                        _this.mapKeyboard(id);
                    }
                }
            });
        }

        this.curPanelID = id;

        if(id == 'interstitial') {
            gsap.set(this.pb, {
                width: 0
            });

            gsap.to(this.pb, {
                width: '100%',
                duration: this.debug ? 0.1 : 2.5,
                delay: 1,
                ease: 'linear',
                onComplete: function() {
                    _this.loadCallback();
                }
            });
        } else if (id == 'name') {
            search.clear();
        }
    },

    mapKeyboard: function(id) {
        
        this.keyboard.setOptions({
            inputName: id == 'where' ? 'countrySearch' : 'searchName'
        });

        this.activeInput = id == 'where' ? $('#countrySearch') : $('#searchName');
        
    },

    hideBegin: function() {
        gsap.to(this.begin, {
            transform: 'translateY(130px)',
            duration: 1,
        });
        gsap.to(this.nav, {
            transform: 'translateY(0)',
            duration: 1,
            delay: 1.0
        });
    },

    showBegin: function() {
        this.begin.style.display = 'block';
        gsap.to(this.begin, {
            opacity: 1,
            transform: 'translateY(0)',
            duration: 1,
        });
        gsap.to(this.nav, {
            transform: 'translateY(100px)',
            duration: 1,
            delay: 1.0
        });
    },

}