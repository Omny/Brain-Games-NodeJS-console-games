import {
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
} from '../src/index.js';

// How to play
const gameDescription = 'Find the greatest common divisor of given numbers.';

const whatToAsk = () => {
  const maxNumber = 10;
  const firstNumber = getRandomInt(maxNumber);
  const secondNumber = getRandomInt(maxNumber);
  const questionStr = `${firstNumber} ${secondNumber}`;
  printAskedQuestion(questionStr);
  const resultNumber = getGcd(firstNumber, secondNumber);
  return resultNumber;
};

// Check right answer
const isRightAnswer = (userName) => {
  // Ask question
  const askedQuestion = whatToAsk();
  // Get entered answer
  const usersAnswer = getUsersAnswer();
  // Get right Answer
  const rightAnswer = askedQuestion;
  // Check answer
  const result = getResult(usersAnswer, rightAnswer);
  printResult(result, usersAnswer, rightAnswer, userName);

  return result;
};

// Start game
const brainGcdGame = () => {
  welcome();
  const userName = getUserName();
  greatingsUser(userName);
  printGameDescription(gameDescription);

  // Play rounds
  let rightAnswers = 0;
  const maxRounds = 3;
  do {
    const result = isRightAnswer(userName);
    if (result) {
      rightAnswers += 1;
    } else {
      break;
    }
  } while (rightAnswers < maxRounds);

  if (rightAnswers === maxRounds) {
    congratulationsUser(userName);
  }
};

export default brainGcdGame;
