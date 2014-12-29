$(document).ready(function(){

    $("#sidebar_phoneprofile > div:nth-child(3) > ul:first-of-type, div.textwidget > ul").hide();
    $("#sidebar_phoneprofile > div:nth-child(3) > h3").click(function () {
        $("#sidebar_phoneprofile > div:nth-child(3) > ul:first-of-type").slideToggle("slow");
    });
    $("div.widget > h5").click(function () {
        $(this).next().children().not("#text-52 > div.textwidget > a, #text-65 > div.textwidget > div, #text-65 > div.textwidget > div > a").slideToggle("slow");
    });
    
});





