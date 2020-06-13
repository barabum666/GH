$(document).ready(function() {
	var windowHeight = $(window).height();
	var el = document.querySelectorAll('#animated');
	$(document).on('scroll', function() {
		$(el).each(function() {
			var self = $(this),
			height = self.offset().top + (self.height() / 4);
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('animated')
			}
		});
	});
});