import {
  getRandomInt,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  isRightAnswer,
  congratulationsUser,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestionAndGetAnswer = () => {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  printAskedQuestion(numberToAsk);
  const resultStr = numberToAsk % 2 === 0 ? 'yes' : 'no';

  return resultStr;
};

// Start game
const brainEvenGame = () => {
  welcome();
  const userName = getUserName();
  greatingsUser(userName);
  printGameDescription(gameDescription);

  // Play rounds
  let rightAnswers = 0;
  const maxRounds = 3;
  do {
    // Ask question and get right answer
    const rightAnswer = askQuestionAndGetAnswer();
    // Get entered answer
    const usersAnswer = getUsersAnswer();
    // Check is right answer
    const result = isRightAnswer(usersAnswer, rightAnswer, userName);
    if (result) {
      rightAnswers += 1;
    } else {
      break;
    }
  } while (rightAnswers < maxRounds);

  if (rightAnswers === maxRounds) {
    congratulationsUser(userName);
  }
};

export default brainEvenGame;
