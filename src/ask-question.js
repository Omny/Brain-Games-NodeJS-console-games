import readlineSync from 'readline-sync';

const askQuestion = (questionToAsk) => readlineSync.question(questionToAsk);
export default askQuestion;
