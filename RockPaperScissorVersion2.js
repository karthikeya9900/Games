const ROCK = " 🪨 ";//rock = 1
const SCISSOR = " ✂️ ";//scissor = 2
const PAPER = " 📄 ";//paper = 3
const instructionsForInput = "\n ENTER \n 1.for 🪨 \n 2.for ✂️ \n 3.for 📄 \n";

// message part
function printMessage(message) {
  console.log(message);
}

function welcomeMsg() {
  let welcomeMsg = "\n    " + repeat("-", 80) + "  \n   |     \t 🪨 📄 ✂️ ";
  welcomeMsg += "Welcome to Stone Paper Scissor Game ✂️ 📄 🪨 \t\t    |";
  welcomeMsg += "\n   |    You Have 5 Atttempts In The Five Attempts You Have";
  welcomeMsg += " To Beat The Computer     |\n   |\t\t\t\t   👍All The Best 👍";
  welcomeMsg += "\t\t\t\t    |\n    " + repeat("-", 80);

  return welcomeMsg;
}

function getEmoji(value) {
  if (value === 1) {
    return " 🪨 ";
  }

  return value === 2 ? " ✂️ " : " 📄 ";
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

// general part
function getComputerChoice() {
  return Math.ceil(Math.random() * 3);
}

function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function readUserInput() {
  printMessage(repeat("-", 50));
  printMessage(instructionsForInput);

  const userInput = +prompt("enter your choice:");

  if (userInput >= 1 && userInput <= 3) {
    return userInput;
  }

  printMessage("Inviad input! enter a valid number:");
  readUserInput();
}

// game part
function decideGameWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return frameWinnerMsg("🏆 🏆 !! CONGRATULATIONS YOU WON !! 🏆 🏆");
  }

  if (playerScore < computerScore) {
    return frameWinnerMsg("💔 😢OOPS!! Better Luck Next Time 👍 \t");
  }

  return frameWinnerMsg("     😋It's A Tie Game😋 \t\t ");
}

function isPlayerWonThisRound(playerInput, computerChoice) {
  printMessage(frameOption("computer choice:" + getEmoji(computerChoice)));
  printMessage(frameOption("player choice:" + getEmoji(playerInput)));

  const scissorHitPaper = playerInput === 2 && computerChoice === 3;
  const paperHitRock = playerInput === 3 && computerChoice === 1;
  const rockHitScissor = playerInput === 1 && computerChoice === 2;
  const isPlayerWon = scissorHitPaper || paperHitRock || rockHitScissor;

  isPlayerWon ? printMessage(frameRoundWinnerMsg("player won")) :
    printMessage(frameRoundWinnerMsg("computer won"));

  return isPlayerWon;
}

function playRPS() {
  let noOfTimes = 5;
  let playerScore = 0;
  let computerScore = 0;

  while (noOfTimes >= 1) {
    const playerInput = readUserInput();
    const computerChoice = getComputerChoice();

    if (playerInput === computerChoice) {
      printMessage(frameRoundWinnerMsg("It Is A TIE  "));
      continue;
    }

    const isPlayerWonInRound = isPlayerWonThisRound(playerInput,computerChoice);
    isPlayerWonInRound ? playerScore += 1 : computerScore += 1;
    noOfTimes = noOfTimes - 1;
  }

  printScoresAndWinner(playerScore, computerScore);

  if (confirm("do you want play again:")) {
    playRPS();
  }
}

function printScoresAndWinner(playerScore, computerScore) {
  printMessage("player score: " + playerScore);
  printMessage("computer score: " + computerScore);
  printMessage(decideGameWinner(playerScore, computerScore));
}

function main() {
  printMessage(welcomeMsg());

  if (confirm("do you want play this game:")) {
    playRPS();
  }

  printMessage("Thank You For Your Precious Time");
}

main();
