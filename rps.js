
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors, Shoot!:");
    choice = choice.toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
        return choice;
    } else {
        console.log("Please enter rock, paper, or scissors.");
        getHumanChoice90;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! Both played ${humanChoice}.`);
    } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER")){
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Scores| Human: ${humanScore} Computer: ${computerScore}`);
    }
    console.log(`Thanks for playing! The final scores are: \nHuman: ${humanScore} Computer: ${computerScore}`);
}

playGame();
