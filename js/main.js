var el,
    width;

$(window).load(function () {
    el = $('nav .navigation-list li:first-child');
    width = el.outerWidth();
    $('.vertical-animation').css('width', width);
});

function navAnim() {
    var index,
        height,
        id,
        element,
        topPosition,
        activeId,
        activeElement,
        activePosition;
    $('.club-teaser-navigation ul li')
        .mouseover(function () {
            index = $(this).index();
            height = $(this).height();
            activeId = $('.club-teaser-navigation ul li.active').attr('id');
            activeElement = document.getElementById(activeId);
            activePosition = activeElement.offsetTop + ((height / 2) - 1);
            id = $(this).attr('id');
            element = document.getElementById(id);
            topPosition = element.offsetTop + ((height / 2) - 1);
            $(this).closest('.club-teaser-navigation').find('#animation').stop().animate({
                'top': topPosition,
            }, 'slow');
            $(this).click(function () {
                if (!$(this).hasClass('active')) {
                    activeId = $(this).attr('id');
                    activeElement = document.getElementById(activeId);
                    activePosition = activeElement.offsetTop + ((height / 2) - 1);
                    $('.club-teaser-navigation ul li').removeClass('active');
                    $(this).addClass('active');
                    $(this).closest('#club-teaser-slider').find('.club-teaser-content .images').removeClass('active');
                    $(this).closest('#club-teaser-slider').find('.club-teaser-content .images').eq(index).addClass('active');
                }
            });
        })
        .mouseleave(function () {
            $(this).closest('.club-teaser-navigation').find('#animation').stop().animate({
                'top': activePosition,
            }, 'slow');
        });

}
