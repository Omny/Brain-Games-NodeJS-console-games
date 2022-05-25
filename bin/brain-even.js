#!/usr/bin/env node
import { askQuestion, getRandomInt, isAnswerRight } from '../index.js';

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
  const askedNumberEven = numberToAsk % 2 === 0 ? 'yes' : 'no';
  // Get answer
  const enteredEven = askQuestion('Your answer: ');
  // Check answer
  if (isAnswerRight(askedNumberEven, enteredEven, userName)) {
    rightAnswers += 1;
  } else {
    rightAnswers = 0;
  }
}
// End game
console.log(`Congratulations, ${userName}!`);
