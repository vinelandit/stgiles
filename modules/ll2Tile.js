export default  {
	
	lon2tile: function(lon,zoom) {
		return Math.floor((lon+180)/360*Math.pow(2,zoom));
	}, 

	lat2tile: function(lat,zoom) {
		return Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom));
	},
 
	req: function(zoom, lat, lon) {
		const x = this.lon2tile(lon, zoom),
	    const y = this.lat2tile(lat, zoom);
	    return { x: x, y: y};

	} 
}