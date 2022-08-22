// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     let randomNumber = Math.floor(Math.random() * 3);
//     return choices[randomNumber];
//}

const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const counterText = document.querySelector("#counterText")
const playerChoices = document.querySelectorAll('.btn')
let player;
let computer;
let result;
let counterComputer = 0;
let counterPlayer = 0;

playerChoices.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    counterUpdate();
    counterText.textContent = `Player: ${counterPlayer} Computer: ${counterComputer}`
    gameOver();

}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3);
    const computerChoices = ['Rock', 'Paper', 'Scissors']

    return computer = computerChoices[randNum]
}

function checkWinner() {
    if (player === computer) {
        return "It's a draw!"
    }
    else if (player === 'Rock') {
        return (computer === 'Scissors') ? "You win!" : "You lose!"
    }
    else if (player === 'Paper') {
        return (computer === 'Rock') ? "You win!" : "You lose!"
    }
    else if (player === 'Scissors') {
        return (computer === 'Paper') ? "You win!" : "You lose!"
    }
}

function counterUpdate () {
    if (checkWinner() === 'You win!') {
        counterPlayer++;
    }
    else if (checkWinner() === 'You lose!') {
        counterComputer++;
    }
    return
}

function gameOver () {
    if (counterPlayer === 5) {
        return counterText.textContent = 'You won the game';
    } else if (counterComputer === 5) {
        return counterText.textContent = 'You lost the game'
    }
    return;
}
