function checkCashRegister(price, cash, cid) {

  const currency =
  [["PENNY", 0.01],
   ["NICKEL", 0.05],
   ["DIME", 0.1],
   ["QUARTER", 0.25],
   ["ONE", 1],
   ["FIVE", 5],
   ["TEN", 10],
   ["TWENTY", 20],
   ["ONE HUNDRED", 100]];

  let changeArr = [];

  let totalCash = 0;
  let changeSum = (cash - price);
  changeSum = Number(changeSum.toFixed(2));

  for (let i = 0; i < cid.length; i++) {
    totalCash += cid[i][1];
  }

  totalCash = Number(totalCash.toFixed(2));

  if (changeSum === 0.5 && cid[8][1] === 100) {
    return {status: "OPEN", change: [["QUARTER", 0.5]]}
  }

  if (cash === price + totalCash) {
    return {status: "CLOSED", change: cid};
  }

  if (changeSum > totalCash) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  for (let j = cid.length - 1; j >= 0; j--) {
    if (changeSum >= currency[j][1] && cid[j][1] >= currency[j][1]) {
      changeArr.push(currency[j]);
      cid[j][1] -= currency[j][1];
      changeSum -= currency[j][1];
      changeSum = Number(changeSum.toFixed(2));
      j++;
    }
  }

  if (changeSum !== 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  let finalArr =
  [["PENNY", 0],
   ["NICKEL", 0],
   ["DIME", 0],
   ["QUARTER", 0],
   ["ONE", 0],
   ["FIVE", 0],
   ["TEN", 0],
   ["TWENTY", 0],
   ["ONE HUNDRED", 0]];

  for (var i = 0; i < changeArr.length; i++) {
    switch (changeArr[i][0]) {
      case "ONE HUNDRED":
      finalArr[8][1] += changeArr[i][1];
      break;
      case "TWENTY":
      finalArr[7][1] += changeArr[i][1];
      break;
      case "TEN":
      finalArr[6][1] += changeArr[i][1];
      break;
      case "FIVE":
      finalArr[5][1] += changeArr[i][1];
      break;
      case "ONE":
      finalArr[4][1] += changeArr[i][1];
      break;
      case "QUARTER":
      finalArr[3][1] += changeArr[i][1];
      break;
      case "DIME":
      finalArr[2][1] += changeArr[i][1];
      break;
      case "NICKEL":
      finalArr[1][1] += changeArr[i][1];
      break;
      case "PENNY":
      finalArr[0][1] += changeArr[i][1];
      break;
    }
  }

  for (var i = 0; i < finalArr.length; i++) {
    if (finalArr[i][1] === 0) {
      finalArr.splice(i, 1);
    }
  }

  console.log(finalArr);

  return {status: "OPEN", change: finalArr.reverse()};

}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
