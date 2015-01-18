$(document).ready(function(){
    $("#the_lights").fadeTo(1,0);
    $(".brightbox").mouseenter(function () {
        $('.brightbox').not(this).removeClass('standout');
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0.8);
    });
    $(".brightbox").mouseleave(function () {
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0, function () {
            $('.brightbox').not(this).addClass('standout');
        });
                        
    });
});