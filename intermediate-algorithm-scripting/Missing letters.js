function fearNotLetter(str) {
  let start = str.charCodeAt(str[0]);
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== String.fromCharCode(start)) {
      return String.fromCharCode(start);
    }
    start++;
  }
}

fearNotLetter("abce");
