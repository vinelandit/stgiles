export default  {
	show: function(data, init = false) {
		
        const _this = this;

        gsap.to(['p#historical','p#description'], {
            y: 100,
            opacity: 0,
            duration: 1.0,
            delay: 3.5,
            stagger: 0.5,
            onComplete: function() {
                document.getElementById('description').innerHTML = data.text;
                document.getElementById('historical').innerHTML = data.historical;

                gsap.to('#descriptionHolder', {
                    'background-color': '#f2eddccc',
                    duration: 1
                });
            }
        });

        gsap.to('#descriptionHolder', {
            'background-color': '#f2eddc00',
            duration: 1
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
