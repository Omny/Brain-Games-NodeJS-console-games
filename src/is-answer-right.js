const isAnswerRight = (correctAnswer, receivedAnswer, userName) => {
  if (correctAnswer === receivedAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${receivedAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return correctAnswer === receivedAnswer;
};
export default isAnswerRight;
