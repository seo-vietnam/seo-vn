/**
 * Created by enqtran on 01/07/2018.
 */
jQuery(document).ready(function($) {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 100
    });

    // fancybox
    $(".fancybox").fancybox();

    jQuery("[data-fancybox]").fancybox({
        // Should display toolbars
        infobar: true,
        buttons: true,

        // What buttons should appear in the toolbar
        slideShow: true,
        fullScreen: true,
        thumbs: true,
        closeBtn: true,
        // Enable gestures (tap, zoom, pan and pinch)
        touch: true,

        // Enable keyboard navigation
        keyboard: true,
        // Close when clicked outside of the content
        closeClickOutside: true,
    });

    // Add smooth scrolling on all links inside the navbar
    $(".scroll-top, .menu-top li a, .scroll a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });

    if ($(window).width() > 990) {
        wow = new WOW({
            animateClass: 'animated'
        });
        wow.init();

        jQuery(document).ready(function(a) {
            var b = 50,
                c = 1200,
                d = 900,
                e = a(".navbar__top");
            a(window).scroll(function() {
                a(this).scrollTop() > b ? e.addClass("bg_top_nav") : e.removeClass("bg_top_nav"), a(this).scrollTop() > c && e.addClass("bg_top_nav")
            }), e.on("click", function(b) {
                // console.log('click');
            })
        })
    }


    // accordion
    $("#accordion .panel-title a").click(function(event) {
        $("#accordion2 .panel-title a").attr('aria-expanded', false);
        $("#accordion2 .panel-collapse").removeClass('in').addClass('collapse');
    });

    $("#accordion2 .panel-title a").click(function(event) {
        $("#accordion .panel-title a").attr('aria-expanded', false);
        $("#accordion .panel-collapse").removeClass('in').addClass('collapse');
    });

    var fb_share = "https://www.facebook.com/sharer/sharer.php?u=";
    var url_curent = window.location.href;

    $(".fb-btn_data").data('href', url_curent);
    $(".fb-btn_data a").attr('href', fb_share+url_curent);

    $(".fb-send").attr('href', url_curent);
    $(".fb-send a").attr('href', fb_share+url_curent);

    $(".btn_linkedin").attr('href', "https://www.linkedin.com/shareArticle?mini=true&url="+url_curent);

});