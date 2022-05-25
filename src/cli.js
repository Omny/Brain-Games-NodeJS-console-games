import readlineSync from 'readline-sync';

const askUserName = () => {
  const UserName = readlineSync.question('May I have your name? ');
  return UserName;
};
export default askUserName;
