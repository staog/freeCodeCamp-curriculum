function largestOfFour(arr) {
  // You can do this!
  let myArr = [];
  let biggestNum = -100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > biggestNum) {
        biggestNum = arr[i][j];
      }
    }
    myArr.push(biggestNum);
    biggestNum = -100;
  }
  return myArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
