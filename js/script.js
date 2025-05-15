$(document).ready(function() {
    // Initialize superslides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    // Initialize Typed.js
    var typed = new Typed('.typed', {
        strings: [
            'Software Developer',
            'Web Developer',
            'Full-stack Engineer',
            'Problem Solver'
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        loop: true
    });
    
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 5,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        },
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    
    // Play/stop controls for carousel (if needed)
    $('.play').on('click', function(){
        $('.owl-carousel').trigger('play.owl.autoplay', [1000]);
    });
    
    $('.stop').on('click', function(){
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    // Navigation scroll behavior
    $('.nav-link').on('click', function(e) {
        if(this.hash !== '') {
            e.preventDefault();
            
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    
    // Sticky navigation
    const nav = $("#navigation");
    
    $(window).on("scroll", function() {
        var body = $("body");
        if($(window).scrollTop() >= $(".overlay").height()) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    });
    
    // Add active class to navigation links based on scroll position
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        
        // Get all sections
        $('section').each(function() {
            let target = $(this).offset().top - 100;
            let id = $(this).attr('id');
            
            // If current scroll position is greater than the target section's top offset
            if(scrollPosition >= target) {
                // Remove active class from all navigation links
                $('.navbar-nav .nav-link').removeClass('active');
                
                // Add active class to the navigation link corresponding to the current section
                $(`.navbar-nav .nav-link[href="#${id}"]`).addClass('active');
            }
        });
    });
});