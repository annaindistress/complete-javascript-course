'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayText = function (selector, text) {
    document.querySelector(selector).textContent = text;
};

const changeBodyBg = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
    document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayText('.message', '⛔️ No number!');
    } else if (guess === secretNumber) {
        displayText('.message', '🎉 Correct Number!');
        displayText('.number', secretNumber);

        changeBodyBg('#60b347');
        changeNumberWidth('30rem');

        if (score > highscore) {
            highscore = score;
            displayText('.highscore', highscore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayText(
                '.message',
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            displayText('.score', score);
        } else {
            displayText('.message', '💥 You lost the game!');
            displayText('.score', 0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayText('.message', 'Start guessing...');
    displayText('.number', '?');
    displayText('.score', score);

    document.querySelector('.guess').value = '';

    changeBodyBg('#222');
    changeNumberWidth('15rem');
});
