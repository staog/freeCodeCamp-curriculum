function destroyer(arr) {
  // Remove all the values
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        arr.splice(i, 1);
        i = -1;
      }
    }
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
