import {
  getRandomInt,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  isAnswerRight,
  congratulationsUser,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const askQuestionAndGetRightAnswer = () => {
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

  // Play rounds and check is answer right
  let rightAnswers = 0;
  const maxRounds = 3;
  do {
    const rightAnswer = askQuestionAndGetRightAnswer();
    const usersAnswer = getUsersAnswer();
    const result = isAnswerRight(usersAnswer, rightAnswer, userName);
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
