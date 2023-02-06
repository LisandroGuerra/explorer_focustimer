import Controls from "./controls.js"
import Timer from "./timer.js"
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"


const controls = Controls(
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
)

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})


buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
})

buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.minutesUpdate(newMinutes)
    timer.displayUpdate(newMinutes, 0)
})

buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
})

buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})