function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let arrOfTruth = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arrOfTruth.push(arr[i]);
    }
  }
  return arrOfTruth;
}

bouncer([1, null, NaN, 2, undefined]);
