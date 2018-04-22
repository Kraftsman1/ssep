$(function() {

    $('#menu-button').click(function() {
        $('body').toggleClass('open');
        $('#menu').toggleClass('open');
        $('#menu-button').toggleClass('open');
    });

});