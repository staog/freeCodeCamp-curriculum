function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const myArr = rangeOfNumbers(startNum, endNum - 1);
    myArr.push(endNum);
    return myArr;
  }
};
