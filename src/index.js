import readlineSync from 'readline-sync';

const getAnswer = (questionToAsk) => readlineSync.question(questionToAsk);
export default getAnswer;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function getGcd(firstNumber, secondNumber) {
  let x = firstNumber;
  let y = secondNumber;
  while (y !== 0) y = x % (x = y);

  return x;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

const isAnswerRight = (usersAnswer, answer) => {
  const result = String(usersAnswer) === String(answer);

  return result;
};

// Play logic
const playGame = (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  // Play rounds and check is answer right
  let roundCounter = 0;
  const maxRounds = 3;
  while (roundCounter < maxRounds) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const usersAnswer = getAnswer('Your answer: ');
    const answerCorrectness = isAnswerRight(usersAnswer, answer);
    if (answerCorrectness) {
      roundCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  getRandomInt,
  isEven,
  getGcd,
  isPrime,
  getAnswer,
  playGame,
};
