var el,
    width;

$(window).load(function () {
    el = $('nav .navigation-list li:first-of-type');
    width = el.outerWidth();
    el.css('width', width);
    console.log(el);
    console.log(width);
});

function navAnim() {

}
