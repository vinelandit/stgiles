import { regions } from './regions.js';
import { news } from './news.js';

const spieler = {
	
	data: [],

	PI: 3.1415926535,
	R: 6371e3,

	points: ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"],

	pluralise: function(surname) {
		return surname.at(-1) == 'S' ? surname : surname + 's';
	},

	distLL: function(p1, p2) {
		
		const phi1 = p1[0] * this.PI / 180;
		const phi2 = p2[0] * this.PI / 180;
		const dphi = phi2 - phi1;
		const dlmb = (p2[1] - p1[1]) * this.PI / 180;

		const a = Math.sin(dphi / 2) * Math.sin(dphi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(dlmb / 2) * Math.sin(dlmb * 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		
		return this.R * c;

	},

	calcBearing: function(lat1, long1, lat2, long2) {
	    const dLon = (long2 - long1);
	    const x = Math.cos(this.radians(lat2)) * Math.sin(this.radians(dLon));
	    const y = Math.cos(this.radians(lat1)) * Math.sin(this.radians(lat2)) - Math.sin(this.radians(lat1)) * Math.cos(this.radians(lat2)) * Math.cos(this.radians(dLon));
	    let bearing = Math.atan2(x,y);   // use atan2 to determine the quadrant
	    bearing = this.degrees(bearing);

	    return bearing;
	},

	degrees: function(rad) {
		return rad * (180 / Math.PI);
	},

	radians: function(deg) {
		return deg * (Math.PI / 180);
	},
	
	calcNSEW: function(lat1, long1, lat2, long2) {
	    
	    let bearing = this.calcBearing(lat1, long1, lat2, long2);
	    bearing += 22.5;
	    bearing = bearing % 360;
	    if(bearing < 0) {
	    	bearing += 360;
	    }
	    bearing = parseInt(bearing / 45) // values 0 to 7

	    const NSEW = this.points[bearing];
	    return NSEW;
	},

	compassSpiel: function(cluster) {

		let ar, output;


		const midX = 0.5 * (cluster['boundingN']['pos'][0] + cluster['boundingS']['pos'][0]);
		const midY = 0.5 * (cluster['boundingE']['pos'][1] + cluster['boundingW']['pos'][1]);

		const distX = this.distLL([cluster['boundingE']['pos'][0] , midY ], [ cluster['boundingW']['pos'][0], midY]);
		const distY = this.distLL([ midX, cluster['boundingN']['pos'][1] ], [ midX, cluster['boundingS']['pos'][1]]);

		if(distY > 0)
			ar = distX / distY;
		else
			ar = -1;

		const parishes = {};

		if(cluster['boundingN']['name'] in parishes) {
			if (ar == -1 || (ar > 0 && ar < 1))
				parishes[cluster['boundingN']['name']].push('North');
		} else {
			if (ar == -1 || (ar > 0 && ar < 1))
				parishes[cluster['boundingN']['name']] = ['North'];
		}

		if(cluster['boundingS']['name'] in parishes) {
			if (ar == -1 || (ar > 0 && ar < 1))
				parishes[cluster['boundingS']['name']].push('South');
		} else {
			if (ar == -1 || (ar > 0 && ar < 1))
				parishes[cluster['boundingS']['name']] = ['South'];
		}

		if(cluster['boundingE']['name'] in parishes) {
			if (ar == -1 || (ar > 1))
				parishes[cluster['boundingE']['name']].push('East');
		} else {
			if (ar == -1 || (ar > 1))
				parishes[cluster['boundingE']['name']] = ['East'];
		}

		if(cluster['boundingW']['name'] in parishes) {
			if (ar == -1 || (ar > 1))
				parishes[cluster['boundingW']['name']].push('West');
		} else {
			if (ar == -1 || (ar > 1))
				parishes[cluster['boundingW']['name']] = ['West'];
		}

		const n = Object.keys(parishes).length;


		let duplicate = false;
		for(var p in parishes) {
			if(p == cluster['maxparish'].name) {
				duplicate = true;
				break;
			}
		}

		if(n <= 1 || duplicate) {
			output = 'singleton';
		} else {	
			
			output = `${this._('ranging')} `;
			let i = 0;
			for (var p in parishes) {
				output += parishes[p].join(' and ') + ' to ' + p;
				if(i < n - 2) {
					output += ', ';
				} else {
					if(i < n - 1)
						output += ' and ';
				}
				i++;
			}
		}	

		return output;
	
	},

	syn: {
		'moves': [ 'moves', 'drifts', 'migrates', 'travels', 'journeys' ],
		'cluster': ['cluster', 'community', 'settlement'],
		'isolated': [ 'isolated', 'remote', 'distant'],
		'establishing a presence': [ 'establishing a presence', 'setting up', 'settling', 'putting down roots'],
		'show up': [ 'show up', 'turn up', 'appear'],
		'around': ['around', 'near'],
		'clan': ['clan', 'family', 'tribe', 'lineage'],
		'New': ['New', 'Fresh', 'Another', 'A new'],
		'Remaining': ['Remaining', 'Spreading out', 'Increasing their numbers'],
		'appears': ['shows up', 'appears', 'begins', 'forms'],
		'ranging': ['ranging', 'going'],
		'stay': ['stay', 'remain', 'dwell'],
		'about': ['about', 'around', 'some'],
		'After': ['After', 'Following'],
		'break': ['break', 'gap in the records'],
		'return to': ['return to', 'reappear in'],
		'in and around': ['in and around', 'in the vicinity of', 'in the records of'],
		'outpost': ['outpost', 'base', 'population'],
		'small': ['small', 'minor', 'tentative'],
		'setting up': ['setting up', 'establishing', 'creating'],
		'Meanwhile': ['Meanwhile', 'Elsewhere', 'In historical news', 'Also']
	},

	_: function(text) {
		if (this.syn[text]) {
			const word = this.syn[text][ this.syndices[text] ];
			this.syndices[text]++;
			this.syndices[text] = this.syndices[text] % this.syn[text].length;
			return word;
		} 
		return text;
	},

	getNext: function(dir = 1, init = false, absolute = false) {

		if(absolute) {
			this.index = dir;
		} else {
			this.index += dir;
		}	


		if(this.index > this.data.length - 1) {
			this.index = 0;
		}
		if(this.index < 0) {
			this.index = 0;
			return false;
		}


		const d = this.data[this.index];
		d.init = init;

		if (this.index == (this.data.length - 2) && this.wasLast) {
			console.log('notify');
			// notify main that this is going back from last zoomed-out position
			d.init = -2;
		}
		
		if (this.index == this.data.length - 1) {
			// notify main that this is the last zoomed-out position
			console.log('on last');
			d.init = -1;
			this.wasLast = true;
		} else {
			this.wasLast = false;
		}


		
		return d;
	},

	parse: function(name, clusters) {

		let text = '';
		let numExtant = 0;
		let lastCentroid;
		let lastRegion;
		const _ = this._.bind(this);

		this.data = [];

		for(var i in clusters) {
			
			const o = {};
			o.text = '';
			let direction;
			const c = clusters[i];
			const reign = 10 + parseInt(c['lastyear'] - c['firstyear']);
			o.year = c['firstyear'];
			o.lastyear = c['lastyear'];
			
			let thisRegion = regions.from( c['maxparish']['pos'][0], c['maxparish']['pos'][1] );
			let historical = news.request(c['firstyear']);

			o.region = thisRegion;
			o.name = c['maxparish']['name'];
			o.pos = [ c['maxparish']['pos'][0], c['maxparish']['pos'][1] ];

			let formattedRegion = '';
			if(thisRegion && thisRegion != o.name) formattedRegion = ' in ' + thisRegion;				
			
			const cs = this.compassSpiel(c);
		
			if(i == 0) {
				o.text += `First ${_('cluster')} of ${this.pluralise(name)} ${_('appears')} in the records`;
			} else {
				direction = this.calcNSEW(lastCentroid[0], lastCentroid[1], c['centroid'][0], c['centroid'][1]);	

				if(Math.random() > 0.6) {
					o.text += `${_('New')} ${_('cluster')} ${_('appears')} when the `;
				} else {
					o.text += `The `;
				}
				
				o.text += `${name} ${_('clan')} ${_('moves')} ${direction}, `;
				if (cs == 'singleton') {
					o.text += `${_('setting up')} a ${_('small')} ${_('outpost')}`;
				} else {
					if(!c['biggest']) {
						o.text += `${_('establishing a presence')}`;
					}
					
				}
				
			}

			if(cs == 'singleton') {
				o.text += ` in the parish of ${c['maxparish']['name']}${formattedRegion}. They ${_('stay')} there for ${_('about')} ${reign} years`;
			} else {
				o.text += ` around ${c['maxparish']['name']}${formattedRegion}`;
				if(Math.random() > 0.5) {
					o.text += ` and ${cs}`;
				} 
			}
			o.text += '.';
		

			
			lastRegion = thisRegion;
			
			if(c['biggest']) {
				o.text += ` This is the clan's largest cluster, spanning ${c['numParishes']} parishes. It will persist for at least ${reign} years.`;
			}

			if(historical) {
				o.historical = `${_('Meanwhile')}, in ${historical[0]}, ${historical[1]}.`;
			} else {
				o.historical = '';
			}
			o.total = c.total;
			lastCentroid = c['centroid'];		
			this.data.push(o);
		}

		if(this.data.length > 12) {
			
			// too many clusters, needs pruning
			console.log('pruning');

			// sort by total
			this.data.sort(function(a, b) {
				return a.total > b.total ? -1 : 1;
			});

			// prune smallest
			this.data = this.data.slice(0, - (this.data.length - 12));

			// re-sort by date
			this.data.sort(function(a, b) {
				return a.year < b.year ? -1 : 1;
			});
		}
		
		lastRegion = '';
		const visitedParishes = [];
		for(var d in this.data) {

			if(this.data[d]['lastyear'] >= 1890) {
				numExtant++;

			}
			if(visitedParishes.includes(this.data[d].name)) {
				console.log('fuck', this.data[d].name);
				this.data[d].text = `${_('After')} a ${_('break')}, the ${this.pluralise(name)} ${_('return to')} the parish of ${this.data[d].name} in ${this.data[d].region}. `;					
			} else if (lastRegion == this.data[d].region) {
				console.log('cunt', this.data[d].region);
				this.data[d].text = `${_('Remaining')} in ${lastRegion}, the ${this.pluralise(name)} ${_('show up')} ${_('in and around')} the parish of ${this.data[d].name}. `;

			}

			
			visitedParishes.push(this.data[d].name);

			lastRegion = this.data[d].region;
		}

		const oFinal = { 'year': 1900, 'historical': ''};
		if(numExtant == this.data.length) {
			oFinal.text = `Records end with the ${name} family ${_('thriving')}: all population clusters are still active!`;
		} else if (numExtant > this.data.length / 2) {
			oFinal.text = `Records end with the ${name} clan in fine fettle: ${numExtant} of the ${this.data.length} main population clusters are still active!`;
		} else {
			oFinal.text = `Records end with the ${name} family somewhat diminished: ${numExtant} of the ${this.data.length} main population clusters are still active.`;

		}

		this.data.push(oFinal);
		
	},


	init: function(surname, id, apiRoot, callback, debug) {

		const _this = this;

		this.index = -1;
		this.wasLast = false;
		this.surname = surname;
		this.syndices = {};

		for (var s in this.syn) {
			this.syndices[s] = Math.floor(Math.random() * this.syn[s].length);
		}

		$.get(apiRoot + "/data/spiel/" + id + ".json", function(data) {
			
		  _this.parse(_this.surname, data);
		  const o = {};
		  let count = 0;
		  for(var i in _this.data) {

		  	if(
		  		_this.data[i].year < 1900
		  	) {
		  		o[_this.data[i].year] = _this.data[i].pos;
		  	}
		  	count++;
		  }
		  
		  if(count < 5 && !debug) {
		  	console.log('narrative data too sparse for ' + _this.surname);
		  	callback(false);
		  } else {
		  	callback(o);
		  }
		  
		}).fail(function(err){
			// handle outlier name with no narrative data here
			console.log('no narrative data for ' + _this.surname);
			callback(false);
			
		});

	
	}
		
}

export { spieler };