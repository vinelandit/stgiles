import search from './search.js';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import QRCode from 'qrcode'

export default {

    init: function(goNext, goPrev, dbRoot, globe, m, app, nameCallback, loadCallback, restartCallback, prepareInterstitialCallback) {

        const _this = this;
        
        console.log('init ui');
        this.app = app;
        this.goNext = goNext;
        this.goPrev = goPrev;
        this.globe = globe;
        this.nameCallback = nameCallback;
        this.loadCallback = loadCallback;
        this.restartCallback = restartCallback;
        this.prepareInterstitialCallback = prepareInterstitialCallback;
        this.m = m;
        this.curPanelID = 'home';
        this.panels = $('.panel');
        this.search = search;
        this.pb = $('.progressBarInner');
        this.nav = document.getElementById('nav');
        this.begin = document.getElementById('begin');
        this.loading = document.getElementById('loading');
        this.outlier = document.getElementById('outlier');
        this.activeInput = null;
        this.recordThreshold = 500; // names with fewer records than this are excluded from visualisation
        this.inactivityTimeout = 6000; // seconds

        search.init($('#searchName'), $('#searchResults'), this.recordThreshold, function(surname, id, num_records) {
            

            if(num_records >= _this.recordThreshold) {
                surname = _this.capitalizeFirstLetter(surname.toLowerCase());
                _this.ph('surname', surname);
                _this.ph('surname_plural', surname.at(-1) == 's' ? surname + 'es' : surname + 's');
                _this.ph('id', id);
                _this.ph('num_records', num_records.toLocaleString());
                

                _this.nameCallback(surname, id, num_records);
                search.clear();
                _this.keyboard.clearInput('searchName');
                if(!$('body').hasClass('changer')) _this.movePanel('where');
            }
            
           
            
        }, dbRoot);
    

        $('#begin').click(function() {
            
            _this.hidePanels();
            _this.goNext(1, true);


            _this.app.setUI('main');

        });

        $('.next').click(function() {
            if ($('#nav').hasClass('disabled') || _this.m.flying) return false;
            _this.goNext();
        });

        $('.back').click(function() {
            if ($('#nav').hasClass('disabled') || _this.m.flying) return false;
            _this.goPrev();

        });

        $('.btnNextPanel').click(function(){
            const targetID = $(this).attr('data-id');
            if($(this).attr('data-skip') == 'yes') {
                // user is skipping country selection, save partial database entry
                _this.app.state.origin = '';
                _this.app.state.lat = 0;
                _this.app.state.lon = 0;
                _this.app.state.noAncestry = 0;
                _this.app.saveState();
            }
            _this.movePanel(targetID);
        });

        $('.restart, .restartOverview, .restartPanel').click(function(){
            _this.restart();
        });

        $(document).on('click', '.tlEvent, .mapLink', function(e){
            if(_this.m.flying || _this.nav.classList.contains('disabled') || $(this).hasClass('selected')) {
                return false;
            }
            const index = $(this).index($(this).hasClass('tlEvent') ? '.tlEvent' : '.mapLink');
            _this.goNext(index, false, true);
        });

        $('.overview').click(function() {
            _this.skipToOverview();

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
          _this.activeInput.val(input).change();
        }

        this.setInactivityTimeout();

        $(document).click(function() {
            window.clearTimeout(_this.tDaemon);
            _this.setInactivityTimeout();
        });

        document.addEventListener("keydown", (event) => {
            if(event.key == '1') {
                _this.showChanger();
            }
        })

    },

    skipToOverview: function() {
        if ($('#nav').hasClass('disabled') || this.m.flying) return false;

        this.goNext( $('.tlEvent').length , -1, true);
    },

    showChanger: function() {
        gsap.set('#panels', {
            display: 'block'
        });
        gsap.set('.panel', {
            display: 'none'
        });
        gsap.set('.panel#p_name', {
            display: 'block',
            opacity: 1,
            scale: 1
        });
        

        this.mapKeyboard('name');
        this.showKeyboard('name');
        $('body').addClass('changer');
    },

    hideChanger: function() {
        gsap.set('#panels', {
            display: 'none'
        });
        this.hideKeyboard();
        $('body').removeClass('changer');

    },

    capitalizeFirstLetter: function(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    },

    setInactivityTimeout: function() {
        // start inactivity timeout
        const _this = this;
        this.tDaemon = window.setTimeout(function() {
            if(!_this.globe.animating) {
                _this.restart();
            }
            
            _this.setInactivityTimeout();
        }, this.inactivityTimeout * 1000);
    },

    restart: function() {
        gsap.globalTimeline.clear();

        this.mapKeyboard('name');
        this.keyboard.clearInput('searchName');
        this.mapKeyboard('where');
        this.keyboard.clearInput('countrySearch');
        $('#countrySearch').val('');
        this.showPanels();
        this.movePanel('home');
        this.restartCallback();
        this.hideMap();

    },

    showMap: function() {

        gsap.set('#mapHolder', {
            opacity: 0.0000001
        });
        gsap.to('#mapHolder', {
            opacity: 1,
            duration: 0.2
        });

        

        
        gsap.set('#compass', {
            transform: 'rotate(0deg)'
        });
        gsap.to('#p_interstitial', {
            'background-color': 'rgba(100, 100, 100, 0)',
            duration: 1,
            ease: 'power1.inOut',
            onComplete: function() {
                
            }
        });
        gsap.to('.progressBar', {
            opacity:0,
            duration:1,
            ease: 'power1.inOut'
        });

        

        gsap.to('#stats, #inset', {
            x: 0,
            duration: 0.5,
            delay: 0
        });

        this.showBegin();


    },



    hideMap: function() {
        
        gsap.to('#mapHolder', {
            opacity: 0.000001,
            duration: 0.2,
            onComplete: function() {
                console.log('setting ghost');
                $('#mapHolder').css({
                    opacity: 0.000001
                });
            }
        });
    },
    

    ph: function(id, val) {
        $('.ph_' + id).text(val);
    },

    populate: function(surname) {
         $('.surname').html(surname);
    },

    enableNav: function() {
        gsap.set(this.nav, {
            display: 'block'
        });
        gsap.to(this.nav, {
            opacity: 1,
            duration: 0.5
        });

        
        gsap.to('#descriptionInner', {
            opacity: 1,
            duration: 0.5
        });
    },

    disableNav: function() {

        const _this = this;
        gsap.to(this.nav, {
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                gsap.set(_this.nav, {
                    display: 'none'
                });
            }
        });
        gsap.to('#descriptionInner', {
            opacity: 0,
            duration: 0.5,
            
        });
    },

    hideLoading: function(skip = false) {

    	const _this = this;
        $('#loading').fadeOut(500);

        this.showPanels(skip);
    },

    showQR: function(id, rootURL) {
        console.log('show QR', id, rootURL);
        QRCode.toDataURL(rootURL + '/mobile/?id=' + id + '&dbID=' + this.app.state.dbID)
          .then(url => {
            $('#qr').attr('src', url);
          })
          .catch(err => {
            console.error(err)
          })
    },

    showPanels: function(skip) {

        const _this = this;

        // hide containers
        
        gsap.set('.progressBar', {
            opacity: 1
        });



        gsap.to('#tlOuter, #overviewTitle, #navOverview, #overviewFrame', {
            opacity: 0,
            duration: 0.5,
            onComplete: function() {
                gsap.set('#tlOuter, #overviewTitle, #navOverview, #overviewFrame', {
                    display: 'none'
                });
            }
        });

        gsap.to('#stats, #ribbon, #inset, #compassHolder, #qrHolder, .restart', {
            opacity:0,
            duration: 0.5,
            delay:0,
            onComplete: function() {
                $('#panels').fadeIn(500);
                _this.movePanel(skip ? 'interstitial' : 'home');
                gsap.set('#stats, #ribbon, #compassHolder, #qrHolder, .restart, #descriptionHolder, #nav', {
                    display:'none'
                });
            }
        });  


        gsap.to(['#descriptionHolder'], {
            opacity: 0,
            duration: 0.5,
            delay:0
        });

        gsap.to(['#begin', '#nav'], {
            y: 200,
            duration: 0.25,
            opacity: 0,
            delay:0
        });

        

        /* $('#p_home').show();
        gsap.to('#p_home', {
            opacity: 1,
            duration: 0.5
        }); */


    },

    hidePanels: function() {
        $('#panels').fadeOut(500);
    },

    hideKeyboard: function() {
        console.log('hiding keyboard');
        gsap.to('#keyboard-holder', {
            opacity: 0,
            y: 100,
            duration: 0.5,
            onComplete: function() {
                gsap.set('#keyboard-holder', {
                    display: 'none'
                });
            }
        });
    },

    showKeyboard: function(id) {
        console.log('showing keyboard', id);
        if (id == 'name') {
            gsap.set('#keyboard-holder', {
                display: 'block',
                opacity: 0,
                y: 100
            });
            gsap.to('#keyboard-holder', {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 1
            });
        } else {
            gsap.to('#keyboard-holder', {
                opacity: 1,
                display: 'block',
                y: 120,
                delay: 0.0,
                duration: 0.5
            });
        }
        
    },

    movePanel: function(id) {
        
        const _this = this;

        $('body').removeClass('someCountryResults');
        const curPanelID = $('.panel.active').attr('id');

        console.log('curnext', curPanelID, id);
        if(('p_' + id) != curPanelID) {
            
            const me = $('.panel#' + curPanelID);
            const next = $('.panel#p_' + id);
            gsap.set(next, {
                scale: 0.5,
                opacity: 0,
                display: 'block'
            });
            gsap.to(me, {
                scale: 1.7,
                opacity: 0,
                duration: 0.5,
                ease: 'power1.inOut',
                onComplete: function() {
                    me.hide();
                }
            });
            gsap.to(next, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'power1.inOut',
                onComplete: function() {

                    
                }
            });
            if(id == 'name' || id == 'where') {
                this.showKeyboard(id);
                this.mapKeyboard(id);
            } else {
                this.hideKeyboard();
            }
        }

        $('.panel').removeClass('active');
        $('.panel#p_' + id).addClass('active');

        this.curPanelID = id;

        if(id == 'interstitial') {
            this.hideKeyboard();
            this.prepareInterstitialCallback();

            gsap.set(this.pb, {
                width: 0
            });

            gsap.to(this.pb, {
                width: '100%',
                duration: this.debug ? 0.1 : 2.5,
                delay: 0.1,
                ease: 'linear',
                onComplete: function() {
                    // _this.showMap();
                    _this.loadCallback();
                }
            });
            
        } else if (id == 'name') {

            this.globe.focus();
            search.clear();

            gsap.to('.panels_underlay', {
                y: 0,
                opacity: 1,
                duration: 1
            });
        }

        if(id != 'name') {
            gsap.to('.panels_underlay', {
                y: 100,
                opacity: 0,
                duration: 1
            });
        }
    },



    mapKeyboard: function(id) {
        this.keyboard.setOptions({
            inputName: id == 'where' ? 'countrySearch' : 'searchName'
        });
        this.activeInput = id == 'where' ? $('#countrySearch') : $('#searchName');
    },

    hideBegin: function() {
        const _this = this;
        gsap.to(this.begin, {
            transform: 'translateY(100px)',
            opacity: 0,
            duration: 0.5,
            onComplete: function() {
                gsap.set(_this.begin, {
                    display: 'none'
                });
            }
        });
        gsap.to(this.nav, {
            transform: 'translateY(0)',
            duration: 1,
            delay: 1.0
        });
    },

    showBegin: function() {
        gsap.set([this.begin, '#ribbon', '#mapHeading'], {
            display: 'block',
            opacity: 0
        });
        gsap.to([this.begin, '#ribbon', '#mapHeading'], {
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