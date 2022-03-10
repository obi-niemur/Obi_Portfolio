$(document).ready(() => {

    $('.project-header').click(function() {
        $('.project-desc').animate({
            width: "toggle",

        }, 1000);
    });




    $('.project-header1').click(function() {
        $('.project-desc1').animate({
            width: "toggle",

        }, 1000);
    });

    // $('.project-header').on('click', event => {
    //     $(event + '.project-desc').addClass('hideDesc');
    // });

});