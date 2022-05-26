import {
  getRandomInt,
  getGcd,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  isAnswerRight,
  congratulationsUser,
} from '../src/index.js';

// How to play
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Game logic
const askQuestionAndGetRightAnswer = () => {
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

  // Play rounds and check is answer right
  let rightAnswers = 0;
  const maxRounds = 3;
  do {
    const rightAnswer = askQuestionAndGetRightAnswer();
    const usersAnswer = getUsersAnswer();
    const result = isAnswerRight(usersAnswer, rightAnswer, userName);
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
