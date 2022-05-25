#!/usr/bin/env node
import { askUserName, askEven } from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log('Welcome to the Brain Games!');
const userName = askUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let rightAnswers = 0;
while (rightAnswers < 3) {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  console.log(`Question: ${numberToAsk}`);
  const isNumberEven = numberToAsk % 2 === 0 ? 'yes' : 'no';
  const enteredEven = askEven();
  if (isNumberEven === enteredEven) {
    rightAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`${enteredEven} is wrong answer ;(. Correct answer was ${isNumberEven}.`);
    console.log(`Let's try again, ${userName}!`);
  }
}
console.log(`Congratulations, ${userName}!`);
