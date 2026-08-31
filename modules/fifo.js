const fifo = {

	tpl: `<div class="fifoRow" data-index="{index}">{surname}<span>, {origin}</span></div>`,
	target: '#fifo',
	rowsVisible: 5,
	rowHeight: 40,

	init: function(data, reinit = false) {

		let html = '';
		let row = '';

		this.initState = true;

		for(var i in data) {
			row = this.tpl.replace('{index}', i);
			row = row.replace('{surname}', data[i].surname);
			row = row.replace('{origin}', data[i].origin);

			html += row;
		}

		$(this.target).html(html);

		gsap.set(this.target, {
			y: 0
		});
		$('.fifoRow:eq(2)').addClass('focused');
		
		
	},

	increment: function() {

		const _this = this;

		if(this.initState) {
			this.initState = false;
			return true;
		}
		$('.fifoRow:eq(3)').addClass('focused');
		$(_this.target + ' .fifoRow:eq(2)').removeClass('focused');
		gsap.to(this.target, {
			y: -this.rowHeight,
			duration: 0.8,
			onComplete: function() {
				// cycle top row
				
				
				$(_this.target + ' .fifoRow:eq(0)').appendTo(_this.target);
				gsap.set(_this.target, {
					y: 0
				});


			}
		});
	},

}

export { fifo };