import {
  getRandomInt,
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
const gameDescription = 'What is the result of the expression?';

// Game logic
const askQuestionAndGetRightAnswer = () => {
  const maxRandomNumber = 100;
  const firstNumber = getRandomInt(maxRandomNumber);
  const secondNumber = getRandomInt(maxRandomNumber);
  const maxOperatorRandomNumber = 2;
  const operatorNumber = getRandomInt(maxOperatorRandomNumber);
  let arithmeticOperator = '';
  let resultNumber = 0;
  if (operatorNumber === 0) {
    arithmeticOperator = '+';
    resultNumber = firstNumber + secondNumber;
  } else if (operatorNumber === 1) {
    arithmeticOperator = '-';
    resultNumber = firstNumber - secondNumber;
  } else {
    arithmeticOperator = '*';
    resultNumber = firstNumber * secondNumber;
  }
  const strToAsk = `${firstNumber} ${arithmeticOperator} ${secondNumber}`;
  printQuestion(strToAsk);

  return resultNumber;
};

// Start game
const brainCalcGame = () => {
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

export default brainCalcGame;
