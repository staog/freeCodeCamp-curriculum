function addTogether() {
  let onlyOne = arguments[0];
  if (arguments.length === 1) {
    if (isNaN(arguments[0])) {
      return undefined;
    } else {
      return function(onlyOne) {
        if (typeof onlyOne !== "number") {
          return undefined;
        } else {
            return onlyOne + 2;
        }
      }
    }
  }
  if (typeof arguments[1] !== "number") {
      return undefined;
  }
  return arguments[0] + arguments[1];
}

addTogether(2)([3]);
