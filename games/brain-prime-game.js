import {
  getRandomInt, isPrime, getMaxRounds, playGame,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Game logic
const getQuestionAndAnswer = () => {
  const maxNumber = 100;
  const question = getRandomInt(maxNumber);
  const isQuestionPrime = isPrime(question);
  const answer = isQuestionPrime ? 'yes' : 'no';

  return [question, answer];
};

// Start game
const brainPrimeGame = () => {
  playGame(gameDescription, getQuestionAndAnswer);
};

export default brainPrimeGame;
