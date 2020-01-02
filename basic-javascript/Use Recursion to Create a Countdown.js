//Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const myArr = countdown(n - 1);
    myArr.unshift(n);
    return myArr;
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
