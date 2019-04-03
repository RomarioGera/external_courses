function map(arr, callback) {
  var i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    results.push(callback(arr[i], i, arr));
  }
  return results;
};
