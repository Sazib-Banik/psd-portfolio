jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // progress-bar js
    $('.sub').rProgressbar({
        fillBackgroundColor: '#1abc9c'
    });

    $('.graphic').rProgressbar({
        percentage: 90
    });
    $('.photoshop').rProgressbar({
        percentage: 72
    });
    $('.illustration').rProgressbar({
        percentage: 60
    });
    $('.figma').rProgressbar({
        percentage: 64
    });



    $('.web').rProgressbar({
        percentage: 90
    });
    $('.development').rProgressbar({
        percentage: 72
    });
    $('.data').rProgressbar({
        percentage: 60
    });
    $('.machine').rProgressbar({
        percentage: 84
    });


    // owl-carousel start
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots:true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


     












});