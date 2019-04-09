function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) {
    return '';
  }
  let myString = '';
  let i = 1;
  while (i <= num) {
    myString += str;
    i++;
  }
  return myString;
}

repeatStringNumTimes("abc", 3);
