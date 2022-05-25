import readlineSync from 'readline-sync';

const askUserName = () => readlineSync.question('May I have your name? ');
export default askUserName;
