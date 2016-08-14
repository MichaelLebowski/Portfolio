var windowWidth,
    navWidth;

$(window).load(function () {
    $('.vertical-animation').css('width', $('nav .navigation-list li:first-child').outerWidth());
    windowWidth = $(window).width(),
        navWidth = $('.home').outerWidth() + $('.navigation-list').outerWidth();
    if (windowWidth >= navWidth) {
        desktopView();
    } else {
        mobileView();
    }
    $(window).resize(function () {
        windowWidth = $(window).width();
        if (windowWidth >= navWidth) {
            desktopView();
        } else {
            mobileView();
        }
    });

});

function desktopView() {
    $('.navigation-list #mobile-nav').removeClass('active');
    $('#navigation').removeClass('mobile');
    $('.navigation-list ul').css('left', 0);

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
    }
    navAnim();
}


function mobileView() {
    var width = $(window).width();
    $('#navigation').addClass('mobile');
    This = $('#mobile-nav');
    if (This.hasClass('active')) {
        This.next('ul').css('left', 0);
    } else {
        This.next('ul').css('left', width);
        This.next('ul').find('a').css('left', width);
    }
    $(window).resize(function () {
        if ($('#navigation').hasClass('mobile')) {
            if (This.hasClass('active')) {
                This.next('ul').css('left', 0);
            } else {
                This.next('ul').css('left', width);
            }
        } else {
            This.next('ul').css('left', 0);
        }

    });
    $('.navigation-list ul').css('left', width);
    $('#mobile-nav').unbind().click(function () {
        windowWidth = $(window).width();
        if ($(this).hasClass('active')) {
            $(this).animate({
                'left': windowWidth - 42
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
                    'left': windowWidth
                }, speed, 'easeInOutCubic');
            });
        } else if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).delay(120).animate({
                'left': 15
            }, 680, 'easeInOutCubic');
            $(this).next('ul').stop().animate({
                'left': '0'
            }, 800, 'easeInOutCubic', function () {
                $(this).next('ul').addClass('active');
            });
            $(this).next('ul').find('a').each(function (i) {
                var speed = (i + 1) * 200
                $(this).stop().animate({
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
}
