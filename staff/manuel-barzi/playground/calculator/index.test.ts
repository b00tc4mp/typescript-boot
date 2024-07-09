import calculate from "./index";

console.info("TEST calculate");

console.info("CASE add 1 plus 2");
console.assert(calculate("add", 1, 2) === 3, "add 1 plus 2 results in 3");

console.info("CASE sub 1 minus 2");
console.assert(calculate("sub", 1, 2) === -1, "sub 1 minus 2 results in -1");

console.info("CASE mul 1 by 2");
console.assert(calculate("mul", 1, 2) === 2, "mul 1 by 2 results in 2");

console.info("CASE div 1 by 2");
console.assert(calculate("div", 1, 2) === .5, "div 1 by 2 results in .5");