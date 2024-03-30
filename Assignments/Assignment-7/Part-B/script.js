$(document).ready(function () {
    // variables declaration
    let timeelapsed;
    let startingTime = 0;
    let running = false;
    let dateSelector = document.getElementById("dateSelector");
    let timer = document.getElementById("timer");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");
    // set date picker to current date
    dateSelector.valueAsDate = new Date();
    dateSelector.max = new Date().toISOString().split("T")[0];
    // async function to update timer and promise
    async function updateTimer() {
        return new Promise((resolve) => {
            let currentTime = new Date().getTime();
            let elapsedTime = currentTime - startingTime;
            let time = new Date(elapsedTime);
            timer.innerHTML = time.toISOString().substr(11, 8);
            resolve();
        });
    }
    // async function to start timer
    async function startTimer() {
        if (!running) {
            startingTime = new Date().getTime();
            timeelapsed = setInterval(async () => {
                await updateTimer();
            }, 10);
            running = true;
        }
    }
    // function to stop timer
    function stopTimer() {
        if (running) {
            clearInterval(timeelapsed);
            running = false;
        }
    }
    // function to reset timer
    function resetTimer() {
        stopTimer();
        timer.innerHTML = "00:00:00";
    }
    // event listeners
    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);
});