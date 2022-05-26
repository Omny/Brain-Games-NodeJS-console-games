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
const gameDescription = 'What is the result of the expression?';

const askQuestionAndGetAnswer = () => {
  const maxNumber = 100;
  const firstNumber = getRandomInt(maxNumber);
  const secondNumber = getRandomInt(maxNumber);
  const maxOperatorRandomNumber = 2;
  const operatorNumber = getRandomInt(maxOperatorRandomNumber);
  let arithmeticOperator = '';
  let resultNumber = 0;
  if (operatorNumber === 0) {
    arithmeticOperator = '+';
    resultNumber = firstNumber + secondNumber;
  } else if (operatorNumber === 1) {
    arithmeticOperator = '-';
    resultNumber = firstNumber - secondNumber;
  } else {
    arithmeticOperator = '*';
    resultNumber = firstNumber * secondNumber;
  }
  const arithmeticOperationStr = `${firstNumber} ${arithmeticOperator} ${secondNumber}`;
  printAskedQuestion(arithmeticOperationStr);

  return resultNumber;
};

// Start game
const brainCalcGame = () => {
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

export default brainCalcGame;
