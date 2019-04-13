function sumAll(arr) {
  arr.sort(function(a, b){return a - b});
  let a = arr[0];
  let b = arr[1];
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

sumAll([4, 1]);
