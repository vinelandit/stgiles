class Project {

  constructor(options) {
    this.options = options;
    this.options.northRad = this.deg2rad(this.options.north);
    this.options.southRad = this.deg2rad(this.options.south);
    this.options.eastRad = this.deg2rad(this.options.east);
    this.options.westRad = this.deg2rad(this.options.west);
    this.ymin = this.mercY(this.options.southRad);
    this.ymax = this.mercY(this.options.northRad);
    this.xFactor = (this.options.width / this.options.scale) / (this.options.eastRad - this.options.westRad);
    this.yFactor = (this.options.height / this.options.scale) / (this.ymax - this.ymin);
    this.mode = this.options.mode ? this.options.mode : 'equirectangular'
  }

  deg2rad(degrees) {
    const pi = Math.PI;
    return degrees * (pi/180);
  }

  // Formula for mercator projection y coordinate:
  mercY(lat) { 
    return Math.log(Math.tan(lat / 2 + Math.PI / 4)); 
  }

  ll2xy(lat, lon, overrideInvert = false) {
    const result = this.mode == 'equirectangular' ? this.ll2xyEquirec(lat, lon, overrideInvert) : this.ll2xyMerc(lat, lon, overrideInvert);
    
    return result;
  }

  ll2xyMerc(lat, lon, overrideInvert = false) {
    lat = this.deg2rad(lat);
    lon = this.deg2rad(lon);
    let x = lon;
    let y = this.mercY(lat);
    x = (x - this.options.westRad) * this.xFactor;
    y = (this.ymax - y) * this.yFactor; // y points south
    // return [x - this.options.width / 2, y + this.options.height / 2];
    if(this.options.invert && !overrideInvert) {
      return [- (x - (this.options.width / this.options.scale) / 2), - (y - (this.options.height / this.options.scale) / 2) ];
    } else {
      return [x, y + this.options.offsetY ];
    }
    
  }

  ll2xyEquirec(lat, lon, overrideInvert = false) {

    // Determine the map scale (points per degree)
    let x = this.options.width * ( (lon - this.options.west) / (this.options.east - this.options.west));

    let y = this.options.height - ( this.options.height * ( (lat - this.options.south) / (this.options.north - this.options.south) ) );

    y -= this.options.offsetY;

    x /= this.options.scale;
    y /= this.options.scale;



    if(this.options.invert && !overrideInvert) {
      x = - (x - (this.options.width / this.options.scale) / 2);
      y = - (y - (this.options.height / this.options.scale) / 2);
    } 

  

    return [x, y];
      
    
  }

};

export { Project };