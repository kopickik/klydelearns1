import { curry } from "ramda";

const add4 = curry((a, b, c, d) => a + b + c + d);

console.log(add4(1, 2, 3, 4));
console.log(add4(1, 5)(9,15));
console.log(add4(1)(2)(3)(4));
console.log(add4(1)(2, 3, 4));
