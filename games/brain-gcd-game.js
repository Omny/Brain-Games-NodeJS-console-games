import {
  getRandomInt,
  getGcd,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  isRightAnswer,
  congratulationsUser,
} from '../src/index.js';

// How to play
const gameDescription = 'Find the greatest common divisor of given numbers.';

const askQuestionAndGetAnswer = () => {
  const maxNumber = 9;
  // 0 is not allowed, add 1 to each number
  const firstNumber = getRandomInt(maxNumber) + 1;
  const secondNumber = getRandomInt(maxNumber) + 1;
  const questionStr = `${firstNumber} ${secondNumber}`;
  printAskedQuestion(questionStr);
  const resultNumber = getGcd(firstNumber, secondNumber);
  return resultNumber;
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
    // Ask question and get right answer
    const rightAnswer = askQuestionAndGetAnswer();
    // Get entered answer
    const usersAnswer = getUsersAnswer();
    // Check is right answer
    const result = isRightAnswer(usersAnswer, rightAnswer, userName);
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
