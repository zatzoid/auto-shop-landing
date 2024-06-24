import $ from 'jquery';

import red300 from '../assets/t300/red.png'
import black300 from '../assets/t300/black.png'
import white300 from '../assets/t300/white.png'
import orange300 from '../assets/t300/orange.png'
import grey300 from '../assets/t300/grey.png'

import full3001 from '../assets/t300/preview1-full.png'
import full3002 from '../assets/t300/preview2-full.png'
import full3003 from '../assets/t300/preview3-full.png'
import full3004 from '../assets/t300/preview4-full.png'
import full3005 from '../assets/t300/preview5-full.png'

import grey1500 from '../assets/t500/grey1.png'
import grey2500 from '../assets/t500/grey2.png'
import grey3500 from '../assets/t500/grey3.png'
import black500 from '../assets/t500/black.png'


import full5001 from '../assets/t500/preview1-full.png'
import full5002 from '../assets/t500/preview2-full.png'
import full5003 from '../assets/t500/preview3-full.png'
import full5004 from '../assets/t500/preview4-full.png'
import full5005 from '../assets/t500/preview5-full.png'

const cars = {
    '300': {
        red: red300,
        black: black300,
        white: white300,
        grey: grey300,
        orange: orange300,
        preview1: full3001,
        preview2: full3002,
        preview3: full3003,
        preview4: full3004,
        preview5: full3005,
    },
    '500': {
        grey1: grey1500,
        black: black500,
        grey2: grey2500,
        grey3: grey3500,
        preview1: full5001,
        preview2: full5002,
        preview3: full5003,
        preview4: full5004,
        preview5: full5005,
    }
}

class PreviewSection {

    constructor(container) {
        this._container = $(container);
        this._img = this._container.find('.preview__img-data');
        this._colorsContainer = this._container.find('.preview__img-colors');
        this._imgGalary = this._container.find('.preview__gallery');
        this._overviewContainer = this._container.find('.preview__overview');
        this._imgGaleryContainer = this._container.find('.preview__galleryWrapper')


    }
    _changeImgColor(evt) {

        if (evt.target.tagName === 'INPUT') {
            const input = $(evt.target)
            const color = input.val()
            const typeOfCar = input.attr('name').replace('color', '');
            const carImg = cars[typeOfCar][color]
            this._img.attr('src', carImg)
        }
    }

    _openOverviewImg(evt) {

        if ($(evt.target).attr('class') === 'preview__overview-content-img') {
            return
        }

        if (evt.target.tagName === 'IMG') {
            const img = this._overviewContainer.find('img');
            const imgName = $(evt.target).attr('data-index');
            const typeOfCar = $(evt.target).attr('alt');
            img.attr('src', cars[typeOfCar][imgName])
        }
        this._overviewContainer.toggleClass('preview__overview_active');
    }
    
    _gallerySlider(evt){
        
    }

    activateSection() {
        this._colorsContainer.on('change', (evt) => this._changeImgColor(evt))
        this._imgGalary.on('click', (evt) => this._openOverviewImg(evt))
        this._overviewContainer.on('click', (evt) => this._openOverviewImg(evt))

    }


}

const section300 = new PreviewSection('#t500Preview');
const section500 = new PreviewSection('#t300Preview');

section300.activateSection()
section500.activateSection()