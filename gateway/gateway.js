var html1 = '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>',
    html2 = '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>';

$(document).ready(function(){
    $("button.step1_vote_item.step1_vote_up").append(html1);
    $("button.step1_vote_item.step1_vote_down").append(html2);
    $("div, h1, h2, h3, h4, h5, h6, p").removeAttr("style");
    $("div.step1_subscr_details_wrapper > input").removeAttr("style");
    $("step1_vote_box").wrap('<div class="centereddiv"></div>');
    $("button.step1_call_type_item").addClass('btn btn-default');
    $("div.step1_call_type_wrapper").addClass('btn-group-xs');
    $("div.step1_radio_group").addClass('input-group');
    $("span.step1_dd_tumbler").wrap('<div class="spandiv"></div>');
    $("textarea#step1_comment_text").addClass('form-control');
    $("input.gateway_submit_button").addClass('btn');
    $("div.step1_group_wrapper").css("display", "none");
    $( ".spandiv" ).click(function() {
       $( this ).next().next().toggle();
    });
    $("form.step1 > h1").wrap('<div class="ribbon_frame"></div>');
    $("h6").wrap('<div class="ribbon_frame_small"></div>');
    $( "div.ribbon_frame" ).after( '<div class="triangle-1"></div>' );
    $("form.step2 > h1").wrap('<div class="ribbon_frame_middle"></div>');
    $("#gateway > div.subtstep_2.substep > div > div > input[type='text']").addClass("form-control");
    $("div.step1_category_box_item").wrapAll('<div class="frame_menu"></div>');
    $("div.frame_menu").before('<span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span><div class="frame_menu_title">Kategorien ▾</div>');
    $( "div.frame_menu_title" ).click(function() {
        $("div.frame_menu").toggle();
    });
});

