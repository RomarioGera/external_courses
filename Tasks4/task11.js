function countCharacters(value) {
    var string = value.split('');
    var sums = {};
    for (var i = 0; i < string.length; i++) {
        var e = string[i];
        sums[e] = !sums[e] ? 1 : sums[e] + 1;
    } 
    return sums;
}
