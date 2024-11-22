function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function printMessage(message) {
  console.log(makeFrame(message));
}

function makeFrame(text) {
  let message = "\t " + repeat("-", 71);
  message += "\n \t|\t" + text + "\t\t\t|";
  message += "\n\t " + repeat("-", 71);

  return message;
}

function winMesssage(expectedNumber) {

  let message = "\n\t " + repeat("-", 55);
  message += "\n\t| \t  🏆 🏆 !! CONGRATULATIONS YOU WIN !! 🏆 🏆     |";
  message += "\n\t| \t\tBravo! You've nailed it.\t\t|";
  message += "\n\t| \t\tTHE NUMBER WAS:" + expectedNumber + "\t\t\t|";
  message += "\n\t " + repeat("-", 55);

  return message;
}

function gameOverMessage(expectedNumber) {

  let message = "\n\t " + repeat("-", 56);
  message += "\n\t| \t💔 Oh no! You've used all your attempts.\t |";
  message += "\n\t| \t💔 👍 Better luck next time!👍\t\t\t |";
  message += "\n\t| \t THE NUMBER WAS:" + expectedNumber + "\t\t\t\t |";
  message += "\n\t " + repeat("-", 56);

  return message;
}

function isGuessLessOrGreater(guessedNumber, expectedNumber, attempts) {
  if (+guessedNumber < expectedNumber) {
    printMessage(guessedNumber + " Is Too low! Try a higher number.      ");
  }

  if (+guessedNumber > expectedNumber) {
    printMessage(guessedNumber + " Is Too high! Try a smaller number.      ");
  }

  return attempts - 1;
}

function headerMessage(attempts) {
  let message = repeat("-", 75);
  message += "\n\t Take a guess! \t\t(Remaining attempts:" + attempts + ")";

  return message;
}

function readGuess(attempts) {

  const guess = prompt("\nEnter Number => ");

  if (guess !== "" + +guess) {
    printMessage(guess + " is Invalid input! Please enter a number. ");
    readGuess(attempts);
  }

  return guess;
}

function validateGuessNumber(attempts, expectedNumber) {
  while (attempts > 0) {
    console.log(headerMessage(attempts));

    const guessedNumber = readGuess(attempts);

    if (+guessedNumber === expectedNumber) {
      console.log(winMesssage(expectedNumber));
      return attempts;
    }

    attempts = isGuessLessOrGreater(guessedNumber, expectedNumber, attempts);
  }

  return attempts;
}

function startGame(expectedNumber, attempts) {
  attempts = validateGuessNumber(attempts, expectedNumber);

  if (attempts === 0) {
    console.log(gameOverMessage(expectedNumber));
  }

  if (confirm("do you want play Again:")) {
    startGame(Math.ceil(Math.random() * 100), 5);
  }
}

function welcomeMsg() {
  let message = "\t\t" + repeat("-", 55);
  message += "\n\t\t     *** 🏆 🏆 Welcome to Guess the Number! 🏆 🏆 ***";
  message += "\n\t\t" + repeat("-", 55);
  message += "\n→ The secret number is between 1 and 100.";
  message += "\n→ You have 5 attempts to find it.";

  return message;

}

function main() {
  if (confirm(welcomeMsg())) {
    const secretNumber = Math.ceil(Math.random() * 100);
    startGame(10, 5);
  }

  console.log("\nThank You For Your Precious Time");
}

main();
