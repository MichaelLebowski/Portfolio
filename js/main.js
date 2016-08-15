var windowWidth,
    navWidth;

$(window).load(function () {
    $('.vertical-animation').css('width', $('nav .navigation-list li:first-child').outerWidth());
    windowWidth = $(window).width(),
        navWidth = $('.home').outerWidth() + $('.navigation-list').outerWidth();
    if (windowWidth >= navWidth && !bowser.tablet && !bowser.mobile) {
        desktopView();
    } else if (windowWidth < navWidth || bowser.tablet && bowser.mobile) {
        mobileView();
    }
    $(window).resize(function () {
        windowWidth = $(window).width();
        if (windowWidth >= navWidth && || bowser.tablet && bowser.mobile!bowser.tablet && !bowser.mobile) {
            desktopView();
        } else if (windowWidth < navWidth || bowser.tablet && bowser.mobile) {
            mobileView();
        }
    });

});

function desktopView() {
    $('.navigation-list #mobile-nav').removeClass('active');
    $('#navigation').removeClass('mobile');
    $('.navigation-list ul').css('left', 0);
    windowWidth = $(window).width();
    $('.navigation-list #mobile-nav').css('right', 0);

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
        activeId = $('.navigation-list ul li.active').attr('id');
        activeElement = document.getElementById(activeId);
        activePosition = activeElement.offsetLeft;
        $('.navigation-list ul li.active').closest('.navigation-list').find('.vertical-animation').stop().animate({
            'width': width,
            'left': leftPosition
        }, 0, 'easeInOutCubic');

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
                }, 800, 'easeInOutCubic');
                $(this).click(function () {
                    if (!$(this).hasClass('active')) {
                        activeId = $(this).attr('id');
                        activeElement = document.getElementById(activeId);
                        activePosition = activeElement.offsetLeft;
                        $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                            'width': width,
                            'left': leftPosition
                        }, 800, 'easeInOutCubic');
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
                    }, 800, 'easeInOutCubic');
                }
            });

        $(window).scroll(function () {
            scrolling();
        });
        $('#navigation')
            .mouseover(function () {
                if ($(this).hasClass('scrolling')) {
                    $(this).removeClass('scrolling');
                }
            })
            .mouseleave(function () {
                if (!$(this).hasClass('scrolling') && $(window).scrollTop() > 0) {
                    $(this).addClass('scrolling');
                }
            })

        function scrolling() {
            if ($(window).scrollTop() > 0 && !$('#navigation').hasClass('mobile')) {
                $('#navigation').addClass('scrolling');
            } else {
                $('#navigation').removeClass('scrolling');
            }
        }
        scrolling();
    }
    navAnim();
}


function mobileView() {
    var width = $(window).width();
    $('.navigation-list #mobile-nav').css('right', 0);
    $('#navigation').addClass('mobile');
    $('#navigation').removeClass('scrolling');
    This = $('#mobile-nav');
    if (This.hasClass('active')) {
        This.next('ul').css('left', 0);
    } else {
        This.next('ul').css('left', width);
        This.next('ul').find('a').css('left', width + ((width / 100) * 20));
    }
    $(window).resize(function () {
        if ($('#navigation').hasClass('mobile')) {
            if (This.hasClass('active')) {
                This.next('ul').css('left', 0);
                $('.navigation-list #mobile-nav').css('right', width - 67);
            } else {
                This.next('ul').css('left', width);
                $('.navigation-list #mobile-nav').css('right', 0);
            }
        } else {
            This.next('ul').css('left', 0);
        }

    });
    $('.navigation-list ul').css('left', width);
    $('#mobile-nav').unbind().click(function () {
        windowWidth = $(window).width();
        if ($(this).hasClass('active')) {
            $(this).find('#nav-icon').removeClass('open');
            $(this).animate({
                'right': 0
            }, 800, 'easeInOutCubic');
            $(this).removeClass('active');
            $(this).next('ul').stop().animate({
                'left': width
            }, 800, 'easeInOutCubic', function () {
                $(this).next('ul').removeClass('active');
            });
            $(this).next('ul').find('a').each(function (i) {
                var speed = (i + 1) * 300
                $(this).stop().animate({
                    'left': windowWidth + ((windowWidth / 100) * 20)
                }, speed, 'easeInOutCubic');
            });
        } else if (!$(this).hasClass('active')) {
            $(this).find('#nav-icon').addClass('open');
            $(this).addClass('active');
            $(this).delay(120).animate({
                'right': windowWidth - 67
            }, 680, 'easeInOutCubic');
            $(this).next('ul').stop().animate({
                'left': '0'
            }, 800, 'easeInOutCubic', function () {
                $(this).next('ul').addClass('active');
            });
            $(this).next('ul').find('a').each(function (i) {
                var speed = 350;
                $(this).stop().delay((i + 1) * 120).animate({
                    'left': '0'
                }, speed, 'easeInOutCubic');
            });
        }
    });

    $('.navigation-list ul li')
        .unbind().mouseover(function () {})
        .unbind().mouseleave(function () {})
        .unbind().click(function () {

        });
    $('#navigation')
        .unbind().mouseover(function () {})
        .unbind().mouseleave(function () {});
    //$(window).unbind().scroll(function () {});
}
