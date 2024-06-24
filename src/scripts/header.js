import $ from 'jquery'


const headerBtn = $('.header__openMenu');
const menu =$('.header__menu');


$(function () {
    $(headerBtn).on('click', headerMenu)

})

function headerMenu() {

    headerBtn.toggleClass('header__openMenu_opened');
    menu.toggleClass('header__menu_opened');
    $('body').toggleClass('blockScroll');

}