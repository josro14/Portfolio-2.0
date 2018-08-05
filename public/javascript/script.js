$('#about').click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top},
        'slow');
});

$('#folio').click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$('#contact').click(function() {
    $('html,body').animate({
        scrollTop: $("#contactMe").offset().top},
        'slow');
});