function largestPrimeFactor(number) {
    let i = 2;
    while (i <= number) {
        if (number % i === 0) {
            number /= i; //number = number /i
        } else {
            i++;
        }
    }
    return i;
}

const targetNumber = 600851475143;
const result = largestPrimeFactor(targetNumber);

console.log(`The largest prime factor of: ${targetNumber} is ${result}`);