function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let targetLength = target.length;
  let partToCheck = str.slice(str.length - targetLength, str.length);
  console.log(partToCheck);
  if (target === partToCheck) {
    return true;
  }
  return false;
}

confirmEnding("Open sesame", "same");
