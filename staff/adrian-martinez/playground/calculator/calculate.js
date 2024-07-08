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
    else
        return "Error";
}
console.log(calculate("add", 1, 2));
//3
console.log(calculate("sub", 1, 2));
//-1
console.log(calculate("mul", 1, 2));
//2
console.log(calculate("div", 1, 2));
//0.5
