getMaxOfArray(arr);
var arr = [1, 2, 3, 456];

function getMaxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

