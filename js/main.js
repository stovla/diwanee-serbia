$(document).ready(function() {
    $(function() {
        var topoffset = 70; //variable for menu height
        //Use smooth scrolling when clicking on navigation
        $('.nav a').click(function() {
            if (location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - topoffset
                    }, 500);
                    return false;
                } //target.length
            } //click function
        }); //smooth scrolling

        // toggle navigation menu
        $('.nav-menu').click(function(e) {
            e.preventDefault();
            // $('.nav').fadeIn();
            $('.nav').slideToggle();
            $('.nav li:last-child').toggle();
        });
        // toggle navigation when you select something
        $('.nav li a').click(function(e) {
            e.preventDefault();
            if ($(window).width() < 960) {
                $('.nav').slideToggle();
                $('.nav li:last-child').toggle();
            }
        });
    });
});