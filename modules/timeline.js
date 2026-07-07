export default {

    init: function(pop, startYear, endYear, populationID, continuousYearID, selector = '#timelineStrip', template = `<div class="timelineItem">{year}</timelineItem>`) {

        this.pop = pop;
        this.startYear = startYear;
        this.endYear = endYear;
        this.selector = selector;
        this.phase = startYear;
        
        this.populationEl = document.getElementById(populationID);
        this.continuousYearEl = document.getElementById(continuousYearID);

        this.continuousYear = 0;

        this.cellWidth = 222;
        this.totalWidth = this.cellWidth * (10 + endYear - startYear) / 10;
        this.realWidth = this.cellWidth * (1 + endYear - startYear) / 10;

        $(selector).css({
            'width': this.totalWidth + 'px'
        });

        for (var i = startYear; i <= endYear; i += 10) {
            $(selector).append(template.replace('{year}', i + (i == 1900 ? '' : 's')));
        }

        this.reset();

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

    reset: function() {
        
        gsap.set(this.selector, {
            x: 89
        });
    },

    scrollTo: function(year) {

        const _this = this;

        let targetX = -((year - this.startYear) / (1 + this.endYear - this.startYear)) * this.realWidth;
        targetX += 89;
        gsap.to(this.selector, {
            x: targetX,
            duration: 5,
            ease: 'power1.inOut'
        });


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