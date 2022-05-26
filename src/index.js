import getAnswer from './get-answer.js';
import getRandomInt from './get-random-int.js';
import getGcd from './get-gcd.js';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = getAnswer('May I have your name? ');

  return userName;
};

const greatingsUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

const printGameDescription = (gameDescription) => {
  console.log(gameDescription);
};

const printAskedQuestion = (askedQuestion) => {
  console.log(`Question: ${askedQuestion}`);
};

const getUsersAnswer = () => {
  const usersAnswer = getAnswer('Your answer: ');

  return usersAnswer;
};

const getResult = (usersAnswer, rightAnswer) => String(usersAnswer) === String(rightAnswer);

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

const congratulationsUser = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  getAnswer,
  getRandomInt,
  getGcd,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  getResult,
  printResult,
  congratulationsUser,
};
