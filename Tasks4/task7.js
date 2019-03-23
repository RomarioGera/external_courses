function f(a, b) {
  if (a.length > b) {
    var result = a.substring(0, b) + '...'
  } else var result = a;
  return result;
}
