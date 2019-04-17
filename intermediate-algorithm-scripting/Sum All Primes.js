function sumPrimes(num) {
  let primesArr = [2];
  for(let i = 3; i <= num; i += 2) {
    if(primesArr.every(function(prime){ return i % prime != 0})) {
      primesArr.push(i);
    }
  }
  return primesArr.reduce((a, b) => a + b, 0);
}

sumPrimes(10);
