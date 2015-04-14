/*
Homepage JS
Date: 13. 03. 2015.
Author: Armin
Version: 1.1
*/

/* Google Map */


jQuery(document).ready(function (e) {
    initialize();
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
            if(homeJSON[i].GEOLOCATED != false)
		markers.push( [ homeJSON[i].AREA_NAME , homeJSON[i].GEOLOCATED.lat, homeJSON[i].GEOLOCATED.lng, homeJSON[i].LOCAL_FORMAT, homeJSON[i].COUNTRY_NAME, homeJSON[i].AREA_CODE_LOCALIZED, homeJSON[i].NUMBER_RANK , homeJSON[i].URL ] );
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
				jQuery( ".marker_info_h2").empty().append( _LANG.PHONE_NUMBER + " " + markers[i][3] );
				jQuery( ".area_code_li").empty().append( _LANG.AREA_CODE + " " + markers[i][5] );
				jQuery( ".country_li").empty().append( _LANG.COUNTRY + " " + markers[i][4] );
				jQuery( ".city_service_li").empty().append( _LANG.CITY_STATE + " " + markers[i][0] );
				jQuery( ".number_rank_li").empty().append( _LANG.RANK + " " + markers[i][6] );
				jQuery(".marker_info_basic_li_a").attr("href",  markers[i][7]);
			
				var $winheight = jQuery( window ).height();
				var $elemheight = jQuery( document.getElementsByClassName("home_marker_info_divs") ).height()
				var $finalheight = ( $winheight - $elemheight ) / 2 ;
				jQuery( document.getElementsByClassName("home_marker_info_divs") ).css( "margin-top", $finalheight );
				if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
					jQuery( ".home_marker_info_divs").css("margin-left", "0px");
				}
				else {
					jQuery( ".home_marker_info_divs").css("margin-right", "0px");
				}
			}
		})(marker, i));
	
		map.fitBounds(bounds);
		zoomChangeBoundsListener = 
		google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
			if ( this.getZoom() ) {
				this.setZoom(_ZOOM_LVL);
			}
		});
			
		setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
             
	}
}

/* Close More Info Box on click */

