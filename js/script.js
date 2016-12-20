$(document).ready(function () {
    (function ($) {
        $(function () {
            $(".dropdown-button").dropdown({ hover: true });
            $('.slider').slider({full_width: true});
            $('.button-collapse').sideNav();
            $('.parallax').parallax();
            $('.fb-page').sideNav({
                    menuWidth: 300, // Default is 240
                    edge: 'left', // Choose the horizontal origin
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true // Choose whether you can drag to open on touch screens
                }
            );


        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
