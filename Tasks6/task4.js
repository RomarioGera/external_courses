function filter(arr, callback) {
    var i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
      if (callback(arr[i], i, arr)) {
        results.push(arr[i]);
      }
    }
    return results;
  };
