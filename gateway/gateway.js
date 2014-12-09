var html1 = '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>',
    html2 = '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>';

$(document).ready(function(){
    $("button.step1_vote_item.step1_vote_up").append(html1);
    $("button.step1_vote_item.step1_vote_down").append(html2);
    $("div, h1, h2, h3, h4, h5, h6, p").removeAttr("style");
    $("step1_vote_box").wrap('<div class="centereddiv"></div>');
    $("button.step1_call_type_item").addClass('btn btn-default btn-sm');
    $("div.step1_call_type_wrapper").addClass('btn-group');
    $("div.step1_radio_group").addClass('input-group');
    $("span.step1_dd_tumbler").wrap('<div class="spandiv"></div>');
    $("textarea#step1_comment_text").addClass('form-control');
    $("input.gateway_submit_button").addClass('btn');
    $("div.step1_group_wrapper").addClass('hiddenhidden');
    $( "div.step1_category_box_item" ).click(function() {
        $("div.step1_group_wrapper").addClass('hiddenhidden');
        $(this).children("div.step1_group_wrapper").removeClass('hiddenhidden');
    });
});

