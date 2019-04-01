function some(arr, callback) {
    callback = function (item, i, arr) {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }
}
