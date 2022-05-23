import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};
export default greeting;
