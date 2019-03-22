function lowerCamelCase(str) {
  var arr = str.split(' ');
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  }
  var result = arr.join('');
  return result;
}
