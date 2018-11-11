function primeFactor(number) {
  var primes = [];
  for (var i =0; i < number; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    for (j = 2; j * i < number; j++) {
      primes[i * j] = false;
    }
  }
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] === true) {
      result.push(i);
    }
  }
  return result;
}

primeFactor(20);