function f(a, b) {
    var aLenght = a.length();
    if (a.length() > b) {
        var newString = aLenght - 5;
        var shortString = a.replace(newString);
        var result = shortString + "«…»";
    }
    return result;
}
