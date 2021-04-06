//create buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//create button listeners
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

function playRound(e) {
    if (gameOver()) {
        alert("Game over, refresh window to play again");
        return;
    }
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    updateScore(getWinner(playerSelection, computerSelection));
    updateChoices(playerSelection, computerSelection);
}

const scoreHeading = document.querySelector("#scoreheading");
const playerScorePara = document.querySelector("#playerscore");
const computerScorePara = document.querySelector("#computerscore");
let playerScore = 0;
let computerScore = 0;

function updateScore(winner) {
    if (winner === "tie") {
        scoreHeading.textContent = "It's a tie!";
    } else if (winner === "player") {
        scoreHeading.textContent = "You won!"; 
        playerScore++;
    } else if (winner === "computer") {
        scoreHeading.textContent = "Computer won!";
        computerScore++;
    }
    playerScorePara.textContent = `You: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    if (gameOver()) {
        setFinalMessage();
    }
}

const containerDiv = document.querySelector("#container");
const choicesDiv = document.createElement("div");
const playerChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");

containerDiv.appendChild(choicesDiv);
choicesDiv.appendChild(playerChoicePara);
choicesDiv.appendChild(computerChoicePara);

function updateChoices(playerSelection, computerSelection) {
    playerChoicePara.textContent = `Your choice: ${playerSelection}`;
    computerChoicePara.textContent = `Computer's choice: ${computerSelection}`;
}

function setFinalMessage() {
    return playerScore > computerScore 
    ? (scoreHeading.textContent = "Game over, you won!")
    : (scoreHeading.textContent = "Game over, computer won!");
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } 
    if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ) {return "player";
} 
if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
) {return "computer";
}
}

//create computer generator for rock paper or scissors
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper"; 
    } else if (number == 2) {
        return "scissors";
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}
