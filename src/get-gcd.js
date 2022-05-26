function getGcd(firstNumber, secondNumber) {
  let x = firstNumber;
  let y = secondNumber;
  while (y !== 0) y = x % (x = y);
  return x;
}
export default getGcd;
