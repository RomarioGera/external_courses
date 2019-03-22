function changeAllFirstLettersToCapital(a) {
    var devide = a.split([' ']);
    for (i = 0; i < devide.length; i++) {
        var getFirstLetter = devide[i].charAt(0);
        var makeItCapital = getFirstLetter.toUpperCase();
        var getStringEnding = devide[i].slice(1);
        var result = result + makeItCapital + getStringEnding;
    }
    return result;
}
