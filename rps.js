
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let round = document.querySelector("#round");
let scoreText = document.querySelector("#score");
let container = document.querySelector("#container");

rock.addEventListener("click", function(element) {
    let computerChoice = getComputerChoice();
    playRound('ROCK', computerChoice);
})

paper.addEventListener("click", function(element) {
    let computerChoice = getComputerChoice();
    playRound('PAPER', computerChoice);
})

scissors.addEventListener("click", function(element) {
    let computerChoice = getComputerChoice();
    playRound('SCISSORS', computerChoice);
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let int = getRandomInt(3);
    if (int === 0) {
        return "ROCK";
    } else if (int === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        round.textContent = `Tie! Both played ${humanChoice}.`;
    } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER")){
        humanScore++;
        round.textContent = `${humanChoice} beats ${computerChoice}.`;
        scoreText.textContent = `Scores | Human: ${humanScore}   Computer: ${computerScore}`;
    } else {
        computerScore++;
        round.textContent = `${computerChoice} beats ${humanChoice}.`;
        scoreText.textContent = `Scores | Human: ${humanScore}   Computer: ${computerScore}`;
    }
    if (humanScore === 5 || computerScore === 5){
        const gameOver = document.createElement('h1');
        container.insertBefore(gameOver, round);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (humanScore === 5){
            gameOver.textContent = "Game Over: You Win!"
        } else {
            gameOver.textContent = "Game Over: Computer Wins!"
        }
    }
}




