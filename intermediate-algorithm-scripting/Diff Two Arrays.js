function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2).sort();
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      newArr.splice(i, 2);
      i = -1;
    }
  }
  // Same, same; but different.
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] );
