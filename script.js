function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

const computerSelection = getComputerChoice();
let result = '';
let counterUser = 0;
let counterComputer = 0;
let score = ` Score : You ${counterUser} - Computer ${counterComputer}`

function playRound(playerSelection =  prompt('Your choice ?').toLowerCase(), computerSelection) {
    computerSelection = getComputerChoice();
    let score = ` Score : You ${counterUser} - Computer ${counterComputer}`
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
        alert(result + score);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        result = "You've won!";
        counterUser = ++counterUser;
        alert(result + score);
    } else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        result = "You've won!";
        counterUser = ++counterUser;
        alert(result + score);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        result = "You've won!";
        counterUser = ++counterUser;
        alert(result + score);
    } else {
        result = "You've lost!";
        counterComputer = ++counterComputer;
        alert(result + score);
    }
  }



  function game() {
    for (let i = 0; i < 5; i++) {

        playRound();
    }
    if (counterUser > counterComputer) {
        alert("You won the game")
    } else {
        alert("You lost the game")
    }
}


  console.log(game());