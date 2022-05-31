import { getRandomInt, getGcd } from '../helpers.js';
import playGame from '../index.js';

// How to play
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Game logic
const getQuestionAndAnswer = () => {
  const maxRandomNumber = 10;
  const firstNumber = getRandomInt(maxRandomNumber);
  const secondNumber = getRandomInt(maxRandomNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  return [question, answer];
};

// Start game
const brainGcdGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainGcdGame;
