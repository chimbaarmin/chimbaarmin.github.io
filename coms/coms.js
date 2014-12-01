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


