const rps = ["Rock", "Paper", "Scissors"];
const wins = [];

function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function capitalize(string) {
  const cap = string.toLowerCase();
  return cap.replace(cap[0], cap[0].toUpperCase());
}

function playerInput() {
  let input = prompt("Rock, Paper or Scissors");
  return capitalize(input);
}

function playRound() {
  const playerSelection = playerInput();
  const computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "Player wins";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "Computer wins";
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    return "Draw";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    return "Draw";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "Player wins";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "Computer wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Player wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "Computer wins";
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    return "Draw";
  }
}

function game() {
  for (let i = 0; i <= 4; i++) {
    console.log(" ");
    console.log(`Round ${i + 1}`);
    wins.push(playRound());
    console.log(wins[i]);
    score();
  }
}

function score() {
  let pWins = wins.filter((item) => item == "Player wins").length;
  let cWins = wins.filter((item) => item == "Computer wins").length;
  console.log(`Score: ${pWins}-${cWins}`);
}

game();
