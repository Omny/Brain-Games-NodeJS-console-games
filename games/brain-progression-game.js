import {
  getRandomInt,
  getMaxRounds,
  playGame,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const maxRandomFirstNumber = 15;
  const firstNumber = getRandomInt(maxRandomFirstNumber);
  const maxRandomProgressionCoefficient = 5;
  const progressionCoefficient = getRandomInt(maxRandomProgressionCoefficient);
  const numbers = [];
  for (let counter = 1; counter <= progressionLength; counter += 1) {
    if (counter === 1) {
      numbers[counter] = firstNumber;
    } else {
      numbers[counter] = numbers[counter - 1] + progressionCoefficient;
    }
  }
  const answerPosition = getRandomInt(progressionLength);
  const answer = numbers[answerPosition];
  numbers[answerPosition] = '..';
  const question = numbers.join(' ');

  return [question, answer];
};

// Start game
const brainEvenGame = () => {
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

export default brainEvenGame;
