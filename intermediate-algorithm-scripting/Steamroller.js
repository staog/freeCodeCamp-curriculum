function steamrollArray(arr) {
  var newArr = [];
  function isItArray(arg) {
    if (!Array.isArray(arg)) {
      newArr.push(arg);
    } else {
      for (let elem in arg)
        isItArray(arg[elem]);
      }  
  }
  
  arr.forEach(isItArray);
  return newArr;
  
}

steamrollArray([1, [2], [3, [[4]]]]);
