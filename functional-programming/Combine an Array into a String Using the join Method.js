function sentensify(str) {
  // Add your code below this line
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" || arr[i] === "." || arr[i] === ",") {
      arr[i] = " ";
    }
  }

  return arr.join("");

  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
