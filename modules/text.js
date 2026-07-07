export default  {
	show: function(data, init = false) {
		
        const _this = this;

        /* gsap.to('.statRow', {
            transform: 'translateX(-400px)',
            stagger: 0.1,
            duration: 0.5,
            delay: 0.0,
            onComplete: function() {
                document.getElementById('births').innerHTML = data.births;
                document.getElementById('deaths').innerHTML = data.deaths;
                document.getElementById('marriages').innerHTML = data.marriages;
                document.getElementById('population').innerHTML = data.population;
            }
        }); */

        gsap.to(['p#historical','p#description'], {
            y: 100,
            opacity: 0,
            duration: 1.0,
            delay: 3.5,
            stagger: 0.5,
            onComplete: function() {
                document.getElementById('description').innerHTML = data.text;
                document.getElementById('historical').innerHTML = data.historical;
            }
        });

        // show containers
        gsap.to(['#stats'], {
            opacity:1,
            x: 0,
            duration: 1.0,
            delay:4.75
        });  

        /* if(data.births && data.deaths && data.marriages) {
            gsap.to('.statRow', {
                transform: 'translateX(0)',
                stagger: 0.2,
                duration: 1.0,
                delay: 4.25,
                
            });
           
        } */

        gsap.to(['#qrHolder'], {
            opacity:1,
            x: 0,
            duration: 1.0,
            delay:4.0
        });

        gsap.to(['#inset'], {
            opacity:1,
            x: 0,
            duration: 1.0,
            delay:4.5
        });

        gsap.to(['#descriptionHolder'], {
            opacity:1,
            y: 0,
            duration: 1.0,
            delay:5.0
        });
        
        gsap.to(['p#description'], {
            opacity:1,
            y: 0,
            duration: 1.0,
            delay:5.0
        });
        if(data.historical) {
            
            gsap.to(['p#historical'], {
                opacity:1,
                y: 0,
                duration: 1.0,
                delay:5.75
            });
        }

        

    },
}
