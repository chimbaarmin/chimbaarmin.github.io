$(document).ready(function(){
    $("#the_lights").fadeTo(1,0);
    $("#google_image_div").mouseenter(function () {
        $('#google_image_div').not(this).css({"z-index":"0"});
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0.8);
    });
    $("#google_image_div").mouseleave(function () {
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("slow",0, function () {
            $('#google_image_div').not(this).css({"z-index":"1000"});
        });
                        
    });
});

$(document).ready(function(){
    $( "#google_image_div" ).css({"background-color":"#fff"});
    $( "#google_image_div" ).css({"position":"relative"});
    $( "#google_image_div" ).css({"z-index":"1000"});
});