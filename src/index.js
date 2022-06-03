import { getAnswer } from './helpers.js';

const playGame = (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  let roundCounter = 0;
  const maxRounds = 3;
  while (roundCounter < maxRounds) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const usersAnswer = getAnswer('Your answer: ');
    const answerCorrectness = String(usersAnswer) === String(answer);
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

export default playGame;
