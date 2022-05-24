import readlineSync from 'readline-sync';

const username = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
export default username;
