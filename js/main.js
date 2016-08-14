var el,
    width;

$(window).load(function () {
    el = $('nav .navigation-list li:first-child');
    width = el.outerWidth();
    $('.vertical-animation').css('width', width);

    navAnim();
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
            console.log($(this).attr('class'));
            if (!$(this).hasClass('active')) {
                $(this).closest('.navigation-list').find('.vertical-animation').stop().animate({
                    'width': activeWith,
                    'left': activePosition,
                }, 'slow');
            }
        });

}
