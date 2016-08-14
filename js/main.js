var el,
    width;

$(window).load(function () {
    el = $('nav .navigation-list li:first-child');
    width = el.outerWidth();
    $('.vertical-animation').css('width', width);
    navAnim();
});

$(function () {
    mobileView();
});

function navAnim() {
    var index,
        height,
        id,
        element,
        leftPosition,
        activeId,
        activeElement,
        activePosition,
        activeWith;
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

function mobileView() {
    var windowWidth,
        navWidth = $('.home').outerWidth() + $('.navigation-list').outerWidth();

    function mobileStyle() {
        windowWidth = $(window).width();
        if (windowWidth < navWidth) {
            $('#navigation').addClass('mobile');
        } else {
            $('#navigation').removeClass('mobile');
        }
    }
    mobileStyle();
    $(window).resize(function () {
        mobileStyle();
    });

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
                }
            }
            $(this).next('ul').addClass('active');
        }
    });
}
