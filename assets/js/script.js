import Countdown from './countdown.js';

const tempoParaOACJ = new Countdown('25 January 2023 23:59:59 GMT-0300');

const timeForAcj = document.querySelector(".timeForAcj")

const numberDaysForAcj = document.createElement("div")
numberDaysForAcj.setAttribute("class", "numberDaysForAcj")
timeForAcj.appendChild(numberDaysForAcj)
setInterval(() => {
  numberDaysForAcj.innerHTML = tempoParaOACJ.total.days
}, 1000)

const daysForAcj = document.createElement("div")
daysForAcj.setAttribute("class", "daysForAcj")
timeForAcj.appendChild(daysForAcj)
daysForAcj.innerHTML = "Dias"

const numberHoursForAcj = document.createElement("div")
numberHoursForAcj.setAttribute("class", "numberHoursForAcj")
timeForAcj.appendChild(numberHoursForAcj)
setInterval(() => {
  numberHoursForAcj.innerHTML = tempoParaOACJ.total.hours
}, 1000)

const hoursForAcj = document.createElement("div")
hoursForAcj.setAttribute("class", "hoursForAcj")
timeForAcj.appendChild(hoursForAcj)
hoursForAcj.innerHTML = "Horas"

const numberMinutesForAcj = document.createElement("div")
numberMinutesForAcj.setAttribute("class", "numberMinutesForAcj")
timeForAcj.appendChild(numberMinutesForAcj)
setInterval(() => {
  numberMinutesForAcj.innerHTML = tempoParaOACJ.total.minutes
}, 1000)

const minutesForAcj = document.createElement("div")
minutesForAcj.setAttribute("class", "minutesForAcj")
timeForAcj.appendChild(minutesForAcj)
minutesForAcj.innerHTML = "Minutos"

const numberSecondsForAcj = document.createElement("div")
numberSecondsForAcj.setAttribute("class", "numberSecondsForAcj")
timeForAcj.appendChild(numberSecondsForAcj)
setInterval(() => {
  numberSecondsForAcj.innerHTML = tempoParaOACJ.total.seconds
}, 1000)

const secondsForAcj = document.createElement("div")
secondsForAcj.setAttribute("class", "secondsForAcj")
timeForAcj.appendChild(secondsForAcj)
secondsForAcj.innerHTML = "Segundos"
