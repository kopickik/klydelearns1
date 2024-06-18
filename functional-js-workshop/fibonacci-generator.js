function* fibonacci(n, current = 0, next = 1) {
  if (n === 0) return current;
  yield current;
  yield* fibonacci(n - 1, next, current + next);
}

let test = [...fibonacci(34)]
  .filter((n) => n % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(test);
