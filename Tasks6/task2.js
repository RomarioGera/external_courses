function some(arr, callback) {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};
