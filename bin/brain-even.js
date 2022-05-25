#!/usr/bin/env node
import { askQuestion, getRandomInt } from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = askQuestion('May I have your name? ');
console.log(`Hello, ${userName}!`);
// Start game
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let rightAnswers = 0;
while (rightAnswers < 3) {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  // Ask question
  console.log(`Question: ${numberToAsk}`);
  const isNumberEven = numberToAsk % 2 === 0 ? 'yes' : 'no';
  // Get answer
  const enteredEven = askQuestion('Your answer: ');
  // Check answer
  if (isNumberEven === enteredEven) {
    rightAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`${enteredEven} is wrong answer ;(. Correct answer was ${isNumberEven}.`);
    console.log(`Let's try again, ${userName}!`);
  }
}
// End game
console.log(`Congratulations, ${userName}!`);
