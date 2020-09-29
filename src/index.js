
exports.min = function min(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array.length !== 0) {
      if (min > array[i]) min = array[i];
    } else return 0
  }
  return min;
}

exports.max = function max (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let avg = total / array.length;
  return avg;
}
