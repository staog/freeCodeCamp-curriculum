function convertToRoman(num) {
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      result += romanNums[i];
      num -= decimals[i];
    }
  }
   
  return result;

}

convertToRoman(36);
