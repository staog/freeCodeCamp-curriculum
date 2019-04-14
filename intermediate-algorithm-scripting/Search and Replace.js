function myReplace(str, before, after) {
  let myArr = str.split(" ");
  let upperAfter = "";
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === before) {
      if (/[A-Z]/.test(before[0])) {
        upperAfter = after[0].toUpperCase() + after.substring(1);
        myArr.splice(i, 1, upperAfter);
        return myArr.join(" ");
      } else {
          myArr.splice(i, 1, after);
          return myArr.join(" ");
      }
    }
  
  }
}

myReplace("This has a spellngi error", "spellngi", "spelling");
