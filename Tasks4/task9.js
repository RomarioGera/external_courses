function wordInsert(string, insert, num){
    var strSeparation = string.split(' ');
     strSeparation.splice(num +1, 0, insert);
     return strSeparation.join(' '); 
}
