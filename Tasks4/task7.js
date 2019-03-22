function f(a, b) {
  var aLenght = a.length;
  if (a.length > b) {
    var result = a.substring(0, b) + '...'
  } else var result = a;
  return result;
}
