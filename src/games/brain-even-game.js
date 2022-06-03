import { getRandomInt, isEven } from '../helpers.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const question = getRandomInt(maxRandomNumber);
  const isQuestionEven = isEven(question);
  const answer = isQuestionEven ? 'yes' : 'no';

  return [question, answer];
};

const brainEvenGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainEvenGame;
