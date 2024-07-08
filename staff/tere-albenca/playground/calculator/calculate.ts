function calculate(op: 'add' | 'sub' | 'mul' | 'div', a: number, b: number) {
    switch (op) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            if (b! == 0) {
                return a / b;

            } else {
                throw new Error('Division by zero is not possible')
            }
        default:
            throw new Error("Invalid operation.");

    }
    // TODO
}

console.log(calculate('add', 1, 2))
// 3

console.log(calculate('sub', 1, 2))
// -1

console.log(calculate('mul', 1, 2))
// 2

console.log(calculate('div', 1, 2))
// 0.5