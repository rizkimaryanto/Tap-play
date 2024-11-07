let score = 0;
let timeLeft = 10;
let timerInterval;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickArea = document.getElementById('click-area');
const clickImage = document.getElementById('click-image');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startGame);
clickImage.addEventListener('click', incrementScore);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = `Waktu Tersisa: ${timeLeft} Detik`;

    clickArea.style.display = 'block';
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

    // Tambahkan efek klik (misalnya efek getar atau perubahan warna)
    clickImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        clickImage.style.transform = 'scale(1)';
    }, 100);
}

function endGame() {
    clickArea.style.display = 'none';
    startButton.style.display = 'block';
    alert(`Waktu Habis! Skor Akhir Anda: ${score}`);
}
