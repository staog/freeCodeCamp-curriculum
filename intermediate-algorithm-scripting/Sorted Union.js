function uniteUnique(arr) {
  let argumentsArr = [];
  let uniqueValuesArr = [];
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        argumentsArr.push(arguments[i][j]);
      }
    }
  }
  for (let i = 0; i < argumentsArr.length; i++) {
    if (uniqueValuesArr.indexOf(argumentsArr[i]) === -1) {
      uniqueValuesArr.push(argumentsArr[i]);
    }
  }
  return uniqueValuesArr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
