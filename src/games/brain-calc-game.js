import { getRandomInt } from '../helpers.js';
import playGame from '../index.js';

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

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const firstNumber = getRandomInt(maxRandomNumber);
  const secondNumber = getRandomInt(maxRandomNumber);
  const operators = ['+', '-', '*'];
  const operatorRandomIndex = getRandomInt(operators.length) - 1;
  const arithmeticOperator = operators[operatorRandomIndex];
  const answer = getExpressionResult(firstNumber, secondNumber, arithmeticOperator);
  const question = `${firstNumber} ${arithmeticOperator} ${secondNumber}`;

  return [question, answer];
};

const brainCalcGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainCalcGame;
