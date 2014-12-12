/* Nummer-Index.De Unwrapper v1.0 */

$(document).ready(function(){
    $("div.outer").wrap('<div class="col-md-6"></div>');
    $("div.col-md-6").wrap('<div class="row"></div>');
    $("div.row").wrap('<div class="container-fluid"></div>');
    $("div.row").prepend('<div class="col-md-3"></div>');
    $("div.row").append('<div class="col-md-3"></div>');
});


