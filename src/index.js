import getAnswer from './get-answer.js';
import getRandomInt from './get-random-int.js';
import getGcd from './get-gcd.js';

const printWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => getAnswer('May I have your name? ');

const printGreatings = (userName) => {
  console.log(`Hello, ${userName}!`);
};

const printGameDescription = (gameDescription) => {
  console.log(gameDescription);
};

const printQuestion = (askedQuestion) => {
  console.log(`Question: ${askedQuestion}`);
};

const getUsersAnswer = () => getAnswer('Your answer: ');

const printResult = (result, usersAnswer, rightAnswer, userName) => {
  if (result) {
    console.log('Correct!');
  } else {
    console.log(
      `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`,
    );
    console.log(`Let's try again, ${userName}!`);
  }
};

// Check is right answer
const isAnswerRight = (usersAnswer, rightAnswer, userName) => {
  const result = String(usersAnswer) === String(rightAnswer);
  printResult(result, usersAnswer, rightAnswer, userName);

  return result;
};

const printCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  getAnswer,
  getRandomInt,
  getGcd,
  printWelcome,
  getUserName,
  printGreatings,
  printGameDescription,
  printQuestion,
  getUsersAnswer,
  isAnswerRight,
  printResult,
  printCongratulations,
};
