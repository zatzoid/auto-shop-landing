import $ from 'jquery'

const container = $('.duration__content-timer');
const canvasDays = container.find('#durationDays')[0];
const countDays = container.find('#durationDaysCount')[0];

const canvasHours = container.find('#durationHours')[0];
const countHours = container.find('#durationHoursCount')[0];

const canvasMinutes = container.find('#durationMinutes')[0];
const countMinutes = container.find('#durationMinutesCount')[0];

const canvasSeconds = container.find('#durationSeconds')[0];
const countSeconds = container.find('#durationSecondsCount')[0];


class DurationCanvas {

    constructor(canvas) {
        this._canvas = canvas
        this._ctx = canvas.getContext('2d');
        this._width = canvas.width;
        this._height = canvas.height;
    }

    drawCircle(progress) {
        this._ctx.clearRect(0, 0, this._width, this._height); // Очистка холста перед рисованием

        // Рисуем полный круг, представляющий оставшийся прогресс
        this._ctx.beginPath();
        this._ctx.arc(
            this._width / 2,
            this._height / 2,
            Math.min(this._width, this._height) / 2.1,
            0,
            2 * Math.PI
        );
        this._ctx.lineWidth = 4; // Устанавливаем ширину границы в 4 пикселя
        this._ctx.strokeStyle = '#FF9549'; // Устанавливаем цвет границы в #FF9549
        this._ctx.stroke();

        // Рисуем дугу, представляющую текущий прогресс
        this._ctx.beginPath();
        this._ctx.arc(
            this._width / 2,
            this._height / 2,
            Math.min(this._width, this._height) / 2.1,
            -0.5 * Math.PI, // Начинаем сверху
            (2 * Math.PI * progress) - 0.5 * Math.PI // Угол в зависимости от прогресса
        );
        this._ctx.lineWidth = 4; // Устанавливаем ширину границы в 4 пикселя
        this._ctx.strokeStyle = '#939697'; // Устанавливаем цвет текущего прогресса в черный (или любой другой цвет)
        this._ctx.stroke();

    }


}

const durationDays = new DurationCanvas(canvasDays);
const durationHours = new DurationCanvas(canvasHours);
const durationMinutes = new DurationCanvas(canvasMinutes);
const durationSeconds = new DurationCanvas(canvasSeconds);

const millisInSecond = 1000
const millisInMinute = millisInSecond * 60;
const millisInHour = millisInMinute * 60;
const millisInDay = millisInHour * 24;

const targetDateSumm = (24 * 60 * 60 * 1000) + (1 * 60 * 1000) + (30 * 1000)
const targetCurrentDate = new Date().getTime();
const targetDateVal = targetCurrentDate + targetDateSumm
createCanas(targetDateVal);
setInterval(() => {
    createCanas(targetDateVal);
}, 1000);

function createCanas(targetDate){
    const currentDate = new Date().getTime();
    let differenceInMillis = targetDate - currentDate;
   

    const days = Math.floor(differenceInMillis / millisInDay);
   
    differenceInMillis -= days * millisInDay;
    
    const hours = Math.floor(differenceInMillis / millisInHour);
    differenceInMillis -= hours * millisInHour;
    
    const minutes = Math.floor(differenceInMillis / millisInMinute);
    differenceInMillis -= minutes * millisInMinute;
    
    const seconds = Math.floor(differenceInMillis / millisInSecond);
    
    
    
    
    $(countDays).text(days)
    $(countHours).text(hours)
    $(countMinutes).text(minutes)
    $(countSeconds).text(seconds)
    
    
    
    durationDays.drawCircle(1 - (days / 10));
    durationHours.drawCircle(1 - (hours / 23));
    durationMinutes.drawCircle(1 - (minutes / 59));
    durationSeconds.drawCircle(1 - (seconds / 59));
}





