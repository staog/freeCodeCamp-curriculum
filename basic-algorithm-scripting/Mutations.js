function mutation(arr) {
  var firstStr = arr[0].toLowerCase();
  var secondStr = arr[1].toLowerCase();
  for (var i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
