$(document).ready(function(){
    $(".btn_vote_up_110").addthumbs("up");
    $(".btn_vote_down_110").addthumbs("down");
    $(".btn_vote_up_110").unwrap().unwrap();
    $(".btn_vote_down_110").unwrap().unwrap();
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span").glyphit("info-sign", "pre");
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span.glyphicon.glyphicon-info-sign").wrap('<div class="info_sign_div"></div>');
    $(".btn_klingelschutz > span").rstyle();
    $(".btn_klingelschutz > span").btstrp("button");
    $("div.t_upper_body_right_btn_container > button").btstrp("button");
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span > strong").wrap('<div class="aus_strong_div"></div>');
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1), #telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2), #telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)").wrapAll('<div class="wrapper_small"></div>');
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > ul, #sidebar_phoneprofile > div:nth-child(3) > ul").btstrp("ul");
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > ul > li, #sidebar_phoneprofile > div:nth-child(3) > ul > li").btstrp("li");
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div").wrap('<li class="list-group-item"></li>');
    $("#subscription_box > div.subscription_box_initial > input:nth-child(7)").btstrp("button");
    $("input.subscription_box_email").btstrp("input");
    $("#subscription_box > div.subscription_box_initial > span:nth-child(1)").glyphit("phone-alt", "pre");
    $("#comment_text").btstrp("text-area");
    $("#comment_form_onpage > div.initial_view > div.sbm_btn_wrapper > input").btstrp("button");
    $("#sidebar_phoneprofile > div:nth-child(3) > h3").btstrp("caret");
    $("#text-65 > div.textwidget > li").wrapAll("<ul></ul>");
    $("#text-52 > div.textwidget > a > img").wrap('<div class="img_wrap"></div>');
    $("#text-65 > div.textwidget > a").wrap('<div class="link_wrap"></div>');
    $("#sidebar_phoneprofile > div:nth-child(3) > ul:first-of-type, div.textwidget > ul").hide();
    $("#sidebar_phoneprofile > div:nth-child(3) > h3").click(function () {
        $("#sidebar_phoneprofile > div:nth-child(3) > ul:first-of-type").slideToggle("slow");
    });
    $("div.widget > h5").click(function () {
        $(this).next().children().not("#text-52 > div.textwidget > a, #text-65 > div.textwidget > div, #text-65 > div.textwidget > div > a").slideToggle("slow");
    });
    
});





