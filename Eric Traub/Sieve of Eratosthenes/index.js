function sieveOfEratosthenes(num) {
  const primes = [];
  const results = [];
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] === true) {
      results.push(i);
    }
  }
  return results;
}

console.log(sieveOfEratosthenes(20));