function rot13(str) { // LBH QVQ VG!
  let arrOfUniNums = [];
  let arrOfLetters = [];
  for (let i = 0; i < str.length; i++) {
    arrOfUniNums.push(str.charCodeAt(i));
  }
  for (let j = 0; j < arrOfUniNums.length; j++) {
    if (arrOfUniNums[j] >= 65 && arrOfUniNums[j] <= 77) {
      arrOfUniNums[j] += 13;
    } else if (arrOfUniNums[j] > 77) {
      arrOfUniNums[j] -= 13;
    }
  }
  for (let k = 0; k < arrOfUniNums.length; k++) {
    arrOfLetters.push(String.fromCharCode(arrOfUniNums[k]));
  }
  return arrOfLetters.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
