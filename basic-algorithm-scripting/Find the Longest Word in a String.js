function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longestWordLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length;
    }
  }
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
