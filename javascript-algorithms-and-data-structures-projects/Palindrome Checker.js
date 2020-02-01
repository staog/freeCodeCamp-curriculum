function palindrome(str) {
  let regExp = /[^A-Za-z0-9]/g // or we can use this /[\W_]/g
  let lowerCaseStr = str.toLowerCase().replace(regExp, '');
  let reverseString = lowerCaseStr.split('').reverse().join('');
  
  if (lowerCaseStr === reverseString) {
    return true;
   } else {
    return false;
  }
}

palindrome("Ana voli Milovana");
