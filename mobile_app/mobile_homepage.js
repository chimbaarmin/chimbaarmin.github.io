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

var $userLa = 40.7127837;
var $userLo = -74.0059413;
var $jsonResponse = "";
var $jsonArray = [];

$.get("//ipinfo.io", function(response) {
	$jsonResponse = response.loc;
	console.log( $jsonResponse );
	$jsonArray = $jsonResponse.split(",").map(Number);
	$userLa = $jsonArray[0];
	$userLo = $jsonArray[1];
}, "jsonp");

/* Google Maps */

jQuery(function($) {
	var script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
});

var map;

function initialize(condition) {
	
	var userLatlng = new google.maps.LatLng( $userLa, $userLo); 
	
	var myOptions = {
    	zoom: 8,
		center: userLatlng,
		disableDefaultUI: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
	
	map = new google.maps.Map(document.getElementById("google_map"), myOptions);
	map.panBy(0, 100);
	
	var marker = new google.maps.Marker({
      	position: userLatlng,
      	map: map
  	});
	
	google.maps.event.addDomListener(window, 'load', initialize);
}

/* Other (refresh GM + delay, search.focus) */

function hideLoader() {
	jQuery.mobile.loading( "hide" );
}

jQuery(document).on( "pageshow", "#home_page", function() {
	jQuery.mobile.loading( "show" );
	setTimeout( initialize, 100 );
	setTimeout( hideLoader, 300 );
	jQuery( '.mnp_content_search_form_input' ).focus();
});

$( window ).on( "orientationchange", function( event ) {
	var $orientationVal = event.orientation;
  	if ( $orientationVal == "landscape" ) {
		jQuery( "body" ).css("display", "none");
		alert ( "This App can only be used in Portrait mode. Please rotate your device." );
	}
	if ( $orientationVal == "portrait" ) {
		jQuery( "body" ).css("display", "block");
		location.reload();
	}
});
