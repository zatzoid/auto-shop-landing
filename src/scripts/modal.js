
import $ from 'jquery'
import sendCall from './api';


class Modal {
    constructor(modalSelector, openBtnSelector, dynamicContainer) {
        this._modalDom = $(modalSelector);
        this._openModalBtnSelector = openBtnSelector
        this._openModalBtns = document.querySelectorAll(openBtnSelector);
        this._dynamicContainer = $(dynamicContainer);
        this._selectModel = this._modalDom.find('#select-model')
        this._selectEquipment = this._modalDom.find('#select-equipment')
        this._selectEngine = this._modalDom.find('#select-engine');
        this._form = this._modalDom.find('form')
        this._selectDomContainers = this._modalDom.find('.modal__content-form-select').toArray()
        this._phoneNumberInput = this._modalDom.find('.modal__content-form-phone.input-text')
    }

    _openModal(evt) {
        evt.stopPropagation()
        this._modalDom.toggleClass('modal_open');
        const btn = $(evt.target)

        if (btn.attr('data-model')) {
            const initVal = btn.attr('data-model')
            this._selectModel.val(initVal)
            $(this._selectDomContainers[1]).css('max-height', '200px')
        }

        if (btn.attr('data-equipment')) {
            const initVal = btn.attr('data-equipment')
            this._selectEquipment.val(initVal)
            $(this._selectDomContainers[2]).css('max-height', '200px')
        }

        if (btn.attr('data-engine')) {
            const initVal = btn.attr('data-engine')
            this._selectEngine.val(initVal)
        }
    }

    _selectOnChange(index) {
        $(this._selectDomContainers[index]).css('max-height', '200px')
    }

    _closeModal(evt) {

        if ($(evt.target).attr('id') === 'modal' || $(evt.target).attr('id') === 'modalBtnClose') {
            this._modalDom.toggleClass('modal_open');
            this._form.trigger('reset');
            $(this._selectDomContainers[1]).css('max-height', '0')
            $(this._selectDomContainers[2]).css('max-height', '0')
        }

    }
    _submitForm(evt) {
        evt.preventDefault();
        console.log(this._phoneNumberInput);
        sendCall({ model: this._selectModel.val(), equipment: this._selectEquipment.val() , engine: this._selectEngine.val(), phoneNumber: $(this._phoneNumberInput).val() })
    }

    activateModal() {
        this._openModalBtns.forEach((el) => {
            $(el).on('click', (evt) => { this._openModal(evt) })
        })
        this._modalDom.on('click', (evt) => this._closeModal(evt))

        this._dynamicContainer.on('click', (evt) => {
            if (this._openModalBtnSelector.includes($(evt.target).attr('id'))) {
                this._openModal(evt)
            }
        })
        this._selectModel.on('change', (evt) => this._selectOnChange(1))
        this._selectEquipment.on('change', (evt) => this._selectOnChange(2))
        this._form.on('submit', (evt) => this._submitForm(evt))


    }

}

const modal = new Modal('.modal', '#modalBtn', '.selection__cards')
modal.activateModal()
