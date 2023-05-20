$( document ).ready(function() {
    $('.menu-list').hide();
    $('.close').hide();

    $('.open').click(function (event) {
        $('.menu-list').show();
        $('.open').hide();
        $('.close').show();
    });

    $('.close').click(function (event) {
        $('.menu-list').hide();
        $('.close').hide();
        $('.open').show();
    });
});