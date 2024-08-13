const opHandler = {
    add: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
    mul: (a: number, b: number) => a * b,
    div: (a: number, b: number) => a / b
}

function calculate(op: "add" | "sub" | "mul" | "div", a: number, b: number) {
    const formule = opHandler[op];

    return formule(a, b);
}
export default calculate;