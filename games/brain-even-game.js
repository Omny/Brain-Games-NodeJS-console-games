import {
  getRandomInt,
  getMaxRounds,
  playGame,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const getQuestionAndAnswer = () => {
  const maxNumber = 100;
  const question = getRandomInt(maxNumber);
  const isEven = question % 2 === 0;
  const answer = isEven ? 'yes' : 'no';

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
