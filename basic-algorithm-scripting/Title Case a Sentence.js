function titleCase(str) {
  let myArr = str.toLowerCase().split(' ');
  let titledArr = [];
  for (let i = 0; i < myArr.length; i++) {
    titledArr.push(myArr[i][0].toUpperCase() + myArr[i].slice(1));
  }
  return titledArr.join(' ');
}

titleCase("I'm a little tea pot");
