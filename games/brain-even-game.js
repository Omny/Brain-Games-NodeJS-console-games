import {
  getRandomInt,
  printWelcome,
  getUserName,
  printGreatings,
  printGameDescription,
  printQuestion,
  getUsersAnswer,
  isAnswerRight,
  printCongratulations,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const askQuestionAndGetRightAnswer = () => {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  printQuestion(numberToAsk);
  const resultStr = numberToAsk % 2 === 0 ? 'yes' : 'no';

  return resultStr;
};

// Start game
const brainEvenGame = () => {
  printWelcome();
  const userName = getUserName();
  printGreatings(userName);
  printGameDescription(gameDescription);

  // Play rounds and check is answer right
  let round = 0;
  const maxRounds = 3;
  do {
    const rightAnswer = askQuestionAndGetRightAnswer();
    const usersAnswer = getUsersAnswer();
    const result = isAnswerRight(usersAnswer, rightAnswer, userName);
    if (result) {
      round += 1;
    } else {
      break;
    }
  } while (round < maxRounds);

  if (round === maxRounds) {
    printCongratulations(userName);
  }
};

export default brainEvenGame;
