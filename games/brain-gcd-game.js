import {
  getRandomInt,
  getGcd,
  getMaxRounds,
  playGame,
} from '../src/index.js';

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
  const questions = [];
  const answers = [];
  const maxRounds = getMaxRounds();
  for (let roundCounter = 1; roundCounter <= maxRounds; roundCounter += 1) {
    const [question, answer] = getQuestionAndAnswer();
    questions[roundCounter] = question;
    answers[roundCounter] = answer;
  }
  playGame(gameDescription, questions, answers);
};

export default brainGcdGame;
