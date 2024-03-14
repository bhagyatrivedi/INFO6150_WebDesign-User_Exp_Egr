$(document).ready(function () {

    let timePassed;
    let startTime = 0;
    let flag = false;
    let datePicker = document.getElementById("dateSelector");
    let timer = document.getElementById("timer");
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let resetButton = document.getElementById("resetBtn");
  
    datePicker.valueAsDate = new Date();
    datePicker.max = new Date().toISOString().split("T")[0];
    
    async function timeUpdate() {
        return new Promise((resolve) => {
            let currentTime = new Date().getTime();
            let timeLapsed = currentTime - startTime;
            let time = new Date(timeLapsed);
            timer.innerHTML = time.toISOString().substr(11, 8);
            resolve();
        });
    }

    async function startTimer() {
        if (!flag) {
            startTime = new Date().getTime();
            timePassed = setInterval(async () => {
                await timeUpdate();
            }, 10);
            flag = true;
        }
    }

    function stopTimer() {
        if (flag) {
            clearInterval(timePassed);
            flag = false;
        }
    }

    function resetTimer() {
        stopTimer();
        timer.innerHTML = "00:00:00";
    }

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);
});