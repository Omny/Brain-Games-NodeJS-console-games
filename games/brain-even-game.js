import {
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  getResult,
  congratulationsUser,
} from '../src/index.js';
import { getRandomInt } from '../index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getWhatToAsk = () => {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  return numberToAsk;
};

// Check right answer
const getRightAnswer = (numberToAsk) => {
  const isNumberEven = numberToAsk % 2 === 0 ? 'yes' : 'no';
  return isNumberEven;
};

// Start game
const playGame = () => {
  welcome();
  const userName = getUserName();
  greatingsUser(userName);
  printGameDescription(gameDescription);

  let rightAnswers = 0;
  while (rightAnswers < 3) {
  // Ask question
    const askedQuestion = getWhatToAsk();
    printAskedQuestion(askedQuestion);
    // Get entered answer
    const usersAnswer = getUsersAnswer();
    // Get right Answer
    const rightAnswer = getRightAnswer(askedQuestion);
    // Check answer
    const result = getResult(usersAnswer, rightAnswer, userName);
    if (result) {
      rightAnswers += 1;
    } else {
      rightAnswers = 0;
    }
  }
  congratulationsUser(userName);
};

export default playGame;
