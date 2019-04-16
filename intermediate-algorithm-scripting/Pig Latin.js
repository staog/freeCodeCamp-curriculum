function translatePigLatin(str) {
  let arr = str.split('');
  let splicedArr = [];
  switch(arr[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      arr.push('way');
      return arr.join('');
    }
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      splicedArr = arr.splice(0, i);
      return arr.concat(splicedArr).join('') + "ay";
    }
  }
  return str + "ay";
}

translatePigLatin("consonant");
