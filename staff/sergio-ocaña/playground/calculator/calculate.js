var opHandler = {
    add: function (a, b) { return a + b; },
    sub: function (a, b) { return a - b; },
    mul: function (a, b) { return a * b; },
    div: function (a, b) { return a / b; }
};
function calculate(op, a, b) {
    var formule = opHandler[op];
    return formule(a, b);
}
console.log(calculate('add', 1, 2));
//3
console.log(calculate('sub', 1, 2));
// -1
console.log(calculate('mul', 1, 2));
// 2
console.log(calculate('div', 1, 2));
//0,5
