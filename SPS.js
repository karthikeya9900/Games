const ROCK = " 🪨 ";//rock = 1
const SCISSOR = " ✂️ ";//scissor = 2
const PAPER = " 📄 ";//paper = 3

function getEmoji(value) {
  if (value === 1) {
    return "🪨";
  }

  return value === 2 ? " ✂️" : "📄";
}

function getComputerInput() {
  return Math.ceil(Math.random() * 3);
}

function frameForWinnerMsg(text) { 
  let message = "\n   " + repeat("-", 74);
  message += "\n  | \t\t  " + text + " \t \t     | ";
  message += "\n   " + repeat("-", 74);

  return message;
}

// todo: rename this function name 
function getWelcomeMsg() {
  let message = "\n    " + repeat("-", 80) + "  \n   |     \t 🪨 📄 ✂️ ";
  message += "Welcome to Stone Paper Scissor Game ✂️ 📄 🪨 \t\t    |";
  message += "\n   |    You Have 5 Atttempts In The Five Attempts You Have";
  message += " To Beat The Computer     |\n   |\t\t\t\t   👍All The Best 👍";
  message += "\t\t\t\t    |\n    " + repeat("-", 80);

  return message;
}

function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function decideGameWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return frameForWinnerMsg("🏆 🏆 !! CONGRATULATIONS YOU WON !! 🏆 🏆");
  }

  if (computerScore > playerScore) {
    return frameForWinnerMsg("💔 😢OOPS!! Better Luck Next Time 👍 ");
  }

  return frameForWinnerMsg("        😋It's A Tie Game😋         ");
}

// this function is working no issue with this
function readUserInput() {
  const inputInstructions = "\n ENTER \n 1.for 🪨 \n 2.for ✂️ \n 3.for 📄 \n";
  const message = repeat("-", 50) + "\n" + inputInstructions;
  const userInput = +prompt(message + "\n enter your choice:");

  if (userInput >= 1 && userInput <= 3) {
    return userInput;
  }

  console.log("Inviad input! enter a valid number:");
  return readUserInput();
}

// this function is working no issue with this
function decideRoundWinner(playerInput, computerInput) {
  const inputsPair = playerInput + "" + computerInput;
  const hasPlayerWon = inputsPair === "12" || inputsPair == "23"
    || inputsPair === "31";

  if (playerInput === computerInput) {
    return "Tie";
  }

  if (hasPlayerWon) {
    return "player";
  }

  return "computer";
}

function showRoundWinner(plInput, devInput, winner, plScore, devScore) {
  let message = "\n   " + repeat("-", 76);
  message += "\n  | player input | computer input |   winner   | player score";
  message += " | computer score |\n   " + repeat("-", 76);
  message += "\n  |      " + getEmoji(plInput) + "      |        ";
  message += getEmoji(devInput) + "      |  " + winner + "  |      ";
  message += plScore + "       |      " + devScore + "         |";
  message += "\n   " + repeat("-", 76);

  console.log(message);
}

// need to refactor this function
function play5Rounds() {
  let playerScore = 0;
  let deviceScore = 0;

  for (let noOfTimes = 5; noOfTimes > 0; noOfTimes--) {
    const playerInput = readUserInput();
    const deviceInput = getComputerInput();
    const winner = decideRoundWinner(playerInput, deviceInput);

    if (winner === "player") {
      playerScore += 1;
      showRoundWinner(playerInput, deviceInput, " player ",
        playerScore, deviceScore);
    }

    if (winner === "computer") {
      deviceScore += 1;
      showRoundWinner(playerInput, deviceInput, winner,
        playerScore, deviceScore);
    }

    if (winner === "Tie") {
      showRoundWinner(playerInput, deviceInput, "  Tie   ",
        playerScore, deviceScore);
    }
  }
  console.log(decideGameWinner(playerScore, deviceScore));
}

function playRPS() {
  play5Rounds();

  if (confirm("do you want play again:")) {
    playRPS();
  }
}

function main() {
  console.log(getWelcomeMsg());

  if (confirm("do you want play this game:")) {
    playRPS();
  }

  console.log("Thank You For Your Precious Time");
}

main();
