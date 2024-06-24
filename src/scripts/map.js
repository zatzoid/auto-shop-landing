import $ from 'jquery'



const map = $('.map__content-container');
const mapIframe = $('.map__content-container-iframe');
const mapImg = $('.map__content-container-img');

mapImg.on('click',()=>{
    mapImg.css('display', 'none');
    mapIframe.css('display', 'block');
    mapIframe.attr('src', 'https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.620941%2C55.753575&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIwNjMzMDI1EjnQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JrRgNCw0YHQvdCw0Y8g0L_Qu9C-0YnQsNC00YwiCg0dfBZCFaIDX0I%2C&z=17.55')
    map.addClass('map__content-container_active');
})