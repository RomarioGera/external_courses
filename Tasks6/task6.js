function reduce(arr, callback, startValue) {
  var i, length = arr.length, result = startValue;
  for (i = 0; i < length; i = i + 1) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};
