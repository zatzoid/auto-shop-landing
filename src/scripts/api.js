import $ from 'jquery'


export default function sendCall(data) {
    const { phoneNumber, model , equipment , engine  } = data;
    const message = `скамить по этому номеру: ${phoneNumber}. \nОпции: \nмодель-${model || 'любая'} \nэквип-${equipment  || 'любая'} \nдвигатель-${engine  || 'любая'}`
    alert(message)
}

$('.call__content-form').on('submit', ()=>{
   
    sendCall({phoneNumber:  $('.call__content-form-input.input-text').val()})
})