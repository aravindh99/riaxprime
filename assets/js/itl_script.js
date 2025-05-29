jQuery(function($) {
    "use strict";

    // on scroll fixed navbar and back to top btn start
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });
    // on scroll fixed navbar and back to top btn end

    // revolution slider start
    $("#slider1").revolution({
        sliderType:"standard",
        sliderLayout:"auto",
        delay:9000,
        navigation: {
            arrows:{enable:true}              
        },            
        gridwidth:1170,
        gridheight:700        
    });
    // revolution slider end

    //animated counter start
    $('.count-box').appear(function(){
        var datacount = $(this).attr('data-count');
        $(this).find('.timer').delay(6000).countTo({
            from: 0,
            to: datacount,
            speed: 5000,
            refreshInterval: 50,
        });
    });
    //animated counter end
    
    // portfolio start
    $(window).on("load",function() {
        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-nav li').on("click", function() {
            $('.portfolio-nav li.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end

    // feedback start
    $('.feedback').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        //nav: true,
        smartSpeed: 700,
    });
    // feedback end

    // footer gallery start
    $('.f-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
    // footer gallery end

    // bootstrap accordion start
    $('#accordion1').collapse();
    // bootstrap accordion end

    // dropdown menu on mouse hover start
    $(".dropdown").hover(function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
    });
    // dropdown menu on mouse hover end

    //back to top button start
    $('#back-to-top').on('click', function(){
        $("html, body").animate({scrollTop: 0}, 500);
        return false;
    });
    //back to top button end
        
});

