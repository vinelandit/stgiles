const fifo = {

	tpl: `<div class="fifoRow" data-index="{index}">{surname}, {origin}</div>`,
	target: '#fifo',
	rowsVisible: 5,
	rowHeight: 30,

	init: function(data, reinit = false) {

		let html = '';
		let row = '';

		for(var i in data) {
			row = this.tpl.replace('{index}', i);
			row = row.replace('{surname}', data[i].surname);
			row = row.replace('{origin}', data[i].origin);

			html += row;
		}

		$(this.target).html(html);
		$('.fifoRow:eq(0)').addClass('focused');

	},

	increment: function() {

		const _this = this;
		$('.fifoRow:eq(1)').addClass('focused');
		gsap.to(this.target, {
			y: -this.rowHeight,
			duration: 0.3,
			onComplete: function() {
				// cycle top row
				$(_this.target + ' .fifoRow').eq(0).appendTo(_this.target).removeClass('focused');

				gsap.set(_this.target, {
					y: 0
				});
			}
		});
	},

}

export { fifo };