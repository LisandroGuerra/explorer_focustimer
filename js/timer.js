export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls
}) {

    function displayTimerUpdate(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }


    function resetTimer() {
        clearTimeout(timerTimeout)
        displayTimerUpdate(minutes, 0)
    }


    function countdown() {
        timerTimeout = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            //displayTimerUpdate(minutes, 0)

            if (minutes <= 0) {
                if (seconds <= 0) {
                    resetControls()
                    return
                }
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            displayTimerUpdate(minutes, String(seconds - 1))

            countdown()
        }, 1000)

    }



    return { countdown, displayTimerUpdate, resetTimer }

}
