var html1 = '<span class="glyphicon glyphicon-thumbs-up green" aria-hidden="true"></span>',
    html2 = '<span class="glyphicon glyphicon-thumbs-down red" aria-hidden="true"></span>';

$(document).ready(function(){
    $(".btn_vote_up_110").append(html1);
    $(".btn_vote_down_110").append(html2);
    $(".btn_vote_up_110").unwrap().unwrap();
    $(".btn_vote_down_110").unwrap().unwrap();
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span").prepend('<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>');
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span.glyphicon.glyphicon-info-sign").wrap('<div class="info_sign_div"></div>');
    $(".btn_klingelschutz > span").removeAttr("style");
    $(".btn_klingelschutz > span").addClass("btn btn-default");
    $("div.t_upper_body_right_btn_container > button").addClass("btn btn-default");
    $("#telefonnummer_wrapper > div.t_upper_body > div.t_upper_body_item.t_upper_body_highglight > span > strong").wrap('<div class="aus_strong_div"></div>');
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1), #telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2), #telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)").wrapAll('<div class="wrapper_small"></div>');
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > ul").addClass("list-group");
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > ul > li").addClass("list-group-item");
    $("#telefonnummer_wrapper > div.t_middle_body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div").wrap('<li class="list-group-item"></li>');
    $("#subscription_box > div.subscription_box_initial > input:nth-child(7)").addClass("btn btn-default");
    $("input.subscription_box_email").addClass("form-control");
    $("#subscription_box > div.subscription_box_initial > span:nth-child(1)").prepend('<span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span> ');
});



