import $ from 'jquery';
import t300red from '../assets/t300/red.png'
import t500grey from '../assets/t500/grey1.png'
import arrowBlackSvg from '../assets/ui/arrow-small-black.svg'
import arrowWhiteSvg from '../assets/ui/arrow-small-white.svg'

const itemlist = [
    {
        model: 't300',//t500
        img: t300red,
        equipment: 'full', //notFull
        engine: '2.0' //2.0  2.5  3.5
    },
    {
        model: 't300',
        img: t300red,
        equipment: 'full',
        engine: '2.5'
    },
    {
        model: 't300',
        img: t300red,
        equipment: 'full',
        engine: '3.5'
    },
    {
        model: 't300',
        img: t300red,
        equipment: 'notFull',
        engine: '2.0'
    },
    {
        model: 't300',
        img: t300red,
        equipment: 'notFull',
        engine: '2.5'
    },
    {
        model: 't300',
        img: t300red,
        equipment: 'notFull',
        engine: '3.5'
    },
    {
        model: 't500',
        img: t500grey, //t500
        equipment: 'full', //notFull
        engine: '2.0' //2.0  2.5  3.5
    },
    {
        model: 't500',
        img: t500grey,
        equipment: 'full',
        engine: '2.5'
    },
    {
        model: 't500',
        img: t500grey,
        equipment: 'full',
        engine: '3.5'
    },
    {
        model: 't500',
        img: t500grey,
        equipment: 'notFull',
        engine: '2.0'
    },
    {
        model: 't500',
        img: t500grey,
        equipment: 'notFull',
        engine: '2.5'
    },
    {
        model: 't500',
        img: t500grey,
        equipment: 'notFull',
        engine: '3.5'
    },

]


