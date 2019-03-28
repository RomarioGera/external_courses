function slice([array], begin, end) {
    var arrayCopy = [array];
    if (end == undefined) {
        end = 0;
    } else {
        for (i = begin; i < end; i++) {
            arrayCopy[i]++; 
            var result = arrayCopy[i];
        }
    } return result;
}
