//Check for the prime number
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  //Prime number on 10001st position
  function findNthPrime(n) {
    let count = 0;
    let candidate = 1;
  
    while (count < n) {
      candidate++;
      if (isPrime(candidate)) {
        count++;
      }
    }
  
    return candidate;
  }
  
  const result = findNthPrime(10001);
  console.log(`The 10001st prime number is: ${result}`);