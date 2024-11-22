function numberIsTooLowMsg(expectedNumber, attempts) {

  let message = "\t -------------------------------------------------------";
  message += "\n \t|\t " + expectedNumber + ", Is Too low! Try a higher";
  message += " number. \t\t|\n \t --------------------------------------";
  message += "-----------------";
  console.log(message);

  return attempts = attempts - 1;
}

function numberIsTooHighMsg(expectedNumber, attempts) {
  let message = "\t -------------------------------------------------------";
  message += "\n \t|\t " + expectedNumber + ", Is Too high! Try a smaller";
  message += " number. \t|\n \t --------------------------------------";
  message += "-----------------";
  console.log(message);

  return attempts = attempts - 1;
}

function winMesssage(expectedNumber) {
  console.log(" -------------------------------------------------------");
  console.log("| \t  🏆 🏆 !! CONGRATULATIONS YOU WIN !! 🏆 🏆     |");
  console.log("| \t\tBravo! You've nailed it.\t\t|");
  console.log("| \t\tTHE NUMBER WAS:", expectedNumber, "\t\t\t|");
  console.log(" -------------------------------------------------------");

  return "";
}

function gameOverMessage(expectedNumber) {
  console.log("\t --------------------------------------------------------");
  console.log("\t| \t💔 Oh no! You've used all your attempts.\t |");
  console.log("\t| \t💔 👍 Better luck next time!👍\t\t\t |");
  console.log("\t| \t THE NUMBER WAS:", expectedNumber, "\t\t\t\t |");
  console.log("\t --------------------------------------------------------");

  return "";
}

function invalidInputMsg(guessedNumber) {
  let message = "\t ----------------------------------------------";
  message += "\n \t|  " + guessedNumber + " is Invalid input! Please enter a";
  message += " number.  |\n\t ----------------------------------------------";

  return message;
}

function confirmWantsToPlayAgain() {
  if (confirm("\n do you want to play again:")) {
    startGame((Math.ceil(Math.random() * 100)), 5);
  }

  return "";
}

function verifyGuessedNumber(guessedNumber, expectedNumber, attempts) {
  if (+guessedNumber < expectedNumber) {
    attempts = numberIsTooLowMsg(guessedNumber, attempts);
  }

  if (+guessedNumber > expectedNumber) {
    attempts = numberIsTooHighMsg(guessedNumber, attempts);
  }
  return attempts;
}

function headerMessage(attempts) {
  let message = "-----------------------------------------------------------";
  message += "\n\t Take a guess! \t\t(Remaining attempts:", attempts, ")";

  return message;
}

function getNumberFromPlayer(attempts) {
  console.log(headerMessage(attempts));

  const guess = prompt("Enter Number => ");

  if (guess !== "" + +guess) {
    console.log(invalidInputMsg);
    getNumberFromPlayer(attempts);
  }

  return guess;
}

function isAttemptsEqualTo0(attempts, expectedNumber) {
  if (attempts < 1) {
    gameOverMessage(expectedNumber);
    confirmWantsToPlayAgain();
    return true;
  }

  return false;
}

function isExpectedAndGuessSame(expectedNumber) {
  winMesssage(expectedNumber);

  if (confirmWantsToPlayAgain) {
    startGame((Math.ceil(Math.random() * 100)), 5);
  }

  return "";
}

function isPlayersGuessCorrect(guessedNumber, expectedNumber) {
  if (+guessedNumber === expectedNumber) {
    winMesssage(expectedNumber);
    confirmWantsToPlayAgain();

    return true;
  }

  return false;
}

function startGame(expectedNumber, attempts) {
  let stopGame = false;
  while (!stopGame) {
    if (isAttemptsEqualTo0(attempts, expectedNumber)) {
      stopGame = true;
      continue;
    }

    const guessedNumber = getNumberFromPlayer(attempts);

    if (isPlayersGuessCorrect(guessedNumber, expectedNumber)) {
      stopGame = true;
      continue;
    }

    attempts = verifyGuessedNumber(guessedNumber, expectedNumber, attempts);
    continue;
  }
}

function welcomeMsg() {
  console.log("\t\t  ------------------------------------------------------");
  console.log("\t\t     *** 🏆 🏆 Welcome to Guess the Number! 🏆 🏆 ***");
  console.log("\t\t  ------------------------------------------------------");

  console.log("\n→ The secret number is between 1 and 100.\n");
  console.log("→ You have 5 attempts to find it.\n");
}

function main() {
  welcomeMsg();

  const isReady = confirm("would you like to play the game:");

  if (isReady) {
    const secretNumber = Math.ceil(Math.random() * 100);
    startGame(secretNumber, 5);
  } else {
    console.log("\nThank You For Your Precious Time");
  }
}

main();
// numberIsTooLowMsg(40, 4);
// numberIsTooHighMsg(40, 4);
// console.log(invalidInputMsg("a"));