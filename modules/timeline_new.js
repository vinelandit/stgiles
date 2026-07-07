export default {

    init: function(pop, data, startYear, endYear, populationID, continuousYearID, selector = '#tlStrip', 
        template = `<div class="tlItem" style="width:+++WIDTH+++">+++LABEL+++<span class="tick +++TICKCLASS+++"></span>+++EVENT+++</div>` ) {

        this.pop = pop;
        this.startYear = startYear;
        this.endYear = endYear;
        this.selector = selector;
        this.phase = startYear;

        this.wpc = (endYear - startYear) / 119;
        
        this.populationEl = document.getElementById(populationID);
        this.continuousYearEl = document.getElementById(continuousYearID);

        this.continuousYear = 0;

        $(selector).html('');

        $('#tlPointer').css({ width: this.wpc + '%'});

        for (var i = startYear; i <= endYear; i += 10) {
            let t = template;
            t = t.replace('+++WIDTH+++', this.wpc + '%');
            if(i % 100 == 0) {
                t = t.replace('+++LABEL+++', "<label>" + i + "</label>");
                t = t.replace('+++TICKCLASS+++', 'major');
            } else if (i % 50 == 0) {
                t = t.replace('+++LABEL+++', "<label class='minor'>" + i + "</label>");
                t = t.replace('+++TICKCLASS+++', '');
            } else {
                t = t.replace('+++LABEL+++', "");
                t = t.replace('+++TICKCLASS+++', '');
            }

            if(typeof data['' + i] != 'undefined') {
                t = t.replace('+++EVENT+++', "<div class='tlEvent' id='eventDecade" + i + "'></div>");
            } else {
                t = t.replace('+++EVENT+++', "");
            }
            $(selector).append(t);
        }

        this.placeConnector();

        // this.scrollTo(events[2]);


    },

    placeConnector: function() {
        const events = $('.tlEvent');
        const first = events[0];
        const last = events[events.length - 1];
        console.log(first, last);

        const c = $('#tlConnector');
        c.css({
            left: parseInt($(first).offset().left - $('#tl').offset().left) + 'px',
            width: parseInt($(last).offset().left  - $(first).offset().left) + 'px'
        });
    },  

    show: function() {
        gsap.to($(this.selector).parent(), {
            opacity: 1,
            duration: 0.5
        });
    },

    hide: function() {
        gsap.to($(this.selector).parent(), {
            opacity: 0,
            duration: 0.5
        });
    },

    

    scrollTo: function(year) {

        const _this = this;

        const cardinalYear = (year - this.startYear) / 10;

        let targetX = this.wpc * (cardinalYear + 0.5);

        console.log(cardinalYear);

        gsap.to('#tlPointer', {
            left: targetX + '%',
            duration: 5,
            ease: 'power1.inOut'
        });

        $('.tlEvent').removeClass('selected');
        $('.tlEvent#eventDecade' + year).addClass('selected');


        gsap.to(this, {
            phase: year,
            duration: 5,
            ease: 'power1.inOut',
            onUpdate: function() {

                const y = parseInt(Math.floor(_this.phase));

                if (y != _this.continuousYear) {
                    _this.continuousYear = y;
                    _this.populationEl.innerHTML = _this.pop.population(y).toLocaleString();
                    _this.continuousYearEl.innerHTML = y;
                }
            }
        });

    }

}