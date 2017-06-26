(function($) {

    $(function() {

        function carouselThumbActivator(carouselSelector, rowSelector) {
            var carousel = $(carouselSelector),
                innerCarousel = $(carousel).find('.carousel-inner'),
                activeItem = $(innerCarousel).children('div.item.active'),
                activeIndex = $(innerCarousel).children('div.item').index(activeItem),
                activeNum = activeIndex,
                activeThumb = $(rowSelector).children().eq(activeNum),
                activeSibling = $(activeThumb).siblings('.selected');

            $(activeSibling).removeClass('selected');
            $(activeThumb).addClass('selected');

            // console.log('activeIndex : ' + activeIndex);
            // console.log('activeNum : ' + activeNum);
            // console.log('activeItem : ' + activeItem);
            // console.log('activeThumb : ' + activeThumb);
            // console.log('activeSibling : ' + activeSibling);
        }


        $('#front-slider').on('slid.bs.carousel', function () {
            carouselThumbActivator('#front-slider', '#indicators');
        });

        var d = new Date();
        var thisYear = d.getFullYear();
        $('#copyright-year').text(thisYear);
    });

    $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        var width = $(window).width();
        if (scroll >= 258){
            $('#main-nav').css("display", "none");
            $('#sticky-nav').addClass("sticky-display");
        }
        else{
            $('#main-nav').css("display", "block");
            $('#sticky-nav').removeClass("sticky-display");
        }

        if (width < 992){
            $('#main-nav').css("display", "block");
        }
    });
})(jQuery);
