import { resetControls } from "./controls.js"
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeout

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls
})


buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    timer.countdown()
})

buttonPause.addEventListener('click', function () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeout)
})

buttonSet.addEventListener('click', function () {
    let newMinutes = prompt('Quantos minutos? ')
    if (!newMinutes) {
        timer.resetTimer()
        return
    }
    minutes = newMinutes
    timer.displayTimerUpdate(minutes, 0)
})

buttonStop.addEventListener('click', function () {
    timer.resetControls()
    timer.resetTimer()
})

buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})