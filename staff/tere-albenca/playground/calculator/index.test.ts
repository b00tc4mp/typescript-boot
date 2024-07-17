import calculate from "./index.js";
console.info("TEST CACULATE");

console.info('case 1: add 1 plus 2');
console.assert(calculate("add", 1, 2) === 3, "add 1 plus 2 results in 3");
//3

console.info('case 2: sub 1 minus 2');
console.assert(calculate("sub", 1, 2) === -1, "substract 1 minus 2 results in -1");
//-1

console.info('case 3: mul 1 by 2');
console.assert(calculate("mul", 1, 2) === 2, "multiplicate 1 by 2results in 2");
//2

console.info('case 4: div 1 by 2');
console.assert(calculate("div", 1, 2) === .5, "divide 1 by 2 results in .5");
//0.5

