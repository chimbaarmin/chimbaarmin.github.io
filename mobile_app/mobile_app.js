/* GM size */

$winh = jQuery( window ).height();
jQuery( window ).on("resize", function() {
	$winh = jQuery( window ).height();
	jQuery( document.getElementById("google_map") ).css( "height", $winh );
});
		
jQuery(function() {
	$winh = jQuery( window ).height();
	jQuery( document.getElementById("google_map") ).css( "height", $winh );
});

/* GM */

jQuery(function($) {
	var script = document.createElement('script');
	script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
	document.body.appendChild(script);
});

function initialize() {
	var map;
	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
		mapTypeId: 'terrain',
		zoom: 100,
		disableDefaultUI: true
	};

	map = new google.maps.Map(document.getElementById("google_map"), mapOptions);
	map.setTilt(45);
	
	var markers = [
		['Grand Rapids', 42.9633599,-85.6680863, '6169802150', 'USA', 616],
		['Melbourne, Florida', 28.0836269,-80.6081089, '3212555798', 'USA', 321],
		['Miami, Florida', 25.7616798,-80.1917902, '3052007795', 'USA', 305],
		['San Jose, California', 37.3382082,-121.8863286, '4086185204', 'USA', 408],
		['Fargo, North Dakota', 46.8771863,-96.7898034, '7018576400', 'USA', 701]
	];

	var infoWindow = new google.maps.InfoWindow(), marker, i;
			
	for( i = 0; i < markers.length; i++ ) {
		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		bounds.extend(position);
		marker = new google.maps.Marker({
			position: position,
			map: map,
			title: markers[i][0],
			optimized: false
		});
 
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				
			}
			})(marker, i));

			map.fitBounds(bounds);
			zoomChangeBoundsListener = 
			google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
				if ( this.getZoom() ) {
					this.setZoom(3);
				}
			});

			setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
			}
		}

/* */

jQuery( document ).on( "swiperight", ".ui-page", rightHandler );
				
		function rightHandler( event ){
			var prev = jQuery( ".ui-page-active" ).jqmData( "prev" );
			if ( prev && ( event.target === $( this )[ 0 ] ) ) {
				jQuery( "body" ).pagecontainer( "change", "#" + prev, { transition: "flip", reverse: true } );
			}
		}
		
		jQuery( document ).on( "swipeleft", ".ui-page", leftHandler );
		
		function leftHandler( event ){
			var next = jQuery( ".ui-page-active" ).jqmData( "next" );
			if ( next && ( event.target === $( this )[ 0 ] ) ) {
				jQuery( "body" ).pagecontainer( "change", "#" + next, { transition: "flip" } );
			}
		}

/* */

var $winh2;
var $elemh2;
var $finalh;
var $winw2;
var $elemw2;
var $finalw;
jQuery( window ).on("resize", function() {
	$winh2 = jQuery( window ).height() / 2;
	$elemh2 = jQuery( '.mnp_content_search_box' ).height() / 2;
	$finalh = $winh2 - $elemh2;
	jQuery( document.getElementsByClassName("mnp_content_search_box") ).css( "top", $finalh );
	$winw2 = jQuery( window ).width() / 2;
	$elemw2 = jQuery( '.mnp_content_search_box' ).width() / 2;
	$finalw = $winw2 - $elemw2;
	jQuery( document.getElementsByClassName("mnp_content_search_box") ).css( "left", $finalw );
});
		
jQuery(function() {
	$winh2 = jQuery( window ).height() / 2;
	$elemh2 = jQuery( '.mnp_content_search_box' ).height() / 2;
	$finalh = $winh2 - $elemh2;
	jQuery( document.getElementsByClassName("mnp_content_search_box") ).css( "top", $finalh );
	$winw2 = jQuery( window ).width() / 2;
	$elemw2 = jQuery( '.mnp_content_search_box' ).width() / 2;
	$finalw = $winw2 - $elemw2;
	jQuery( document.getElementsByClassName("mnp_content_search_box") ).css( "left", $finalw );
});

/* */

function hideHiddenMenu (e) {
	var home_container = $(".mnp_hidden_menu");
	if (!home_container.is(e.target) && home_container.has(e.target).length === 0) {
		jQuery( '.mnp_hidden_menu' ).css('display', 'none' );
	}
}

function showHiddenMenu() {
	if ( jQuery( '.mnp_hidden_menu' ).css('display') == 'none' ) {
		jQuery( '.mnp_hidden_menu' ).css( 'display', 'block' );
	}
	else {
		jQuery( '.mnp_hidden_menu' ).css( 'display', 'none' );
	}
}

jQuery( document ).on('click', '.mnp_footer_menu', showHiddenMenu);
	
jQuery(document).mouseup( hideHiddenMenu );