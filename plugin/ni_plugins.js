// Chimba Web collection of plugins. Copyright 2014 - 2015. All rights reserved.

// headerize - transform h tags, usage: $( "object" ).headerize( option: "setting" );

(function($) {

    $.fn.headerize = function( options ) {

    var settings = $.extend({
        background_color : "#6075A6",
        color            : "#f3f3f3",
        text_align       : "center",
        margin           : "0",
        padding          : "10px",
        font_size        : "20px"
    }, options);

    return this.each( function() {
        $(this).text( settings.text );
            if ( settings.background_color ) {
                $(this).css( 'background-color', settings.background_color );
            }
            if ( settings.color ) {
                $(this).css( 'color', settings.color );
            }
            if ( settings.text_align ) {
                $(this).css( 'text-align', settings.text_align );
            }
            if ( settings.margin ) {
                $(this).css( 'margin', settings.margin );
            }
            if ( settings.padding ) {
                $(this).css( 'padding', settings.padding );
            }
            if ( settings.font_size ) {
                $(this).css( 'font-size', settings.font_size );
            }
        });
    }

}(jQuery));

// addthumbs - add thumbs up or thumbs down, usage: $( "object" ).addthumbs( "option" ); where "option" is "up" for thumbs up glyph or "down" for thumbs down glyph.

(function($) {

    $.fn.addthumbs = function( option ) {

        switch(option) {
            case 'up':
                $(this).append('<span class="glyphicon glyphicon-thumbs-up green" aria-hidden="true"></span>');
                break;
            case 'down':
                $(this).append('<span class="glyphicon glyphicon-thumbs-down red" aria-hidden="true"></span>');
                break;
            default:
                alert('Add thumbs up or thumbs down?');
                break;
        }
    }

}(jQuery));

// rstyle - remove HTML style attribute from object, usage: $( "object" ).rstyle();

(function($) {

    $.fn.rstyle = function() {

        return this.each( function() {
            $(this).removeAttr("style");
        });

    }

}(jQuery));

// btstrp - bootstrap element, usage: $( "object" ).btstrp( "option" ); where option responds to tag/element type (button, img, caret, input, text-area, ul, li).

(function($) {

    $.fn.btstrp = function( option ) {

    switch(option) {
        case 'button':
            $(this).addClass("btn btn-default");
            break;
        case 'img':
            $(this).addClass("img-thumbnail");
            break;
        case 'caret':
            $(this).append(" ▼");
            break;
        case 'input':
            $(this).addClass("form-control");
            break;
        case 'text-area':
            $(this).addClass("form-control");
            break;
        case 'ul':
            $(this).addClass("list-group");
            break;
        case 'li':
            $(this).addClass("list-group-item");
            break;
        default:
            alert('Please define element for btstrp function. Thank you.');
            break;
            }
    }

}(jQuery));

// glyphit - appends bootstrap glyph to object, usage: $( "object" ).glyphit( "option1", "option2); where "option1" is bootstrap glyph name, "option2" is "pre" if glyph is to be prepended or "app" if it is to be appended.
    
(function($) {

    $.fn.glyphit = function( option1, option2 ) {
        
        if ( option2 == "app" ) {
        return this.each( function() {
            $(this).append( ' <span class="glyphicon glyphicon-'+option1+' aria-hidden="true"></span>' );
        });
        }
        if ( option2 == "pre" ) {
        return this.each( function() {
            $(this).prepend( '<span class="glyphicon glyphicon-'+option1+' aria-hidden="true"></span> ' );
        });
        }
        else {
        alert("Please define option2. See documentation for more info.");
        }
    }

}(jQuery));

//