jQuery(document).mouseup(function (e) {
	var home_container = jQuery(".home_marker_info_divs");

	if (!home_container.is(e.target) && home_container.has(e.target).length === 0) {
		if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
			home_container.css('margin-left', '-310px');
		}
		else {
			home_container.css('margin-right', '-310px');
		}
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

jQuery(function($) {
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

jQuery('.home_content_help_a').mousemove(function(e) {
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

jQuery(document).ready(function(){
	jQuery( ".fa-info-circle" ).click(function() {
		if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
			jQuery( ".home_stats_divs" ).css("margin-right", "0");
			jQuery( ".fa-info-circle" ).css("color", "#5bc0de");
		}
		else {
			jQuery( ".home_stats_divs" ).css("margin-left", "0");
			jQuery( ".fa-info-circle" ).css("color", "#5bc0de");
		}
			
	});
});

jQuery(document).ready(function(){
	if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
		jQuery( ".home_stats_divs" ).css("margin-right", "-"+jQuery( ".home_stats_divs" ).outerWidth()+"px");
	}
	else {
    	jQuery( ".home_stats_divs" ).css("margin-left", "-"+jQuery( ".home_stats_divs" ).outerWidth()+"px");
	}
        
	jQuery( ".close-btn" ).click(function() {
		if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
			jQuery( ".home_stats_divs" ).css("margin-right", "-"+jQuery( ".home_stats_divs" ).outerWidth()+"px");
			jQuery( ".fa-info-circle" ).css("color", "#000000");
		}
		else {
        	jQuery( ".home_stats_divs" ).css("margin-left", "-"+jQuery( ".home_stats_divs" ).outerWidth()+"px");
			jQuery( ".fa-info-circle" ).css("color", "#000000");
		}
	});
});

jQuery(document).ready(function(){
	jQuery( "li.home_stats_content_menu_ul_li.today_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "block");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

jQuery(document).ready(function(){
	jQuery( "li.home_stats_content_menu_ul_li.yesterday_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "block");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

jQuery(document).ready(function(){
	jQuery( "li.home_stats_content_menu_ul_li.yesterday_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "block");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

jQuery(document).ready(function(){
	jQuery( "li.home_stats_content_menu_ul_li.days_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "block");
		jQuery( ".home_stats_content_total" ).css("display", "none");
	});
});

jQuery(document).ready(function(){
	jQuery( "li.home_stats_content_menu_ul_li.total_link" ).click(function() {
		jQuery( ".home_stats_content_today" ).css("display", "none");
		jQuery( ".home_stats_content_yesterday" ).css("display", "none");
		jQuery( ".home_stats_content_days" ).css("display", "none");
		jQuery( ".home_stats_content_total" ).css("display", "block");
	});
});

/* Footer logic */

jQuery(document).ready(function(){
	var $footerDrawn = "false";
	jQuery( '.slide-btn' ).click(function() {
		if ( $footerDrawn == "false" ) {
			$footerDrawn = "true";
			jQuery ( '.home_footer' ).css("height", "200px");
			jQuery( '.slide-btn' ).css({'-webkit-transform' : 'rotate('+ 180 +'deg)',
                 '-moz-transform' : 'rotate('+ 180 +'deg)',
                 '-ms-transform' : 'rotate('+ 180 +'deg)',
                 'transform' : 'rotate('+ 180 +'deg)'});
		}
		else if ( $footerDrawn == "true" ) {
			$footerDrawn = "false";
			jQuery ( '.home_footer' ).css("height", "18px");
			jQuery( '.slide-btn' ).css({'-webkit-transform' : 'rotate('+ 0 +'deg)',
                 '-moz-transform' : 'rotate('+ 0 +'deg)',
                 '-ms-transform' : 'rotate('+ 0 +'deg)',
                 'transform' : 'rotate('+ 0 +'deg)'});
		}
	});
});

jQuery(document).ready(function(){
	jQuery( "li.content_city_list_li.city_one_link" ).click(function() {
		jQuery( '.content_number_list_one, .content_number_list_two, .content_number_list_three, .content_number_list_four, .content_number_list_five' ).css( 'display', 'none' );
		jQuery( '.content_number_list_one' ).css( 'display', 'block' );
		jQuery( 'li.content_city_list_li.city_one_link, li.content_city_list_li.city_two_link, li.content_city_list_li.city_three_link, li.content_city_list_li.city_four_link, li.content_city_list_li.city_five_link' ).removeClass( 'active_city' );
		jQuery( 'li.content_city_list_li.city_one_link' ).addClass( 'active_city' );
	});
});

jQuery(document).ready(function(){
	jQuery( "li.content_city_list_li.city_two_link" ).click(function() {
		jQuery( '.content_number_list_one, .content_number_list_two, .content_number_list_three, .content_number_list_four, .content_number_list_five' ).css( 'display', 'none' );
		jQuery( '.content_number_list_two' ).css( 'display', 'block' );
		jQuery( 'li.content_city_list_li.city_one_link, li.content_city_list_li.city_two_link, li.content_city_list_li.city_three_link, li.content_city_list_li.city_four_link, li.content_city_list_li.city_five_link' ).removeClass( 'active_city' );
		jQuery( 'li.content_city_list_li.city_two_link' ).addClass( 'active_city' );
	});
});

jQuery(document).ready(function(){
	jQuery( "li.content_city_list_li.city_three_link" ).click(function() {
		jQuery( '.content_number_list_one, .content_number_list_two, .content_number_list_three, .content_number_list_four, .content_number_list_five' ).css( 'display', 'none' );
		jQuery( '.content_number_list_three' ).css( 'display', 'block' );
		jQuery( 'li.content_city_list_li.city_one_link, li.content_city_list_li.city_two_link, li.content_city_list_li.city_three_link, li.content_city_list_li.city_four_link, li.content_city_list_li.city_five_link' ).removeClass( 'active_city' );
		jQuery( 'li.content_city_list_li.city_three_link' ).addClass( 'active_city' );
	});
});

jQuery(document).ready(function(){
	jQuery( "li.content_city_list_li.city_four_link" ).click(function() {
		jQuery( '.content_number_list_one, .content_number_list_two, .content_number_list_three, .content_number_list_four, .content_number_list_five' ).css( 'display', 'none' );
		jQuery( '.content_number_list_four' ).css( 'display', 'block' );
		jQuery( 'li.content_city_list_li.city_one_link, li.content_city_list_li.city_two_link, li.content_city_list_li.city_three_link, li.content_city_list_li.city_four_link, li.content_city_list_li.city_five_link' ).removeClass( 'active_city' );
		jQuery( 'li.content_city_list_li.city_four_link' ).addClass( 'active_city' );
	});
});

jQuery(document).ready(function(){
	jQuery( "li.content_city_list_li.city_five_link" ).click(function() {
		jQuery( '.content_number_list_one, .content_number_list_two, .content_number_list_three, .content_number_list_four, .content_number_list_five' ).css( 'display', 'none' );
		jQuery( '.content_number_list_five' ).css( 'display', 'block' );
		jQuery( 'li.content_city_list_li.city_one_link, li.content_city_list_li.city_two_link, li.content_city_list_li.city_three_link, li.content_city_list_li.city_four_link, li.content_city_list_li.city_five_link' ).removeClass( 'active_city' );
		jQuery( 'li.content_city_list_li.city_five_link' ).addClass( 'active_city' );
	});
});