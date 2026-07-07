import populationEstimates from './populationEstimates.js';
import decadeTotals from './decadeTotals.js';

export default  {
	
	init: function(id, apiRoot, loadCallback = false) {
		const _this = this;
		this.apiRoot = apiRoot;
		const url = this.apiRoot + "/data/surnames/data" + id + ".json";
		console.log(url);
		
		const d = $.get(url, function(data) {
			_this.data = data;
			if(loadCallback) {
				loadCallback(_this.data);
			}
		});

	},
	
	population: function(year) {
		
		if(year == 1900) {
			year = 1899;
		}

		let decade;
		if(year % 10 == 0) {
			decade = year;
		} else {
			decade = year - (year % 10);
		}


		
		let rawPop = this.data.births.totals[decade];
		let proportion = rawPop / decadeTotals.births[decade];

		if(decade != year && this.data.births.totals[decade + 10]) {

			let rawPop2 = this.data.births.totals[decade + 10];
			let proportion2 = rawPop2 / decadeTotals.births[decade + 10];

			let t = (year - decade) / 10;
			

			proportion = t * proportion2 + (1 - t) * proportion;
		}

		return populationEstimates.estimate(year, proportion);

	}
}