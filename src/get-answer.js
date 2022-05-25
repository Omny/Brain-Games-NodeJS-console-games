import readlineSync from 'readline-sync';

const getAnswer = (questionToAsk) => readlineSync.question(questionToAsk);
export default getAnswer;
