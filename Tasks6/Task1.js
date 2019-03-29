function slice(array, begin, end) {
    var arrayCopy = [];
    if (end == undefined) {
        end = 0;
    } else {
        for (var i = begin; i < end; i++) {
            arrayCopy.push(array[i]);
        }
    } return arrayCopy;
}
