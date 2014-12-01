$(document).ready(function() {
    setTimeout(function() {
        $(".liaa").fadeOut("slow", function() {
            $(".liaa").remove();
            $(".ni-search").fadeIn("slow");
            $(".lia").fadeIn("slow");
            $(".lib").fadeIn("slow");
            $(".lic").fadeIn("slow");
        });
    }, 800); 
                        
});