$(document).ready(function () {
    (function ($) {
        $(function () {
            $(".dropdown-button").dropdown();
            $('.slider').slider({full_width: true});
            $('.button-collapse').sideNav();
            $('.parallax').parallax();


        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
