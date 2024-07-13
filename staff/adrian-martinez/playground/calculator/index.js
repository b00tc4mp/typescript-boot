"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var op = "";
var a = 0;
var b = 0;
console.log(a);
function calculate(op, a, b) {
    if (op === "add")
        return a + b;
    else if (op === "sub")
        return a - b;
    else if (op === "mul")
        return a * b;
    else if (op === "div")
        return a / b;
}
exports.default = calculate;
