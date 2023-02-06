export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {

    let minutes = Number(minutesDisplay.textContent)
    let timerTimeout

    function displayUpdate(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }


    function minutesUpdate(newMinutes) {
        minutes = newMinutes
    }


    function hold() {
        clearTimeout(timerTimeout)
    }


    function reset() {
        clearTimeout(timerTimeout)
        displayUpdate(minutes, 0)
    }


    function countdown() {
        timerTimeout = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            //displayUpdate(minutes, 0)

            if (isFinished) {
                resetControls()
                displayUpdate()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            displayUpdate(minutes, String(seconds - 1))

            countdown()
        }, 1000)

    }



    return { displayUpdate, minutesUpdate, hold, countdown, reset }

}
