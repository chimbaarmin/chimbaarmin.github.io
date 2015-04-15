/*
Homepage JS
Date: 15. 04. 2015.
Author: Armin
Version: 2.0
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
    var infobox;

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
    map.setOptions({
        styles: styles
    });
			

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
            title: markers[i][3],
            optimized: false
        });
         
       
        
        infobox = new InfoBox({
       
            disableAutoPan: false,
            maxWidth: 150,
            pixelOffset: new google.maps.Size(-140, 0),
            zIndex: null,
            boxStyle: {
                background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
                opacity: 1,
                width: "280px"
            },
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1)
        });
        

        
         
            
    
        google.maps.event.addDomListener(window, 'mouseup', function (event) {
            infobox.close();
        });
        
        
         
         google.maps.event.addListener(marker, 'click', (function(marker, i) {
	
            return function() {
                
                infobox.close();
                infobox.setContent(generateInfoboxContent(markers[i], i));
                infobox.open(map, marker);
                
                map.setCenter(marker.getPosition());
                jQuery( document.getElementsByClassName("home_content") ).css( "transition", "margin-top 1s linear" );
                jQuery( document.getElementsByClassName("home_content") ).css( "margin-top", "70px" );
				
            }
        })(marker, i));
	
        
        map.fitBounds(bounds);
        
        zoomChangeBoundsListener = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
            if ( this.getZoom() ) {
                this.setZoom(_ZOOM_LVL);
            }
        });
			
        setTimeout(function(){
            google.maps.event.removeListener(zoomChangeBoundsListener)
        }, 2000);
             
    }
    
    function generateInfoboxContent(marker, i){
        return '<div class="home_marker_info"><h4 class="marker_info_h2">'+ _LANG.PHONE_NUMBER + " " + marker[3]+ '</h4><div class="marker_info_basic"><ul class="marker_info_basic_ul"><li class="marker_info_basic_li area_code_li">'+_LANG.AREA_CODE + " " + marker[5]+'</li><li class="marker_info_basic_li country_li">'+_LANG.COUNTRY + " " + marker[4]+'</li><li class="marker_info_basic_li city_service_li">'+_LANG.CITY_STATE + " " + marker[0]+'</li><li class="marker_info_basic_li number_rank_li">'+_LANG.RANK + " " + marker[6]+'</li><div class="more_info_basic_link"><a href="'+marker[7]+'" class="marker_info_basic_li_a">More info</a></div></ul></div></div>';
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

function home_resize() {
    $winheight = jQuery( window ).height();
    $elemheight = jQuery( document.getElementsByClassName("home_content") ).height();
    $finalheight = ( $winheight - $elemheight) / 2 ;
    jQuery( document.getElementsByClassName("home_content") ).css( "transition", "none" );
    jQuery( document.getElementsByClassName("home_content") ).css( "margin-top", $finalheight );
}

jQuery( window ).on("resize", home_resize);
jQuery(home_resize);



function home_stats_resize() {
    $winheight = jQuery( window ).height();
    $elemheight = jQuery( document.getElementsByClassName("home_stats_divs") ).height()
    $finalheight = ( $winheight - $elemheight ) / 2 ;
    jQuery( document.getElementsByClassName("home_stats_divs") ).css( "margin-top", $finalheight );
}

jQuery( window ).on("resize", home_stats_resize);
jQuery(home_stats_resize);


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


function drawnFooter() {
	$footerDrawn = "false";
	jQuery ( '.home_footer' ).css("height", "18px");
	jQuery( '.slide-btn' ).css({
		'-webkit-transform' : 'rotate('+ 0 +'deg)',
		'-moz-transform' : 'rotate('+ 0 +'deg)',
		'-ms-transform' : 'rotate('+ 0 +'deg)',
		'transform' : 'rotate('+ 0 +'deg)'
	});
}

function drawLeft() {
	if ( jQuery( 'html' ).attr( 'dir' ) == "rtl" ) {
        jQuery( ".home_stats_divs" ).css("margin-right", "0");
        jQuery( ".fa-info-circle" ).css("color", "#5bc0de");
    }
    else {
        jQuery( ".home_stats_divs" ).css("margin-left", "0");
        jQuery( ".fa-info-circle" ).css("color", "#5bc0de");
		drawnFooter();
    }
}

jQuery(document).ready(function(){
    jQuery( ".fa-info-circle" ).click(function() {
        drawLeft();			
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
    jQuery( '.home_footer_link' ).click(function() {
		drawLeft();
        var $activeItem = jQuery( this ).attr( 'data-item' );
        jQuery( '.home_footer_link' ).removeClass('active_footer_button');
        jQuery( this ).addClass('active_footer_button');
        jQuery ( '.home_stats_content_day' ).removeClass('active_left_item');
        jQuery( "." + $activeItem ).addClass('active_left_item');
    });
});

/* Footer logic */

jQuery(document).ready(function(){
    var $footerDrawn = "false";
    jQuery( '.slide-btn' ).click(function() {
        if ( $footerDrawn == "false" ) {
            $footerDrawn = "true";
			jQuery( ".home_stats_divs" ).css("margin-left", "-"+jQuery( ".home_stats_divs" ).outerWidth()+"px");
            jQuery( ".fa-info-circle" ).css("color", "#000000");
            jQuery ( '.home_footer' ).css("height", "200px");
            jQuery( '.slide-btn' ).css({
                '-webkit-transform' : 'rotate('+ 180 +'deg)',
                '-moz-transform' : 'rotate('+ 180 +'deg)',
                '-ms-transform' : 'rotate('+ 180 +'deg)',
                'transform' : 'rotate('+ 180 +'deg)'
            });
        }
        else if ( $footerDrawn == "true" ) {
            $footerDrawn = "false";
            jQuery ( '.home_footer' ).css("height", "18px");
            jQuery( '.slide-btn' ).css({
                '-webkit-transform' : 'rotate('+ 0 +'deg)',
                '-moz-transform' : 'rotate('+ 0 +'deg)',
                '-ms-transform' : 'rotate('+ 0 +'deg)',
                'transform' : 'rotate('+ 0 +'deg)'
            });
        }
    });
});

jQuery(document).ready(function(){
    jQuery( '.home_footer_trigger' ).click(function() {
        var $activeItem = jQuery( this ).attr( 'data-item' );
        jQuery( '.home_footer_trigger' ).removeClass('active_button');
        jQuery( this ).addClass('active_button');
        jQuery ( '.home_footer_numbers_wrapper' ).removeClass('active_item');
        jQuery( "." + $activeItem ).addClass('active_item');
    });
});