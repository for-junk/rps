const computerDisplay = document.getElementById("computer");
const playerDisplay = document.getElementById("player");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");
const choices = document.querySelectorAll("button");
const over = document.getElementById("go");
const wins = [];
let computerSelection;
let playerSelection;
let result;
const rps = ["Rock", "Paper", "Scissors"];

let container = document.querySelector("#buttons");
let matches = container.querySelectorAll("button.rps");

choices.forEach((choices) =>
  choices.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerDisplay.innerHTML = playerSelection;
    computerPlay();
    playRound();
    wins.push(result);
    score();
  })
);
function score() {
  pWins = wins.filter((item) => item == "Player wins").length;
  cWins = wins.filter((item) => item == "Computer wins").length;
  scoreDisplay.innerHTML = `${pWins}-${cWins}`;
  if (pWins == 5) {
    matches.forEach(function (match) {
      match.parentNode.removeChild(match);
    });
    const newItem = document.createElement("h2");
    newItem.innerHTML = "Game Over Player Wins";
    container.parentNode.replaceChild(newItem, container);
  }
  if (cWins == 5) {
    matches.forEach(function (match) {
      match.parentNode.removeChild(match);
    });
    const newItem = document.createElement("h2");
    newItem.innerHTML = "Game Over Computer Wins";
    container.parentNode.replaceChild(newItem, container);
  }
}

function computerPlay() {
  computerSelection = rps[Math.floor(Math.random() * rps.length)];
  computerDisplay.innerHTML = computerSelection;
}

function playRound() {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    result = "Player wins";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    result = "Computer wins";
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    result = "Draw";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    result = "Draw";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    result = "Player wins";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    result = "Computer wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    result = "Player wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    result = "Computer wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    result = "Draw";
  }
}
