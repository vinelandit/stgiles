// source: UK & Ireland Genealogy, https://www.genuki.org.uk/big/sct/population
export default  {

	data: [
		{ year: 1600, value: 800000},
		{ year: 1707, value: 1000000},
		{ year: 1755, value: 1265380},
		{ year: 1801, value: 1608420},
		{ year: 1811, value: 1805864},
		{ year: 1821, value: 2091521},
		{ year: 1831, value: 2364386},
		{ year: 1841, value: 2620184},
		{ year: 1851, value: 2888742},
		{ year: 1861, value: 3062294},
		{ year: 1871, value: 3360018},
		{ year: 1881, value: 3735573},
		{ year: 1891, value: 4025647},
		{ year: 1901, value: 4472103}

	],

	estimate: function(year, proportion = 1) {
		
		let pop = 0;



		if(year < this.data[0].year) {
			// extrapolate
			const len = this.data[1].year - this.data[0].year;
			const del = this.data[1].value - this.data[0].value;
			const dPY = del / len;
			pop = this.data[0].value - dPY * (this.data[0].year - year);
		
		} else {
		
			for(var i in this.data) {
				if(this.data[i].year > year) {
					// interpolate

					
					const len = this.data[i].year - this.data[i - 1].year;
					const del = this.data[i].value - this.data[i - 1].value;

					const dPY = del / len;



					const offset = year - this.data[i - 1].year;
					

					pop = this.data[i - 1].value + dPY * offset;
					break;
				}
			}
		
		}

		return parseInt(pop * proportion);
	}
	
}