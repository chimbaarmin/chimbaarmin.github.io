$(document).ready(function(){
                    $("#the_lights").fadeTo(1,0);
                    $(".brightbox").mouseenter(function () {
                         document.getElementById("the_lights").style.display="block";
                         $("#the_lights").fadeTo("slow",0.8);
                    });
                    $(".brightbox").mouseleave(function () {
                         document.getElementById("the_lights").style.display="block";
                         $("#the_lights").fadeTo("slow",0);
                    });
               });