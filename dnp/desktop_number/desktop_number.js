/*
Desktop number profile JS
Author: Armin
Date: 13. 03. 2015.
Version: 1.0
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

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_one" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_one' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_two" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_two' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_two' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_three" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_three' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_three' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_four" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_four' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_four' ).css( 'display', 'block' );
	});
});

$(document).ready(function() {
	jQuery( "li.dnp_data_number_cities_li.dnp_city_five" ).click(function() {
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_one, li.dnp_data_number_cities_li.dnp_city_two, li.dnp_data_number_cities_li.dnp_city_three, li.dnp_data_number_cities_li.dnp_city_four, li.dnp_data_number_cities_li.dnp_city_five' ).removeClass( 'dnp_active_city' );
		jQuery( 'li.dnp_data_number_cities_li.dnp_city_five' ).addClass( 'dnp_active_city' );
		jQuery( '.dnp_data_number_numbers_city_one, .dnp_data_number_numbers_city_two, .dnp_data_number_numbers_city_three, .dnp_data_number_numbers_city_four, .dnp_data_number_numbers_city_five' ).css( 'display', 'none' );
		jQuery( '.dnp_data_number_numbers_city_five' ).css( 'display', 'block' );
	});
});