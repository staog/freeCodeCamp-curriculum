function pairElement(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "A":
      newArr.push(["A", "T"]);
      break;
      case "T":
      newArr.push(["T", "A"]);
      break;
      case "C":
      newArr.push(["C", "G"]);
      break;
      case "G":
      newArr.push(["G", "C"]);
      break;
    }
  }
  console.log(newArr)
  return newArr;
}

pairElement("GCG");
