const opHandler = {
    add: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
    mul: (a: number, b: number) => a * b,
    div: (a: number, b: number) => a / b
}

function calculate(op: 'add' | 'sub' | 'mul' | 'div', a: number, b: number) {
    const formule = opHandler[op]

    return formule(a, b)
}

console.log(calculate('add', 1, 2))
//3

console.log(calculate('sub', 1, 2))
// -1

console.log(calculate('mul', 1, 2))
// 2

console.log(calculate('div', 1, 2))
//0,5