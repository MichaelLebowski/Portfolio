var windowWidth,
    navWidth;

$(function () {
    windowWidth = $(window).width(),
        navWidth = $('.home').outerWidth() + $('.navigation-list').outerWidth();
    if (windowWidth >= navWidth && !bowser.tablet && !bowser.mobile) {
        $('main').removeClass('mobile');
    } else if (windowWidth < navWidth || bowser.tablet && bowser.mobile) {
        $('main').addClass('mobile');
    }
});

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
        if (windowWidth >= navWidth && !bowser.tablet && !bowser.mobile) {
            desktopView();
        } else if (windowWidth < navWidth || bowser.tablet && bowser.mobile) {
            mobileView();
        }
    });

});

function desktopView() {
    $('#mobile-nav').removeClass('active');
    $('#nav-icon').removeClass('open');
    $('main').removeClass('mobile');
    $('.navigation-list').css('left', 0);
    windowWidth = $(window).width();
    $('#mobile-nav').css('right', 0);


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

        activeWith = $('.navigation-list ul li.active').width();
        activeId = $('.navigation-list ul li.active').attr('id');
        activeElement = document.getElementById(activeId);
        activePosition = activeElement.offsetLeft;
        $('.navigation-list ul li.active').closest('.navigation-list').find('.vertical-animation').stop().animate({
            width: activeWith,
            left: activePosition
        }, 0, 'easeInOutCubic');

        function hover() {
            $('.navigation-list ul li')
                .mouseover(function () {
                    console.log('hover');
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
                        width: width,
                        left: leftPosition
                    }, 800, 'easeInOutCubic');
                    $(this).click(function () {
                        if (!$(this).hasClass('active')) {
                            activeId = $(this).attr('id');
                            activeElement = document.getElementById(activeId);
                            activePosition = activeElement.offsetLeft;
                            $(this).closest('.navigation-list').find('.vertical-animation').animate({
                                width: width,
                                left: leftPosition
                            }, 800, 'easeInOutCubic');
                            $('.navigation-list ul li').removeClass('active');
                            $(this).addClass('active');
                        }
                    });
                })
                .mouseleave(function () {
                    if (!$(this).hasClass('active')) {
                        $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                            width: activeWith,
                            left: activePosition,
                        }, 800, 'easeInOutCubic');
                    }
                });
        }
        hover();

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

        $(window).blur(function () {
            console.log('sliding back');
            activeId = $('.navigation-list ul li.active').attr('id');
            activeElement = document.getElementById(activeId);
            activePosition = activeElement.offsetLeft;
            activeWith = $('.navigation-list ul li.active').width();
            $('.navigation-list').find('.vertical-animation').stop().animate({
                width: activeWith,
                left: activePosition,
            }, 800, 'easeInOutCubic');
        });
        $(window).focus(function () {
            $('.navigation-list ul li').focus(function () {
                hover();
            });
        });
    }
    navAnim();
}


function mobileView() {
    windowWidth = $(window).width();
    $('main').addClass('mobile');
    $('#navigation').removeClass('scrolling');
    This = $('#mobile-nav');
    if (This.hasClass('active')) {
        This.next('.navigation-list').css('left', 0);
    } else {
        This.css('right', 0);
        This.next('.navigation-list').css('left', windowWidth);
        This.next('.navigation-list').find('a').css('left', windowWidth + ((windowWidth / 100) * 20));
    }
    $(window).resize(function () {
        windowWidth = $(window).width();
        if ($('main').hasClass('mobile')) {
            if (This.hasClass('active')) {
                This.next('.navigation-list').css('left', 0);
                This.css('right', 15);
            } else {
                This.next('.navigation-list').css('left', windowWidth);
                This.css('right', 0);
            }
        } else {
            This.next('.navigation-list').css('left', 0);
        }

    });
    $('.navigation-list').css('left', windowWidth);
    $('#mobile-nav').unbind().click(function () {
        windowWidth = $(window).width();
        if ($(this).hasClass('active')) {
            $(this).find('#nav-icon').removeClass('open');
            $(this).animate({
                right: 0
            }, 800, 'easeInOutCubic');
            $(this).removeClass('active');
            $(this).next('.navigation-list').stop().animate({
                left: windowWidth
            }, 800, 'easeInOutCubic', function () {
                $(this).next('.navigation-list').removeClass('active');
            });
            $(this).next('.navigation-list').find('a').each(function (i) {
                var speed = (i + 1) * 300
                $(this).stop().animate({
                    left: windowWidth + ((windowWidth / 100) * 20),
                    opacity: 0
                }, speed, 'easeInOutCubic');
            });
        } else if (!$(this).hasClass('active')) {
            $(this).find('#nav-icon').addClass('open');
            $(this).addClass('active');
            $(this).delay(30).animate({
                right: 15
            }, 800, 'easeInOutCubic');
            $(this).next('.navigation-list').stop().animate({
                left: '0'
            }, 800, 'easeInOutCubic', function () {
                $(this).next('.navigation-list').addClass('active');
            });
            $(this).next('.navigation-list').find('a').each(function (i) {
                var speed = 400;
                $(this).stop().delay((i + 1) * 120).animate({
                    left: 0,
                    opacity: 1
                }, speed, 'easeInOutCubic');
            });
        }
    });

    $('.navigation-list ul li')
        .unbind().mouseover(function () {})
        .unbind().mouseleave(function () {})
        .unbind().click(function () {
            $('.navigation-list ul li').removeClass('active');
            $(this).addClass('active');
        });
    $('#navigation')
        .unbind().mouseover(function () {})
        .unbind().mouseleave(function () {});
}
