import $ from 'jquery'

$(function () {
    const element = $('.call__img');
    const container = $('.call');
    $(document).on('scroll', () => paralaxScroll(container, element))

})

function paralaxScroll(containerDom, targetDom) {



    const elementOffset = containerDom.offset().top;
    const scrollTop = $(window).scrollTop() - 200;
    const windowHeight = $(window).height();
    const windowWidth = $(window).width();
    const scale = windowWidth > 800 ? 1.9 : 1.5;

    // Проверка видимости элемента
    if (elementOffset < (scrollTop + windowHeight) && elementOffset + containerDom.height() > scrollTop) {
        // Вычисление смещения по оси Y
        const offsetY = (scrollTop + windowHeight - elementOffset) / 2;
        targetDom.css('transform', ' translateY(-' + offsetY + 'px) scale(' + scale + ')');
    }

}