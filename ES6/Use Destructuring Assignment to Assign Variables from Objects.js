const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTemperatureOfTomorrow(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTemperatureOfTomorrow(AVG_TEMPERATURES)); // should be 79
