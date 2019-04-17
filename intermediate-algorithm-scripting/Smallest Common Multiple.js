function smallestCommons(arr) {
  let myArr = [];
  arr.sort(function(a, b) {
    return b - a;
  });
  for (let i = arr[0]; i >= arr[1]; i--) {
    myArr.push(i);
  }
  
  let quot = 0;
  let loop = 1;
  let n;

  do {
    quot = myArr[0] * loop * myArr[1];
    for (n = 2; n < myArr.length; n++) {
      if (quot % myArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== myArr.length);
  return quot;
}

smallestCommons([1,5]);
