import Countdown from './countdown.js';

const tempoParaOACJ = new Countdown('25 January 2023 23:59:59 GMT-0300');

const timeForAcj = document.querySelector(".timeForAcj")

const daysForAcj = document.createElement("div")
daysForAcj.setAttribute("class", "daysForAcj")
timeForAcj.appendChild(daysForAcj)
setInterval(() => {
  daysForAcj.innerHTML = tempoParaOACJ.total.days
}, 1000)

const hoursForAcj = document.createElement("div")
hoursForAcj.setAttribute("class", "hoursForAcj")
timeForAcj.appendChild(hoursForAcj)
setInterval(() => {
  hoursForAcj.innerHTML = tempoParaOACJ.total.hours
}, 1000)

const minutesForAcj = document.createElement("div")
minutesForAcj.setAttribute("class", "minutesForAcj")
timeForAcj.appendChild(minutesForAcj)
setInterval(() => {
  minutesForAcj.innerHTML = tempoParaOACJ.total.minutes
}, 1000)

const secondsForAcj = document.createElement("div")
secondsForAcj.setAttribute("class", "secondsForAcj")
timeForAcj.appendChild(secondsForAcj)
setInterval(() => {
  secondsForAcj.innerHTML = tempoParaOACJ.total.seconds
}, 1000)
