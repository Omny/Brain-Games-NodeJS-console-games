import { getRandomInt } from '../helpers.js';
import playGame from '../index.js';

// How to play
const gameDescription = 'What is the result of the expression?';

const getExpressionResult = (firstNumber, secondNumber, arithmeticOperator) => {
  switch (arithmeticOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unexpected arithmetic operator: ${arithmeticOperator}`);
  }
};

// Game logic
const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const firstNumber = getRandomInt(maxRandomNumber);
  const secondNumber = getRandomInt(maxRandomNumber);
  const operators = ['+', '-', '*'];
  const maxOperatorRandomIndex = operators.length;
  const arithmeticOperator = operators[getRandomInt(maxOperatorRandomIndex) - 1];
  const answer = getExpressionResult(firstNumber, secondNumber, arithmeticOperator);
  const question = `${firstNumber} ${arithmeticOperator} ${secondNumber}`;

  return [question, answer];
};

// Start game
const brainCalcGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainCalcGame;
