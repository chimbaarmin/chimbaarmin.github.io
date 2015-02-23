/* GM size */

var $winh;
function windowHeight() {
	$winh = jQuery( window ).height();
	jQuery( document.getElementById("google_map") ).css( "height", $winh );
}

jQuery( window ).on("resize", windowHeight);	
jQuery( windowHeight );

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
	if ( jQuery( '.mnp_hidden_menu' ).css('display') == 'none' ) {
		jQuery( '.mnp_hidden_menu' ).css('display', 'block');
	}
	else {
		jQuery( '.mnp_hidden_menu' ).css('display', 'none');
	}
}

$(document).on('click', function(event) {
	if (!$(event.target).closest('.mnp_hidden_menu').length & !$(event.target).is( '.mnp_footer_menu_i' ) ) {
		jQuery( '.mnp_hidden_menu' ).css('display', 'none');
	}
});

$(function(){
  $( '.mnp_footer_menu_i' ).bind( 'tap', '.mnp_footer_menu_i', toogleMenu);
});

/* */

/* Google Map */

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
					this.panBy(0,-10)
				}
			});

			setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
			}
		}