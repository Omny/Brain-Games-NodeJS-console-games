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
const isRightAnswer = (usersAnswer, rightAnswer, userName) => {
  const result = String(usersAnswer) === String(rightAnswer);
  printResult(result, usersAnswer, rightAnswer, userName);

  return result;
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
  isRightAnswer,
  printResult,
  congratulationsUser,
};
