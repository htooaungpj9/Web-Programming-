
let startButton = document.getElementById('start-btn');
let pauseButton = document.getElementById('pause-btn');
let stopButton = document.getElementById('stop-btn');
let timeDisplay = document.getElementById('time-display');
let currentInstruction = document.getElementById('current-instruction');

let timer = null;
let timeLeft = 60; 
let paused = false;


startButton.addEventListener('click', function() {
    if (timer === null) {
        currentInstruction.textContent = "Start";
        timer = setInterval(runTimer, 1000);
    }
});


pauseButton.addEventListener('click', function() {
    if (timer !== null && !paused) {
        clearInterval(timer);
        paused = true;
        currentInstruction.textContent = "paused. Click to Resume.";
    } else if (paused) {
        timer = setInterval(runTimer, 1000);
        paused = false;
        currentInstruction.textContent = "Resume ";
    }
});


stopButton.addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
    timeLeft = 60;
    paused = false;
    updateTimeDisplay();
    currentInstruction.textContent = " stopped. Click Start to begin.";
});


function runTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimeDisplay();
    } else {
        clearInterval(timer);
        timer = null;
        currentInstruction.textContent = " completed";
    }
}

function updateTimeDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
