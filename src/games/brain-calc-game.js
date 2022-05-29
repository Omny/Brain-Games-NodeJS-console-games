import { getRandomInt, playGame } from '../index.js';

// How to play
const gameDescription = 'What is the result of the expression?';

// Game logic
const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const firstNumber = getRandomInt(maxRandomNumber);
  const secondNumber = getRandomInt(maxRandomNumber);
  const maxOperatorRandomNumber = 3;
  const operatorNumber = getRandomInt(maxOperatorRandomNumber);
  let arithmeticOperator = '';
  let answer = 0;
  if (operatorNumber === 1) {
    arithmeticOperator = '+';
    answer = firstNumber + secondNumber;
  } else if (operatorNumber === 2) {
    arithmeticOperator = '-';
    answer = firstNumber - secondNumber;
  } else {
    arithmeticOperator = '*';
    answer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${arithmeticOperator} ${secondNumber}`;

  return [question, answer];
};

// Start game
const brainCalcGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainCalcGame;
