function slice(array, begin, end) {
    var arrayCopy = [];
    if (end == undefined) {
        end = 0;
    }
    if (begin > end && begin < 0 && end < 0) {
        return [];
    }

    if (begin < 0) {
        begin = array.length + begin
    }
    if (end < 0) {
        end = array.length + end
    }

    for (var i = begin; i < end; i++) {
        arrayCopy.push(array[i]);
    }
    return arrayCopy;
}
