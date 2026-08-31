const scroll = {

    init: function() {

        const _this = this;

        this.frame = 0;

        this.target = $('#originsInner')[0];

        const w = $('#originsInner').innerWidth();
        const h = $('#originsInner').innerHeight();

        
    },


    show(origins) {

        const _this = this;

        gsap.set('#welcome_spacer h3', {
            display: 'none'
        });
        gsap.to('h2.default_heading', {
            opacity: 0,
            duration: 0.5,
            onComplete: function() {
                gsap.set('h2.default_heading', {
                    display: 'none'
                });
                const s = origins.length == 0 ? 'first_visitor_heading' : 'previous_visitors_heading';
                gsap.set('h3.' + s, {
                    display: 'block',
                    opacity: 0
                });
                gsap.to('h3.' + s, {
                    opacity: 1
                });
            }
        });


        gsap.set('#bigName', {
            opacity: 0,
            display: 'block'
        });

        gsap.set('#bigName svg.scroll', {
            scale: 2,
        });

        gsap.to('#bigName svg.scroll', {
            scale: 1,
            duration: 0.5
        });

        gsap.to('#bigName', {
            opacity: 1,
            duration: 0.5
        });

        $('svg#originsSVG g#rotate g').remove();

        const r = 4;

        const n = origins.length;
        const step = Math.PI * 2 / n;
        let theta = 0;


        for (var i in origins) {

            // const rf = 1.2 + 1.0 * Math.random();
            const rf = 1.2 + 0.3 * Math.abs(Math.sin(2 * Math.PI * i / n));
            

            const x0 = r * 0.5 * Math.sin(theta);
            const y0 = r * 0.5 * Math.cos(theta);
            const x = rf * r * Math.sin(theta);
            const y = rf * r * Math.cos(theta);
            theta += step;

            const newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g'); //Create a path in SVG's namespace
            

            const newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
            newPath.setAttribute("d",`M ${540 + x0 * 60} ${540 + y0 * 60} L ${540 + x * 60} ${540 + y * 60}`); //Set path's data

            newGroup.appendChild(newPath);


            const newObj = document.createElementNS("http://www.w3.org/2000/svg", 'foreignObject'); //Create a path in SVG's namespace
            newObj.setAttribute("x", 540 + x * 60 - 200);
            newObj.setAttribute("y", 540 + y * 60 - 200);
            newObj.setAttribute("width", 400);
            newObj.setAttribute("height", 400);

            const newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", 'div'); //Create a path in SVG's namespace
            

            const newSpan = document.createElementNS("http://www.w3.org/1999/xhtml", 'span'); //Create a path in SVG's namespace
            newSpan.textContent = origins[i].origin;

            newDiv.appendChild(newSpan);
            newObj.appendChild(newDiv);
            
            newGroup.appendChild(newObj);

            document.querySelector('svg#originsSVG g#rotate').appendChild(newGroup);

        }

        
        /* 
        window.setTimeout(function() {
            gsap.to(_this.group.scale, {
                x: 1,
                y: 1,
                z: 1,
                ease: 'back.out(2)',
                duration: 0.7
            });
            gsap.to('.clanOriginInner', {
                scale: 1,
                opacity: 1,
                delay: 0.2,
                duration: 0.45,
                stagger: 0.15,
                ease: 'back.out(1.4)'
            });
        }, 200);
        */

        $('svg#originsSVG').addClass('initialised');

        $('svg#originsSVG g g').each(function(i) {
            const _this = this;
            window.setTimeout(function() {
                $(_this).addClass('active');
            }, i * 100);
        });
    },


    hide: function() {

        const _this = this;
        

        gsap.to('#bigName', {
            opacity: 0,
            duration: 0.3,
            onComplete: function() {
                gsap.set('#bigName', {
                    display: 'none'
                });


                $('svg#originsSVG').removeClass('initialised');
                $('svg#originsSVG g#rotate g').remove();
               
            }
        });
    },

};

export {
    scroll
};