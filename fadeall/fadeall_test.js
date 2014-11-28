$(document).ready(function(){
    $("#the_lights").fadeTo(1,0);
    $(".brightbox").mouseenter(function () {
        $('.brightbox').not(this).css({"z-index":"0"});;
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0.8);
    });
    $(".brightbox").mouseleave(function () {
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0, function () {
            $('.brightbox').not(this).css({"z-index":"1000"});
        });
                        
    });
});

$(document).ready(function(){
    $( ".brightbox" ).css({"background-color":"#fff"});
    $( ".brightbox" ).css({"position":"relative"});
    $( ".brightbox" ).css({"z-index":"1000"});
});

var the_lights = '<div id="the_lights"></div></div>';

$(document).ready(function(){
    $('body').append(the_lights);
});