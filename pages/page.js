jQuery(function($) {
	function fixDiv() {
		var $cache = $('#getFixed');
		var elemheight = document.getElementById('getFixed').offsetHeight;
		var diffheight = elemheight - window.innerHeight;
		if ($(window).scrollTop() >  diffheight)
		$cache.css({
			'top': '-' + diffheight +'px',
			'position': 'fixed'
		});
		else
		$cache.css({
			'position': 'relative',
			'top': 'auto'
		});
	}
	$(window).scroll(fixDiv);
	fixDiv();
});