class Selection {
    constructor(section, itemList) {
        this._section = $(section);
        this._itemList = itemList;
        this._filtedItemList = this._itemList;
        this._selectArray = this._section.find('select').toArray()
        this._container = this._section.find('ul')
        this._currentFilter = {
            model: '', equipment: '', engine: ''
        }
        this._cardsShowMoreBtn = this._section.find('.selection__button')
    }
    _sortArray(evt) {
        this._container.css({ maxHeight: '5000px' })
        this._cardsShowMoreBtn.hide()
        this._currentFilter[evt.target.name] = evt.target.value
        this._filtedItemList = this._itemList.filter((el) => {
            let engine = true, model = true, equipment = true
            if (this._currentFilter.model !== '') {
                model = el.model === this._currentFilter.model
            }
            if (this._currentFilter.equipment !== '') {
                equipment = el.equipment === this._currentFilter.equipment
            }
            if (this._currentFilter.engine !== '') {
                engine = el.engine === this._currentFilter.engine
            }
            return engine && model && equipment;
        })
        
        this._renderCards()
    }
    _renderCards() {
        this._container.empty()
        const cards = this._filtedItemList.map((el) => {
            return this._createCard(el)
        })
        this._container.append(cards);
    }
    _createCard(object) {
        /*  {
            model: 't500',
            img: t500grey,
            equipment: 'notFull',
            engine: '2.0'
        } */
        const card = $(`<li class="selection__card">
                        <div class="selection__card-img">
                            <img class='selection__card-img-data' src="" alt="card">
                        </div>
                        <div class="selection__card-heading">
                            <h2 class="selection__card-heading-head"></h2>
                            <p class="selection__card-heading-body"></p>
                        </div>
                        <p class="selection__card-price">3 000 000 р</p>
                        <div class="selection__card-adv">
                            <p class="selection__card-adv-text">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 9H9.0125M1.5 5.5L1.5 11.0931C1.5 11.7046 1.5 12.0104 1.56908 12.2981C1.63032 12.5532 1.73133 12.797 1.8684 13.0207C2.023 13.273 2.23919 13.4892 2.67157 13.9216L12.2574 23.5074C13.7424 24.9924 14.485 25.7349 15.3412 26.0132C16.0943 26.2579 16.9056 26.2579 17.6588 26.0132C18.515 25.7349 19.2576 24.9924 20.7426 23.5074L23.5074 20.7426C24.9924 19.2576 25.7349 18.515 26.0132 17.6588C26.2579 16.9056 26.2579 16.0943 26.0132 15.3412C25.7349 14.485 24.9924 13.7424 23.5074 12.2574L13.9216 2.67157C13.4892 2.23919 13.273 2.023 13.0207 1.8684C12.797 1.73133 12.5532 1.63032 12.2981 1.56908C12.0104 1.5 11.7046 1.5 11.0931 1.5L5.5 1.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5ZM9.625 9C9.625 9.34518 9.34518 9.625 9 9.625C8.65482 9.625 8.375 9.34518 8.375 9C8.375 8.65482 8.65482 8.375 9 8.375C9.34518 8.375 9.625 8.65482 9.625 9Z"
                                        stroke="#FF9549" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Выгода по Trade-in до 450 000 ₽
                            </p>
                            <p class="selection__card-adv-text">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 9H9.0125M1.5 5.5L1.5 11.0931C1.5 11.7046 1.5 12.0104 1.56908 12.2981C1.63032 12.5532 1.73133 12.797 1.8684 13.0207C2.023 13.273 2.23919 13.4892 2.67157 13.9216L12.2574 23.5074C13.7424 24.9924 14.485 25.7349 15.3412 26.0132C16.0943 26.2579 16.9056 26.2579 17.6588 26.0132C18.515 25.7349 19.2576 24.9924 20.7426 23.5074L23.5074 20.7426C24.9924 19.2576 25.7349 18.515 26.0132 17.6588C26.2579 16.9056 26.2579 16.0943 26.0132 15.3412C25.7349 14.485 24.9924 13.7424 23.5074 12.2574L13.9216 2.67157C13.4892 2.23919 13.273 2.023 13.0207 1.8684C12.797 1.73133 12.5532 1.63032 12.2981 1.56908C12.0104 1.5 11.7046 1.5 11.0931 1.5L5.5 1.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5ZM9.625 9C9.625 9.34518 9.34518 9.625 9 9.625C8.65482 9.625 8.375 9.34518 8.375 9C8.375 8.65482 8.65482 8.375 9 8.375C9.34518 8.375 9.625 8.65482 9.625 9Z"
                                        stroke="#FF9549" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Выгода по Trade-in до 450 000 ₽
                            </p>
                        </div>
                        <div class="selection__btns">
                            <button class="selection__card-btn btn-orange open-modal-btn" >
                                Получить предложение
                                <img src="${arrowBlackSvg}" alt="arrow">
                            </button>
                            <button class="selection__card-btn btn-black open-modal-btn" >
                                Тест-драйв
                                <img src="${arrowWhiteSvg}" alt="arrow">
                            </button>
                        </div>
                    </li>`)
        card.find('.selection__card-img-data').attr('src', object.img);
        card.find('.selection__card-heading-head').text(object.model);
        card.find('.selection__card-heading-body').text(` Объем ${object.engine}л , Комплектация: ${object.equipment}`);
        card.find('.selection__card-btn').attr('data-model', object.model)
        card.find('.selection__card-btn').attr('data-equipment', object.equipment)
        card.find('.selection__card-btn').attr('data-engine', object.engine)

        return card
    }

    activateSection() {
        this._renderCards();
        this._selectArray.forEach((el) => {
            $(el).on('change', (evt) => this._sortArray(evt))
        })
        //gap 10
        const maxHeight = ($('.selection__card')[0].getBoundingClientRect().height * 3);
        this._container.css({ maxHeight: maxHeight })

        this._cardsShowMoreBtn.on('click', () => {
            this._container.css({ maxHeight: '5000px' })
            this._cardsShowMoreBtn.hide()
        })
    }
}

const selection = new Selection('.selection', itemlist);

selection.activateSection()

