import {
  getRandomInt,
  getGcd,
  printWelcome,
  getUserName,
  printGreatings,
  printGameDescription,
  printQuestion,
  getUsersAnswer,
  isAnswerRight,
  printCongratulations,
} from '../src/index.js';

// How to play
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Game logic
const askQuestionAndGetRightAnswer = () => {
  const maxRandomNumber = 9;
  // 0 is not allowed, add 1 to each number
  const firstNumber = getRandomInt(maxRandomNumber) + 1;
  const secondNumber = getRandomInt(maxRandomNumber) + 1;
  const strToAsk = `${firstNumber} ${secondNumber}`;
  printQuestion(strToAsk);
  const resultNumber = getGcd(firstNumber, secondNumber);

  return resultNumber;
};

// Start game
const brainGcdGame = () => {
  printWelcome();
  const userName = getUserName();
  printGreatings(userName);
  printGameDescription(gameDescription);

  // Play rounds and check is answer right
  let round = 0;
  const maxRounds = 3;
  do {
    const rightAnswer = askQuestionAndGetRightAnswer();
    const usersAnswer = getUsersAnswer();
    const result = isAnswerRight(usersAnswer, rightAnswer, userName);
    if (result) {
      round += 1;
    } else {
      break;
    }
  } while (round < maxRounds);

  if (round === maxRounds) {
    printCongratulations(userName);
  }
};

export default brainGcdGame;
