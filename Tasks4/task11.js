function countCharacters(value) {
  var string = value,
    sums = {};
  string.split('').map(function (e) {
    sums[e] = !sums[e] ? 1 : sums[e] + 1;
  });
  return sums;
}
