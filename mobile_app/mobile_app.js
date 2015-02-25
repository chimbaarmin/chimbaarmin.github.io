/* GM size  (home) */

var $winh;
function windowHeight() {
	$winh = jQuery( window ).height();
	jQuery( document.getElementById("google_map") ).css( "height", $winh );
}

jQuery( window ).on("resize", windowHeight);	
jQuery( windowHeight );

/* GM size  (profile) */

var $bwinh;
function windowHeightB() {
	$bwinh = jQuery( window ).height() / 2;
	jQuery( document.getElementById("profile_google_map") ).css( "height", $bwinh );
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
	if (!$(event.target).closest('.mnp_hidden_menu').length & !$(event.target).is( '.mnp_header_menu_i' ) ) {
		jQuery( '.mnp_hidden_menu' ).css('height', '0px');
	}
}

jQuery(document).bind('tap', toogleMenu2);

jQuery(function(){
  	jQuery( '.mnp_header_menu_i' ).bind( 'tap', '.mnp_header_menu_i', toogleMenu);
});

/* User location */

var uloptions = {
	enableHighAccuracy: true,
  	timeout: 5000,
  	maximumAge: 0
};

var $userLa = 0;
var $userLo = 0;

function success(pos) {
  	var crd = pos.coords;
	$userLa = crd.latitude;
	$userLo = crd.longitude;
	map = new google.maps.Map(document.getElementById("google_map"), myOptions);
  	console.log('Success');
	$('#google_map').gmap('destroy');
  	initialise;
};

function error(err) {
  	$userLa = 0;
	$userLo = 0;
	
	console.log('Error');
};

/* Google Maps */

jQuery(function($) {
	var script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
});

var map, map2;

function initialize(condition) {
	
	var myLatlng = new google.maps.LatLng(38.9071923,-77.0368707);
	var userLatlng = new google.maps.LatLng( $userLa, $userLo); 
	
	var myOptions = {
    	zoom: 5,
		center: userLatlng,
		disableDefaultUI: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
	
	var myOptions2 = {
    	zoom: 10,
    	center: myLatlng,
		disableDefaultUI: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
  	}
	
	map = new google.maps.Map(document.getElementById("google_map"), myOptions);
	
    map2 = new google.maps.Map(document.getElementById("profile_google_map"), myOptions2);
	map2.panBy(0, -70);
	
	/* Markers map */
	
	var marker = new google.maps.Marker({
      	position: userLatlng,
      	map: map
  	});
	
	/* Markers map2 */
	
	var marker = new google.maps.Marker({
      	position: myLatlng,
      	map: map2
  	});
	
	google.maps.event.addDomListener(window, 'load', initialize);
}

/* Other (refresh GM + delay, search.focus) */

function hideLoader() {
	jQuery.mobile.loading( "hide" );
}

jQuery(document).on( "pageshow", "#profile_page", function() {
	jQuery.mobile.loading( "show" );
	setTimeout( initialize, 100 );
	setTimeout( hideLoader, 300 );
});

jQuery(document).on( "beforepageload", "#home_page", function() {
	jQuery.mobile.loading( "show" );
	setTimeout( initialize, 100 );
	setTimeout( hideLoader, 300 );
	jQuery( '.mnp_content_search_form_input' ).focus();
});

$(document).on("pagebeforecreate", function() {
	navigator.geolocation.getCurrentPosition(success, error, uloptions);
});