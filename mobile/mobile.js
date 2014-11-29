$(document).ready(function(){
    var html1='<div class="col-md-3"></div>',
        html2='<div class="col-md-3"></div>',
        html3='<div class="input-group"><input class="form-control" type="text" name="s" value="" length="20" placeholder="Telefonnummer eingeben"><span class="input-group-btn"><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button></span></div>',
        html4 ='<div class="gads"></div>',  
        html5 ='<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation"><div class="container"><button type="button" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></button><button type="button" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button><button type="button" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></button></div></nav>';
    $( "body" ).prepend( html1 );
    $( "body" ).append( html2 );
    $("#layout").wrap( "<div class='col-md-6'></div>" );
    $("h1, h2, h3, h4, h5, span, div, p, a, form, ul, input").removeAttr("style");
    $("img").removeAttr("height");
    $("img").removeAttr("width");
    $("img").removeClass("size-thumbnail");
    $("#article > form").addClass("ni-search form-inline");
    $("#article > form").append( html3 );
    $("#article > h1, #article > p:nth-child(3), #article > h1 > span > strong, #article > p:nth-child(2), #article > hr, #article > table, #article > p:nth-child(6), #article > h3, #article > p:nth-child(10), #article > h5:nth-child(11), #article > h2, #article > p:nth-child(13), #article > div:nth-child(14), #article > h5:nth-child(15), #article > h5:nth-child(16), #article > p:nth-child(18), #article > div.onp-sociallocker-call, #text-59 > div.textwidget > div, #text-60 > div.textwidget > div, #footer-layout").addClass("hidden");
    $( ".col-md-6" ).prepend( html4 );
    $( ".col-md-6" ).prepend( '<div class="separator"></div>' );
    $( ".col-md-6" ).append( html4 );
    $( "body" ).append( html5 );
});

