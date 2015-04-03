/*
Desktop number profile JS
Author: Armin
Date: 03. 04. 2015.
Version: 2.0
Custom prefix: none
Custom functions: none

Content:
Google Maps JS
Right menu JS
Footer JS
*/

/* =Google Maps JS */

jQuery( document ).ready(function() {
	var myLatLng = new google.maps.LatLng(35.753838, 51.397467);
	var map;
	var myOptions = {
		zoom: 15,
		center: myLatLng,
		disableDefaultUI: true
	};
	var styles = [
		{
			stylers: [
				{ 
					saturation: -100
				},
			]
		}
	];
	map = new google.maps.Map($('.google_map')[0], myOptions);
	map.setOptions({styles: styles});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Poshte Boom'
	});
	google.maps.event.addDomListener(window, 'load');
});


/* =Right menu JS */

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

/* =Footer JS*/

jQuery(document).ready(function(){
	jQuery( '.dnp_new_footer_trigger' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.dnp_new_footer_trigger' ).removeClass('active_button');
		jQuery( this ).addClass('active_button');
		jQuery ( '.dnp_new_footer_numbers_wrapper' ).removeClass('active_item');
		jQuery( "." + $activeItem ).addClass('active_item');
	});
});