function factorialize(num) {
  let product = 1;
  let i = 1;
  while (i <= num) {
    product = product * i;
    i++;
  }
  return product;
}

console.log(factorialize(5));
