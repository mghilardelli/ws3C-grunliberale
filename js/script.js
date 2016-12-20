$(document).ready(function () {
    (function ($) {
        $(function () {
            $(".dropdown-button").dropdown({ hover: true });
            $('.slider').slider({full_width: true});
            $('.button-collapse').sideNav({

                menuWidth: 300, // Default is 240
                    edge: 'right', // Choose the horizontal origin
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true // Choose whether you can drag to open on touch screens
                }
            );
            $('.parallax').parallax();
            Materialize.updateTextFields();
            $('.social-button').sideNav({

                    menuWidth: 300, // Default is 240
                    edge: 'right', // Choose the horizontal origin
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true // Choose whether you can drag to open on touch screens
                }
            );


        }); // end of document ready
    })(jQuery); // end of jQuery name space
});
