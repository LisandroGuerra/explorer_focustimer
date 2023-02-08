import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    buttonDarkOn,
    buttonDarkOff,
    rootElement
} from "./elements.js"


export default function({controls,timer,sound}){

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
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
        sound.pressButton()
    })

    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })

    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
    })

    buttonDarkOn.addEventListener('click', function () {
        buttonDarkOn.classList.add('hide')
        buttonDarkOff.classList.remove('hide')
        rootElement.classList.remove('dark')
    })

    buttonDarkOff.addEventListener('click', function () {
        buttonDarkOff.classList.add('hide')
        buttonDarkOn.classList.remove('hide')
        rootElement.classList.add('dark')
    })
}