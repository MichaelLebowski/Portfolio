$(window).load(function () {
    var view;
    $('.vertical-animation').css('width', $('nav .navigation-list li:first-child').outerWidth());
    var windowWidth = $(window).width(),
        navWidth = $('.home').outerWidth() + $('.navigation-list').outerWidth();
    if (windowWidth >= navWidth) {
        view = 'desktop';
    } else {
        view = 'mobile';
    }
    $(window).resize(function () {
        windowWidth = $(window).width();
        if (windowWidth >= navWidth) {
            view = 'desktop';
        } else {
            view = 'mobile';
        }
    });

});

function setOptions() {
    if (view === 'desktop') {
        desktopView();
    } else if (view === 'mobile') {
        mobileView();
    }

    function desktopView() {
        $('#navigation').removeClass('mobile');

        function navAnim() {

            var width,
                index,
                height,
                id,
                element,
                leftPosition,
                activeId,
                activeElement,
                activePosition,
                activeWith;

            width = $('.navigation-list ul li.active').width();
            activeWith = $('.navigation-list ul li.active').width();
            $('.navigation-list ul li.active').closest('.navigation-list').find('.vertical-animation').stop().animate({
                'width': width
            }, 0);

            $('.navigation-list ul li')
                .mouseover(function () {
                    index = $(this).index();
                    width = $(this).width();
                    activeId = $('.navigation-list ul li.active').attr('id');
                    activeElement = document.getElementById(activeId);
                    activePosition = activeElement.offsetLeft;
                    activeWith = $('.navigation-list ul li.active').width();
                    id = $(this).attr('id');
                    element = document.getElementById(id);
                    leftPosition = element.offsetLeft;
                    $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                        'width': width,
                        'left': leftPosition
                    }, 'slow');
                    $(this).click(function () {
                        if (!$(this).hasClass('active')) {
                            activeId = $(this).attr('id');
                            activeElement = document.getElementById(activeId);
                            activePosition = activeElement.offsetLeft;
                            $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                                'width': width,
                                'left': leftPosition
                            }, 'slow');
                            $('.navigation-list ul li').removeClass('active');
                            $(this).addClass('active');
                        }
                    });
                })
                .mouseleave(function () {
                    if (!$(this).hasClass('active')) {
                        $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                            'width': activeWith,
                            'left': activePosition,
                        }, 'slow');
                    }
                });
        }
        navAnim();
    }


    function mobileView() {
        $('#navigation').addClass('mobile');
        $('#mobile-nav').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('ul').stop().animate({
                    'left': '100%'
                }, function () {
                    $(this).next('ul').removeClass('active');

                });
            } else {
                $(this).addClass('active');
                $(this).next('ul').stop().animate({
                    'left': '0'
                }, function () {
                    $(this).next('ul').addClass('active');
                });
            }
        });
    }
}
