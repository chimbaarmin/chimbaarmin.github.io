/*
Business page JS
Date: 22. 04. 2015.
Author: Armin
Version: 1.0
*/

/* =Google Maps */

jQuery( document ).ready(function() {
	var myLatLng = new google.maps.LatLng(52.5128318, 13.4656515);
	var map;
	var myOptions = {
		zoom: 15,
		center: myLatLng,
		disableDefaultUI: true
	};
	var styles = [
	  	{
			stylers: [
				 { saturation: 0 },
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
	
/* =Gallery */

Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');

Galleria.configure({
	transition: 'fade',
	imageCrop: true,
	autoplay: 3000,
	thumbnails: true,
	height: 300,
	lightbox: true
});

Galleria.run('.galleria');

/* Right menu */

jQuery(function($) {
    function fixDiv() {
		var $cache = $('#getFixed');
		var elemheight = document.getElementById('getFixed').offsetHeight;
		var diffheight = elemheight - window.innerHeight + 40;
		if ($(window).scrollTop() >  diffheight) {
	  		$cache.css({
				'top': '-' + diffheight +'px',
				'position': 'fixed'
	  		});
		} else {
	  		$cache.css({
			'position': 'relative',
			'top': 'auto'
	  		}); 
		}
  	}
    $(window).scroll(fixDiv);
  	fixDiv();
});

/* =Footer JS*/

jQuery(document).ready(function(){
	jQuery( '.business_footer_module_trigger' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.business_footer_module_trigger' ).removeClass('footer_trigger_active');
		jQuery( this ).addClass('footer_trigger_active');
		jQuery ( '.business_footer_module_sheet' ).removeClass('footer_sheet_active');
		jQuery( "." + $activeItem ).addClass('footer_sheet_active');
	});
});

jQuery(document).ready(function(){
	jQuery( '.fotter_sheet_buttons_link' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.fotter_sheet_buttons_link' ).removeClass('buttons_link_active');
		jQuery( this ).addClass('buttons_link_active');
		jQuery ( '.footer_sheet_numbers' ).removeClass('sheet_numbers_active');
		jQuery( "." + $activeItem ).addClass('sheet_numbers_active');
	});
});

jQuery(document).ready(function(){
	jQuery( '.business_new_footer_trigger' ).click(function() {
		var $activeItem = jQuery( this ).attr( 'data-item' );
		jQuery( '.business_new_footer_trigger' ).removeClass('active_button');
		jQuery( this ).addClass('active_button');
		jQuery ( '.business_new_footer_numbers_wrapper' ).removeClass('active_item');
		jQuery( "." + $activeItem ).addClass('active_item');
	});
});