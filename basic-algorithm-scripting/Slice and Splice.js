function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let frankenArr = arr2.slice();
  let splicedArr = frankenArr.splice(n, 0, ...arr1);
  console.log(frankenArr);
  return frankenArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
