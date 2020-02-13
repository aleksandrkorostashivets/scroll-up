var button = $('#button-up');
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }
});
button.on('click', function() {
    $('body, html').animate({
        scrollTop: 0
    }, 800);
    return false;
});