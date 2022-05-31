import readlineSync from 'readline-sync';

const getAnswer = (questionToAsk) => readlineSync.question(questionToAsk);

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function getGcd(num1, num2) {
  let gcd;
  if (num2 === 0) {
    gcd = num1;
  } else {
    gcd = getGcd(num2, num1 % num2);
  }
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
  getAnswer,
  getRandomInt,
  isEven,
  getGcd,
  isPrime,
};
