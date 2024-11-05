// 🐹 🎉 😢
let isGameActive = false;
let score = 0;
let rounds = 3;

const startBtn = document.getElementById("start-button");
const cells = document.querySelectorAll(".cell");

const scoreElement = document.getElementById("score");
const roundsElement = document.getElementById("rounds");
const messageElement = document.getElementById("message");

//задача запустить игру
const startGame = () => {
    isGameActive = true;
    startBtn.disabled = true;
    showMole();
    messageElement.textContent = '';
}
//вывод крота
const showMole = () => {
  const randomIndex = getRandomNumber(0, 9);
  cells[randomIndex].textContent = "🐹";
};

// скрытие крота 
const hideMole = () => {
    cells.forEach((cell) => {
        cell.textContent = '';
    })
}

//генерация случайного появления крота
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//нажатие на ячейку
const hendleCellClick = (cell) => {
    if (cell.textContent === "🐹") {
        score = score + 1;
        rounds = rounds - 1;
        updateLabel();
        if (score > 2) {
            endGame(true);
        } else {
            hideMole();
            showMole();
        }
    } else {
        endGame(false);
    }
}

//вывод очков и раундов
const updateLabel = () => {
    scoreElement.textContent = `Cчёт: ${score}`;
    roundsElement.textContent = `Осталось раундов: ${rounds}`;
}

//сброс игры к начальному состоянию
const resetGame = () => {
    score = 0; 
    rounds = 3;
    updateLabel();
    hideMole();
    isGameActive = false;
}

//завершение игры
const endGame = (win) => {
        isGameActive = false;
        startBtn.disabled = false;
    if (win) {
        alert("Поздравляю!! Вы выйграли самую лучшую игру на свете 🎉");
        messageElement.textContent = 'Вы выйграли, чтобы начать новую игру, наэмите старт';
    } else { 
        alert("Вы обосрамс 😢");
         messageElement.textContent =
           "Вы проиграли, чтобы начать новую игру снова, нажмите старт";
    }
    resetGame();
}

startBtn.addEventListener('click', () => {
    startGame();
});

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (isGameActive) {
            hendleCellClick(cell)
        }
    })
});