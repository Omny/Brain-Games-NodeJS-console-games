import {
  getRandomInt,
  isEven,
  playGame,
} from '../index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const question = getRandomInt(maxRandomNumber);
  const isQuestionEven = isEven(question);
  const answer = isQuestionEven ? 'yes' : 'no';

  return [question, answer];
};

// Start game
const brainEvenGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainEvenGame;
