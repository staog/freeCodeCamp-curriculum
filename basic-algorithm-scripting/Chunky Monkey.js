function chunkArrayInGroups(arr, size) {
  var count = 0;
  var newArr = [];
  while (count < arr.length) {
  newArr.push(arr.slice(count, count + size));
  count += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
