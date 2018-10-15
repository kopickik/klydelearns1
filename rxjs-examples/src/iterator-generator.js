(function() {
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }

  for (let n of fibonacci()) {
    console.dir(n);
    if (n >= 1000000) break;
  }
})();
