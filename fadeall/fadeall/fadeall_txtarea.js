$(document).ready(function(){
    $("#the_lights").fadeTo(1,0);
    $(".theSelector, .gateway_submit_button").mouseenter(function () {
        $('.theSelector').not(this).css({"z-index":"0"});;
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("fast",0.8);
    });
    $(".theSelector").mouseleave(function () {
        document.getElementById("the_lights").style.display="block";
        $("#the_lights").fadeTo("fast",0, function () {
            $('.theSelector').not(this).css({"z-index":"1000"});
        });
                        
    });
});

$(document).ready(function(){
    $( "#the_lights" ).css({"background-color":"#000"});
    $( "#the_lights" ).css({"height":"100%"});
    $( "#the_lights" ).css({"width":"100%"});
    $( "#the_lights" ).css({"position":"fixed"});
    $( "#the_lights" ).css({"top":"0"});
    $( "#the_lights" ).css({"left":"0"});
    $( "#the_lights" ).css({"display":"none"});
});

$(document).ready(function(){
    $( ".theSelector" ).css({"background-color":"#fff"});
    $( ".theSelector" ).css({"position":"relative"});
    $( ".theSelector" ).css({"z-index":"1000"});
});

