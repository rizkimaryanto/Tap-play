let score = 0;
let timeLeft = 10;
let timerInterval;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('click-button');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', incrementScore);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = `Waktu Tersisa: ${timeLeft} Detik`;

    clickButton.style.display = 'inline-block';
    startButton.style.display = 'none';

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Waktu Tersisa: ${timeLeft} Detik`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}

function incrementScore() {
    score++;
    scoreDisplay.textContent = score;
}

function endGame() {
    clickButton.style.display = 'none';
    startButton.style.display = 'inline-block';
    alert(`Waktu Habis! Skor Akhir Anda: ${score}`);
}
