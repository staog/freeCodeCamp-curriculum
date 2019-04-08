function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i].indexOf(elem) < 0) {
        newArr.push(arr[i]);
        arr.shift();
      }
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
