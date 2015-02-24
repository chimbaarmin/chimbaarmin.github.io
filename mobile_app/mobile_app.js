/* GM size  (home) */

var $winh;
function windowHeight() {
	$winh = jQuery( window ).height();
	jQuery( document.getElementById("google_map") ).css( "height", $winh );
}

jQuery( window ).on("resize", windowHeight);	
jQuery( windowHeight );

/* GM size  (business) */

var $bwinh;
function windowHeightB() {
	$bwinh = jQuery( window ).height() / 2;
	jQuery( document.getElementById("business_google_map") ).css( "height", $bwinh );
}

jQuery( window ).on("resize", windowHeightB);	
jQuery( windowHeightB );

/* Search position */

var $winw;
var $elemw;
var $finalw;
function windowWidth() {
	$winw = jQuery( window ).width() / 2;
	$elemw = jQuery( '.mnp_content_search_box' ).width() / 2;
	$finalw = $winw - $elemw;
	jQuery( document.getElementsByClassName("mnp_content_search_box") ).css( "left", $finalw );
}

jQuery( window ).on("resize", windowWidth);		
jQuery( windowWidth );


/* Hidden menu */

function toogleMenu() {
	if ( jQuery( '.mnp_hidden_menu' ).css('height') == '0px' ) {
		jQuery( '.mnp_hidden_menu' ).css('height', 'auto');
	}
	else {
		jQuery( '.mnp_hidden_menu' ).css('height', '0px');
	}
}

function toogleMenu2(event) {
	if (!$(event.target).closest('.mnp_hidden_menu').length & !$(event.target).is( '.mnp_footer_menu_i' ) ) {
		jQuery( '.mnp_hidden_menu' ).css('height', '0px');
	}
}

$(document).bind('tap', toogleMenu2);

$(function(){
  $( '.mnp_footer_menu_i' ).bind( 'tap', '.mnp_footer_menu_i', toogleMenu);
});

/* */

/* Google Map (home) */

jQuery(function($) {
	var script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
});

var map, map2;

function initialize(condition) {
	
	var myLatlng = new google.maps.LatLng(38.9071923,-77.0368707);
	
	var myOptions = {
    	zoom: 14,
    	center: myLatlng,
		disableDefaultUI: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
	
	var myOptions2 = {
    	zoom: 5,
    	center: myLatlng,
		disableDefaultUI: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
  	}
	
	map = new google.maps.Map(document.getElementById("google_map"), myOptions);
    map2 = new google.maps.Map(document.getElementById("business_google_map"), myOptions2);
	map2.panBy(0, -70);
	
	var marker = new google.maps.Marker({
      	position: myLatlng,
      	map: map2,
      	title: 'Hello World!'
  	});
	
	google.maps.event.addDomListener(window, 'load', initialize);
}

/* Rerun GM */

jQuery(document).on( "pageshow", "#business_page", initialize );

jQuery(document).on( "pageshow", "#home_page", function() {
	jQuery( '.mnp_content_search_form_input' ).focus();
});
