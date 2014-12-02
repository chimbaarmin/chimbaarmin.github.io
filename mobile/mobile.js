$(document).ready(function() {
    setTimeout(function() {
        $(".liaa").fadeOut("slow", function() {
            $(".liaa").remove();
            $(".ni-search").fadeIn( 1000, function() {
            $(".lia").fadeIn( 1000, function() {
            $(".lib").fadeIn( 1000, function() {
            $(".lic").fadeIn( 1000 );
                    });
                });
            });
        });
    }, 800);                      
});

$(document).ready(function() {
    function fadeLI(elem) { elem.fadeIn(800, function() { fadeLI($(this).next()); }); }
    fadeLI($("#comments li:first"));
});