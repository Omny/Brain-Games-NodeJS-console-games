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

  while (num2 !== 0) {
    const temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
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
