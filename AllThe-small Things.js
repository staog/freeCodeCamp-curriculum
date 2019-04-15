function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let arr = str.split("");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === " " || arr[i] === "_") {
      arr[i] = "-";
    } else if (arr[i] === arr[i].toUpperCase() && arr[i - 1].match(/[a-z]/) && arr[i] !== "-") {
      arr.splice(i, 0, "-");
    }
  }
  console.log(arr);
  return arr.join("").toLowerCase();
}

spinalCase('AllThe-small Things');
