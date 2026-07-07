import regionsGeo from './regionsGeo.js';

const regions = {

  from(lat, lon) {

    const pt = turf.point([lon, lat]);
    for(let p in regionsGeo.features) {
      const polygon = regionsGeo.features[p];
      if(turf.booleanPointInPolygon(pt, polygon)) {
        return polygon.properties.name;
      }
    }
    return false;

  }

};

export { regions };