export default {

    init: function(callback) {

        this.callback = callback; // result selected callback

        // inject maptiler geocoding script
        const geocodeScript = document.createElement('script')
        geocodeScript.setAttribute('src', 'https://cdn.maptiler.com/maptiler-geocoder/v1.1.0/maptiler-geocoder.js')
        geocodeScript.setAttribute('id', 'maptiler-geocoder-src')
        geocodeScript.addEventListener('load', this.initGeocoder.bind(this));
        document.head.appendChild(geocodeScript);

    },

    initGeocoder: function() {
        
        const _this = this;

        if(typeof maptiler !== 'undefined') {
        
            console.log('Initialising geocoder')
            const geocoder = new maptiler.Geocoder({
                input: 'search',
                key: 'bSvQLHrAXuQDVENkxj6D'
            });
        
            geocoder.on('select', function(item) {
                _this.callback(item);
            });


        } else {
            // fallback in case load event isn't available
            console.log('Checking for maptiler again in 500ms...');
            window.setTimeout(initGeocoder,500)
        }
    }

}