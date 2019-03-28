function wordInsert(string, insert, num){
    var strSeparation = string.split([' ']);
    var stringPart1 = string.slice(strSeparation[0], strSeparation[num]);
    var stringPart2 = string.slice(strSeparation[num]);
    return stringPart1 + insert + stringPart2; 
}
