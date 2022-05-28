import { getRandomInt, getMaxRounds, playGame } from '../src/index.js';

// How to play
const gameDescription = 'What number is missing in the progression?';

// Game logic
const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const maxRandomFirstNumber = 15;
  const firstNumber = getRandomInt(maxRandomFirstNumber);
  const maxRandomCommonDifference = 5;
  const commonDifference = getRandomInt(maxRandomCommonDifference);
  const numbers = [];
  for (let counter = 0; counter < progressionLength; counter += 1) {
    if (counter === 0) {
      numbers[counter] = firstNumber;
    } else {
      numbers[counter] = numbers[counter - 1] + commonDifference;
    }
  }
  const answerPosition = getRandomInt(progressionLength - 1);
  const answer = numbers[answerPosition];
  numbers[answerPosition] = '..';
  const question = numbers.join(' ');

  return [question, answer];
};

// Start game
const brainEvenGame = () => {
  const gameDataArray = [];
  const maxRounds = getMaxRounds();
  for (let roundCounter = 0; roundCounter < maxRounds; roundCounter += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    gameDataArray.push(questionAndAnswer);
  }
  playGame(gameDescription, gameDataArray);
};

export default brainEvenGame;
