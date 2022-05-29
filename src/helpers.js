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
  let num1 = firstNumber;
  let num2 = secondNumber;
  let gcd = 0;
  do {
    if (num1 === 0) {
      gcd = num2;
      break;
    }
    num2 %= num1;

    if (num2 === 0) {
      gcd = num1;
      break;
    }
    num1 %= num2;
  } while (num1 !== 0 || num2 !== 0);

  return gcd;
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

export {
  getRandomInt,
  isEven,
  getGcd,
  isPrime,
  getAnswer,
};
