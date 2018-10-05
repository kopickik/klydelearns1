module.exports = function getOdds(l, r) {
  var difference = r - l;
  var interval = difference / 2;
  var odds = [];
    function odd(num) { return !!(num % 2 === 1) }
    for (var i = r; i >= l; i--) {
      if (odd(i)) {odds.push(i)}
    }
  return odds.reverse();
}
