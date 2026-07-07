import { regions } from './regions.js';

export default  {
	
	listFromArray: function(arr) {
		let text = '';
		const n = arr.length;
		for(var i in arr) {
			text += arr[i];
			if(i == arr.length - 2) {
				text += ' and ';
			} else if (i != arr.length - 1) {
				text += ', ';
			}
		}
		return text;
	},

	show: function(data, name, num_records) {

		const t = $('#insufficient_inner');
		let html = '';


		let earliest = 2000;
		let latest = 0;
		let boysNames = [];
		let girlsNames = [];
		const parishes = {};

		for(var i in data.births.boys) {
			if(data.births.boys[i].length == 0) {
				delete data.births.boys[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.births.girls) {
			if(data.births.girls[i].length == 0) {
				delete data.births.girls[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.births.girls) {
			if(data.births.girls[i].length == 0) {
				delete data.births.girls[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.births.girls) {
			if(data.births.girls[i].length == 0) {
				delete data.births.girls[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.births.topParishes) {
			if(data.births.topParishes[i].length == 0) {
				delete data.births.topParishes[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.births.totals) {
			if(data.births.totals[i] == 0) {
				delete data.births.totals[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}


		for(var i in data.deaths.totals) {
			if(data.deaths.totals[i] == 0) {
				delete data.deaths.totals[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		for(var i in data.deaths.topParishes) {
			if(data.deaths.topParishes[i].length == 0) {
				delete data.deaths.topParishes[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}

		for(var i in data.marriages.totals) {
			if(data.marriages.totals[i] == 0) {
				delete data.marriages.totals[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}
		
		for(var i in data.marriages.topParishes) {
			if(data.marriages.topParishes[i].length == 0) {
				delete data.marriages.topParishes[i];
			} else {
				earliest = this.checkEarliest(earliest, i);
				latest = this.checkLatest(latest, i);
			}
		}

		for(var i in data.births.boys) {
			if(data.births.boys[i][0].forename != '-----') {
				boysNames.push(data.births.boys[i][0].forename);
				const s = new Set(boysNames);
				boysNames = [...s];
				if(boysNames.length > 4) break;
			}
			
		}
		
		for(var i in data.births.girls) {
			if(data.births.girls[i][0].forename != '-----') {
				girlsNames.push(data.births.girls[i][0].forename);
				const s = new Set(girlsNames);
				girlsNames = [...s];
				if(girlsNames.length > 4) break;
			}
		}

		let girlsText = this.listFromArray(girlsNames);
		let boysText = this.listFromArray(boysNames);
		

		for(var i in data.births.topParishes) {
			const p = data.births.topParishes[i];
			parishes[p[0].parish] = regions.from(p[0].lat, p[0].lon);
		}
		for(var i in data.deaths.topParishes) {
			const p = data.deaths.topParishes[i];
			parishes[p[0].parish] = regions.from(p[0].lat, p[0].lon);
		}
		for(var i in data.marriages.topParishes) {
			const p = data.marriages.topParishes[i];
			parishes[p[0].parish] = regions.from(p[0].lat, p[0].lon);
		}

		let era = `between ${earliest} and ${latest}`;
		if(earliest == latest) {
			era = `in ${earliest}`;
		}

		console.log(earliest, latest, boysNames, girlsNames, parishes);
		if(num_records < 50) {
			let suffix = 's';
			if(num_records == 1) {
				suffix = '';
			}
			
			html = `<h2>Insufficient records</h2><p>The ${name} name is truly an outlier, with only ${num_records} record${suffix} ${era}!</p>`;
		} else {
			html = `<h2>Insufficient records</h2><p>There are only ${num_records} records of the ${name} name ${era}. A distinguished club indeed!</p>`;
			
			if(girlsText != '' || boysText != '') {
				html += `<p>Among the post popular birth names are `;
				if(girlsText != '') {
					html += `<strong>${girlsText}</strong> for girls`
				}
				if(girlsText != '' && boysText != '') {
					html += ', and ';
				}
				if(boysText != '') {
					html += `<strong>${boysText}</strong> for boys`
				}
				html += '.';
			}
		}
		t.html(html);
	},

	checkEarliest: function(earliest, i) {
		return parseInt(i) < parseInt(earliest) ? i : earliest;
	},

	checkLatest: function(latest, i) {
		return parseInt(i) > parseInt(latest) ? i : latest;
	},

}