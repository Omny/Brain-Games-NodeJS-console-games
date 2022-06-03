import { getRandomInt, isPrime } from '../helpers.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const maxRandomNumber = 100;
  const question = getRandomInt(maxRandomNumber);
  const isQuestionPrime = isPrime(question);
  const answer = isQuestionPrime ? 'yes' : 'no';

  return [question, answer];
};

const brainPrimeGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainPrimeGame;
