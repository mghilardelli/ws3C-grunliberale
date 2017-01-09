$(document).ready(function () {
    (function ($) {
        $(function () {
            $('.slider').slider({full_width: true});
            $('.button-collapse').sideNav({

                menuWidth: 300, // Default is 240

                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true // Choose whether you can drag to open on touch screens
                }
            );
            $('.parallax').parallax();
            Materialize.updateTextFields();


        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
