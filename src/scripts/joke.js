import $ from 'jquery'



const hoverEl = $('.offer__content-woman')
const contentContainer = $('.offer__content-joke')

hoverEl.hover(()=>{
    contentContainer.toggleClass('offer__content-joke-active')
})