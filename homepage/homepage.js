/*
Homepage JS
Date: 04. 03. 2015.
Author: Armin
Version: 1.0
/*

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
	var styles = [
	  	{
			stylers: []
		}
	];

	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	map.setTilt(45);
	map.setOptions({styles: styles});
			
	var homeJSON = JSON.parse( HOME_PAGE_MAP_DATA );
	var markers = [];
		
	for (i = 0; i < homeJSON.length; i++) {
		markers.push( [ homeJSON[i].AREA_NAME , homeJSON[i].GEOLOCATED.lat, homeJSON[i].GEOLOCATED.lng, homeJSON[i].LOCAL_FORMAT, homeJSON[i].COUNTRY_NAME, homeJSON[i].AREA_CODE_LOCALIZED, homeJSON[i].NUMBER_RANK ] );
	}  				
			
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
				jQuery( ".marker_info_h2").empty().append( "Phone number: " + markers[i][3] );
				jQuery( ".area_code_li").empty().append( "Area code: " + markers[i][5] );
				jQuery( ".country_li").empty().append( "Country: " + markers[i][4] );
				jQuery( ".city_service_li").empty().append( "City, state/Service: " + markers[i][0] );
				jQuery( ".number_rank_li").empty().append( "Number rank: " + markers[i][6] );
				jQuery(".marker_info_basic_li_a").attr("href", "http://www.number-index.com/" + markers[i][3] +"/" );
			
				var $winheight = jQuery( window ).height();
				var $elemheight = jQuery( document.getElementsByClassName("home_marker_info_divs") ).height()
				var $finalheight = ( $winheight - $elemheight ) / 2 ;
				jQuery( document.getElementsByClassName("home_marker_info_divs") ).css( "margin-top", $finalheight );
			
				jQuery( ".home_marker_info_divs").css("margin-right", "0px");
			}
		})(marker, i));
	
		map.fitBounds(bounds);
		zoomChangeBoundsListener = 
		google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
			if ( this.getZoom() ) {
				this.setZoom(5);
			}
		});
			
		setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
	}
}

/* Close More Info Box on click */

$(document).mouseup(function (e) {
	var home_container = $(".home_marker_info_divs");

	if (!home_container.is(e.target) && home_container.has(e.target).length === 0) {
		home_container.css('margin-right', '-310px');
	}
});

/* Center Search Box */

var $winheight;
var $elemheight;
var $finalheight;

jQuery( window ).on("resize", function() {
	$winheight = jQuery( window ).height();
	$elemheight = jQuery( document.getElementsByClassName("home_content") ).height()
	$finalheight = ( $winheight - $elemheight ) / 2 ;
	jQuery( document.getElementsByClassName("home_content") ).css( "margin-top", $finalheight );
});

jQuery(function() {
	$winheight = jQuery( window ).height();
	$elemheight = jQuery( document.getElementsByClassName("home_content") ).height()
	$finalheight = ( $winheight - $elemheight ) / 2 ;
	jQuery( document.getElementsByClassName("home_content") ).css( "margin-top", $finalheight );
});

/* */

jQuery( window ).on("resize", function() {
	$winheight = jQuery( window ).height();
	$elemheight = jQuery( document.getElementsByClassName("home_stats_divs") ).height()
	$finalheight = ( $winheight - $elemheight ) / 2 ;
	jQuery( document.getElementsByClassName("home_stats_divs") ).css( "margin-top", $finalheight );
});

jQuery(function() {
	$winheight = jQuery( window ).height();
	$elemheight = jQuery( document.getElementsByClassName("home_stats_divs") ).height()
	$finalheight = ( $winheight - $elemheight ) / 2 ;
	jQuery( document.getElementsByClassName("home_stats_divs") ).css( "margin-top", $finalheight );
});

/* */

jQuery( window ).on("resize", function() {
	$winheight = jQuery( window ).height();
	$elemheight = jQuery( document.getElementsByClassName("home_marker_info_divs") ).height()
	$finalheight = ( $winheight - $elemheight ) / 2 ;
	jQuery( document.getElementsByClassName("home_marker_info_divs") ).css( "margin-top", $finalheight );
});

/* Hover Help */

$(function() {
	var moveLeft = 0;
	var moveDown = 0;
	$('.home_content_help_a').hover(function(e) {
	var target = '#' + ($(this).attr('data-popbox'));
	$(target).show();
		moveLeft = $(this).outerWidth();
		moveDown = ($(target).outerHeight() / 2);
}, 
		
function() {
	var target = '#' + ($(this).attr('data-popbox'));
	$(target).hide();
});

$('.home_content_help_a').mousemove(function(e) {
	var target = '#' + ($(this).attr('data-popbox'));
	leftD = e.pageX + parseInt(moveLeft);
	maxRight = leftD + $(target).outerWidth();
	windowLeft = $(window).width() - 40;
	windowRight = 0;
	maxLeft = e.pageX - (parseInt(moveLeft) + $(target).outerWidth() + 20);
	if(maxRight > windowLeft && maxLeft > windowRight) {
		leftD = maxLeft;
	}
	topD = e.pageY - parseInt(moveDown);
	maxBottom = parseInt(e.pageY + parseInt(moveDown) + 20);
	windowBottom = parseInt(parseInt($(document).scrollTop()) + parseInt($(window).height()));
	maxTop = topD;
	windowTop = parseInt($(document).scrollTop());
	if(maxBottom > windowBottom) {
		topD = windowBottom - $(target).outerHeight() - 20;
	} 
	else if (maxTop < windowTop) {
		topD = windowTop + 20;
	}
	$(target).css('top', topD).css('left', leftD);
	});
});

/* Action area */

$(document).ready(function() {
	jQuery( ".fa-info-circle" ).click(function() {
		jQuery( ".home_stats_divs" ).css("margin-left", "0");
		jQuery( ".fa-info-circle" ).css("color", "#5bc0de");
	});
});

$(document).ready(function() {
	jQuery( ".close-btn" ).click(function() {
		jQuery( ".home_stats_divs" ).css("margin-left", "-370px");
		jQuery( ".fa-info-circle" ).css("color", "#333333");
	});
});

$(document).ready(function() {
	jQuery( "li.home_stats_content_menu_ul_li.today_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "block");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

$(document).ready(function() {
	jQuery( "li.home_stats_content_menu_ul_li.yesterday_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "block");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

$(document).ready(function() {
	jQuery( "li.home_stats_content_menu_ul_li.yesterday_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "block");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

$(document).ready(function() {
	jQuery( "li.home_stats_content_menu_ul_li.days_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "block");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

$(document).ready(function() {
	jQuery( "li.home_stats_content_menu_ul_li.total_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "block");
	});
});