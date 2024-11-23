const ROCK = " 🪨 ";//rock = 1
const SCISSOR = " ✂️ ";//scissor = 2
const PAPER = " 📄 ";//paper = 3
const instructionsForInput = "\n ENTER \n 1.for 🪨 \n 2.for ✂️ \n 3.for 📄 \n";

let computerScore = 0;
let playerScore = 0;

function welcomeMsg() {
  let welcomeMsg = "\n    " + repeat("-", 80) + "  \n   |     \t 🪨 📄 ✂️ ";
  welcomeMsg += "Welcome to Stone Paper Scissor Game ✂️ 📄 🪨 \t\t    |";
  welcomeMsg += "\n   |    You Have 5 Atttempts In The Five Attempts You Have";
  welcomeMsg += " To Beat The Computer     |\n   |\t\t\t\t   👍All The Best 👍";
  welcomeMsg += "\t\t\t\t    |\n    " + repeat("-", 80);

  printMessage(welcomeMsg);
}

function decideGameWinner() {
  if (playerScore > computerScore) {
    return playerWinMsg();
  }

  if (playerScore < computerScore) {
    return computerWinMsg();
  }

  return gameTieMessage();
}

function playerWinMsg() {
  let message = "\n  " + repeat("-", 74);
  message += "\n | \t\t  🏆 🏆 !! CONGRATULATIONS YOU WON !! 🏆 🏆 \t \t    | ";
  message += "\n  " + repeat("-", 74);

  return message;
}

function gameTieMessage() {
  let message = "\n  " + repeat("-", 74);
  message += "\n |\t\t\t     😋It's A Tie Game😋 \t\t\t    | ";
  message += "\n  " + repeat("-", 74);

  return message;
}

function computerWinMsg() {
  let message = "\n  " + repeat("-", 74);
  message += "\n | \t\t💔 😢OOPS!! Sorry Computer Won, Better Luck Next";
  message += " Time 👍    | \n  " + repeat("-", 74);

  return message;
}

function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function printMessage(message) {
  console.log(message);
}

function printAndResetScores() {
  printMessage("\n  player score:" + playerScore);
  printMessage("\n  computer score:" + computerScore);

  playerScore = 0;
  computerScore = 0;
}

function giveRandomly1to3() {
  return Math.ceil(Math.random() * 3);
}

function readInputFromUser() {
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
    return "\n player won";
  }

  computerScore = computerScore + 1;
  return "\n computer won";
}

function displayRoundWinner(playerInput, computerChoice) {

  if (playerInput === computerChoice) {
    return "\n It Is A TIE ";
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
    printMessage(displayRoundWinner(giveRandomly1to3(), readInputFromUser()));
    noOfTimes = noOfTimes - 1;
  }

  printMessage(decideGameWinner());
  printAndResetScores();

  if (confirm("do you want play again:")) {
    playRPS();
  }
}

function main() {
  welcomeMsg();

  if (confirm("do you want play this game:")) {
    playRPS();
  }

  printMessage("Thank You For Your Precious Time");
}

main();