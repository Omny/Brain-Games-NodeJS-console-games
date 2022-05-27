function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  const num2 = Math.sqrt(num); // num2 is the square root of num
  for (let i = 2; i <= num2; i += 1) {
    // note that we are working now with the square root
    if (num2 % i === 0) {
      return false;
    }
  }
  return true;
}
export default isPrime;
