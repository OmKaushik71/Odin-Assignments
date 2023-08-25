function analyzeArray (array) {
  if (!isValidArray(array)) {
    return 'not an array';
  }
  const sortedArr = array.sort((a, b) => a - b);
  const length = array.length;
  const average = array[Math.floor(length / 2)];
  const min = array[0];
  const max = array[length - 1];
  return { average, min, max, length };
}
function isValidArray (array) {
  if (Array.isArray(array)) {
    for (const item of array) {
      if (typeof item !== 'number') {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

module.exports = analyzeArray;
