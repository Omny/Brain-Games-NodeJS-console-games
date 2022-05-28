import readlineSync from 'readline-sync';

const getAnswer = (questionToAsk) => readlineSync.question(questionToAsk);
export default getAnswer;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
export default getRandomInt;

function getGcd(firstNumber, secondNumber) {
  let x = firstNumber;
  let y = secondNumber;
  while (y !== 0) y = x % (x = y);
  return x;
}
export default getGcd;

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
export default isPrime;

const getMaxRounds = () => 3;

const isAnswerRight = (usersAnswer, answer) => {
  const result = String(usersAnswer) === String(answer);

  return result;
};

// Play logic
const playGame = (gameDescription, gameDataArray) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  // Play rounds and check is answer right
  let roundCounter = 0;
  const maxRounds = gameDataArray.length;
  while (roundCounter < maxRounds) {
    const questionAndAnswer = gameDataArray[roundCounter];
    const [question, answer] = questionAndAnswer;
    console.log(`Question: ${question}`);
    const usersAnswer = getAnswer('Your answer: ');
    const result = isAnswerRight(usersAnswer, answer);
    if (result) {
      roundCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (roundCounter === maxRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export {
  getRandomInt,
  getGcd,
  isPrime,
  getAnswer,
  getMaxRounds,
  playGame,
};
