function reduce(arr, callback, initialValue) {
    var i, condition, prV,
        previousValue = prV;
    if (initialValue != undefined) {
        prV = initialValue;
        condition = 1
    }
    else { prV = arr[0] };
    for (i = condition; i < arr.length; i = i + 1) {
        previousValue = callback(previousValue, arr[i], i, arr);
    }
    return previousValue;
};
