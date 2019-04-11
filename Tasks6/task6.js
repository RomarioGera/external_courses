function reduce(arr, callback, initialValue) {
    var i, index = 0,
        previousValue;
    if (initialValue != undefined) {
        previousValue = initialValue;
        index = 0;
    }
    else { previousValue = arr[0];
         index = 1;
    };
    for (i = index; i < arr.length; i = i + 1) {
        previousValue = callback(previousValue, arr[i], i, arr);
    }
    return previousValue;
}; 
