const ROCK = " 🪨 ";//rock = 1
const SCISSOR = " ✂️ ";//scissor = 2
const PAPER = " 📄 ";//paper = 3
const instructionsForInput = "\n ENTER \n 1.for 🪨 \n 2.for ✂️ \n 3.for 📄 \n";

let computerScore = 0;
let playerScore = 0;

// need to ask about this function and using of global scope for score
function printAndResetScores() {
  printMessage("\n  player score:" + playerScore);
  printMessage("\n  computer score:" + computerScore);

  playerScore = 0;
  computerScore = 0;
}

function getEmoji(value) {
  if (value === 1) {
    return " 🪨 ";
  }

  return value === 2 ? " ✂️ " : " 📄 ";
}

function printMessage(message) {
  console.log(message);
}

function getComputerChoice() {
  return Math.ceil(Math.random() * 3);
}

function welcomeMsg() {
  let welcomeMsg = "\n    " + repeat("-", 80) + "  \n   |     \t 🪨 📄 ✂️ ";
  welcomeMsg += "Welcome to Stone Paper Scissor Game ✂️ 📄 🪨 \t\t    |";
  welcomeMsg += "\n   |    You Have 5 Atttempts In The Five Attempts You Have";
  welcomeMsg += " To Beat The Computer     |\n   |\t\t\t\t   👍All The Best 👍";
  welcomeMsg += "\t\t\t\t    |\n    " + repeat("-", 80);

  return welcomeMsg;
}

function decideGameWinner() {
  if (playerScore > computerScore) {
    return frameWinnerMsg("🏆 🏆 !! CONGRATULATIONS YOU WON !! 🏆 🏆");
  }

  if (playerScore < computerScore) {
    return frameWinnerMsg("💔 😢OOPS!! Better Luck Next Time 👍 \t");
  }

  return frameWinnerMsg("     😋It's A Tie Game😋 \t\t ");
}

function frameWinnerMsg(text) {
  let message = "\n  " + repeat("-", 74);
  message += "\n | \t\t  " + text + " \t \t    | ";
  message += "\n  " + repeat("-", 74);

  return message;
}

function frameOption(text) {
  let message = "\n  " + repeat("-", 30);
  message += "\n |\t" + text + "\t|";
  message += "\n  " + repeat("-", 30);

  return message;
}

function frameRoundWinnerMsg(text) {
  let message = "\n  " + repeat("-", 22);
  message += "\n |\t" + text + "\t|";
  message += "\n  " + repeat("-", 22);

  return message;
}

function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function readInputFromUser() {
  printMessage(repeat("-", 50));
  printMessage(instructionsForInput);

  const userInput = +prompt("enter your choice:");


  if (userInput >= 1 && userInput <= 3) {
    return userInput;
  }

  printMessage("Inviad input! enter a valid number:");
  readInputFromUser();
}

function decideRoundWinner(playerWinStatus) {
  if (playerWinStatus) {
    playerScore = playerScore + 1;
    return frameRoundWinnerMsg("player won");
  }

  computerScore = computerScore + 1;
  return frameRoundWinnerMsg("computer won");
}

function displayRoundWinner(playerInput, computerChoice) {
  printMessage(frameOption("computer choice:" + getEmoji(computerChoice)));
  printMessage(frameOption("player choice:" + getEmoji(playerInput)));

  if (playerInput === computerChoice) {
    return frameRoundWinnerMsg("It Is A TIE  ");
  }

  const scissorHitPaper = playerInput === 2 && computerChoice === 3;
  const paperHitRock = playerInput === 3 && computerChoice === 1;
  const rockHitScissor = playerInput === 1 && computerChoice === 2;
  const playerWinStatus = scissorHitPaper || paperHitRock || rockHitScissor;

  return decideRoundWinner(playerWinStatus);
}

function playRPS() {
  let noOfTimes = 5;

  while (noOfTimes >= 1) {
    printMessage(displayRoundWinner(readInputFromUser(), getComputerChoice()));
    noOfTimes = noOfTimes - 1;
  }

  printMessage(decideGameWinner());
  printAndResetScores();

  if (confirm("do you want play again:")) {
    playRPS();
  }
}

function main() {
  printMessage(welcomeMsg());

  if (confirm("do you want play this game:")) {
    playRPS();
  }

  printMessage("Thank You For Your Precious Time");
}

main();

// this function is not completed
function tableUI() {
  let table = "\n   " + repeat("-", 90);
  table += "\n  " + "|    AI Choice    |    Player Choice    |     Winner    |";
  table += "    AI Score    |    Your Score   |";
  table += "\n   " + repeat("-", 90);
  table += "\n  |        🪨       |          ✂️          |       🪨      |";
  table += "       1        |        0        |";
  table += "\n   " + repeat("-", 90);

  printMessage(table);
}
