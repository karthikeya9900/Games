let score = 0;

function repeat(char, times) {
  let repeatedString = "";

  for (let index = 0; index < times; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function delay() {
  for (let times = 0; times <= 1700000000; times++) {
  }
}


function displayQuestion(question, op1, op2, op3, op4, correctOpt) {
  console.clear();
  let message = "\n" + repeat("-", 70) + "\n\t  Your Score : " + score;
  message += "\n \n" + question + "\n \n" + "--options-- \n \n";
  message += " " + op1 + "\n " + op2 + "\n " + op3 + "\n " + op4 + "\n ";
  const answer = prompt(message + "enter option number:");

  if (+correctOpt === +answer) {
    console.log("correct answer ✅");
    score += 1;
    delay();
  } else {
    console.log('wrong answer ❌\ncorrect answer is: ', correctOpt);
    delay();
  }
}

//-------------------------------  question  dividing border
let question = "Where is the strongest human muscle located?";
let op1 = '1.shoulder';
let op2 = '2.jaw';
let op3 = '3.tongue';
let op4 = '4.legs';

displayQuestion(question, op1, op2, op3, op4, 2);
//-------------------------------  question  dividing border
question = "Which country has the highest life expectancy?";
op1 = '1.NewYork';
op2 = '2.Mexico';
op3 = '3.Hong Kong';
op4 = '4.England';

displayQuestion(question, op1, op2, op3, op4, 3);
//-------------------------------  question  dividing border
question = "What company was initially known as 'Blue Ribbon Sports'?";
op1 = '1.Bata';
op2 = '2.Adidas';
op3 = '3.Puma';
op4 = '4.Nike';

displayQuestion(question, op1, op2, op3, op4, 4);
//-------------------------------  question  dividing border
question = "What city is known as 'The Eternal City'?";
op1 = '1.Rome';
op2 = '2.London';
op3 = '3.Tokyo';
op4 = '4.Singapore';

displayQuestion(question, op1, op2, op3, op4, 1);
//-------------------------------  question  dividing border
question = "Which planet has the most moons?";
op1 = '1.Mercury';
op2 = '2.Jupiter';
op3 = '3.Saturn';
op4 = '4.Mars';

displayQuestion(question, op1, op2, op3, op4, 3);
//-------------------------------  question  dividing border
question = "What is the scientific theory that explains the origin of the universe?";

op1 = '1.The Multiverse';
op2 = '2.The Big Bang Theory';
op3 = '3.Expanding Universe';
op4 = '4.Holographic Universe';

displayQuestion(question, op1, op2, op3, op4, 2);
//-------------------------------  question  dividing border
question = "Which country has the most islands?";

op1 = '1.Australia';
op2 = '2.Fiji';
op3 = '3.Sweden';
op4 = '4.Philippines';

displayQuestion(question, op1, op2, op3, op4, 3);
//-------------------------------  question  dividing border
question = "On which continent would you find the world's largest desert?";

op1 = '1.Antarctica';
op2 = '2.Africa';
op3 = '3.Asia';
op4 = '4.Europe';

displayQuestion(question, op1, op2, op3, op4, 1);
//-------------------------------  question  dividing border
question = "What mountain range separates Europe and Asia?";

op1 = '1.Caucasus Mountains';
op2 = '2.Altai Mountains';
op3 = '3.Vindhya Range';
op4 = '4.The Ural Mountains';

displayQuestion(question, op1, op2, op3, op4, 4);
//-------------------------------  question  dividing border
question = "Which is the only body part that is fully grown from birth?";

op1 = '1.Brain';
op2 = '2.Eyes';
op3 = '3.Heart';
op4 = '4.Lungs';

displayQuestion(question, op1, op2, op3, op4, 2);
// ------------- score displaying part
console.clear();
console.log("-------------------------------------------------------------");
console.log("  !!!CHECK YOUR SCORE!!!  \n");
console.log("Your Score:" + score + " out of 10");
