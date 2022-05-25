import { getAnswer } from '../index.js';

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

const getResult = (usersAnswer, rightAnswer, userName) => {
  if (usersAnswer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return usersAnswer === rightAnswer;
};

const congratulationsUser = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  getResult,
  congratulationsUser,
};
