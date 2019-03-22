function makeFirstCapitalLetter(a) {
  var getFirstLetter = a.charAt(0);
  var makeItCapital = getFirstLetter.toUpperCase();
  var getStringEnding = a.slice(1);
  return makeItCapital + getStringEnding;
}
