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

hshtg = /#([a-zA-Z0-9_]+)/g;

function linkHashtags(text) {
    return text.replace(
    hshtg,
    '<span class="hshtg">#$1</span>'
    );
}

$(document).ready(function(){
    $('.comment-box > p').each(function() {
        $(this).html(linkHashtags($(this).html()));
    });
});
$.fn.lastWord = function() {
      var text = this.text().trim().split(" ");
      var last = text.pop();
      this.html(text.join(" ") + (text.length > 0 ? " <span class='comnum'>" + last + "</span>" : last));
};