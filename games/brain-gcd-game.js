import {
  getRandomInt, getGcd, getMaxRounds, playGame,
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
  const gameDataArray = [];
  const maxRounds = getMaxRounds();
  for (let roundCounter = 0; roundCounter < maxRounds; roundCounter += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    gameDataArray.push(questionAndAnswer);
  }
  playGame(gameDescription, gameDataArray);
};

export default brainGcdGame;
