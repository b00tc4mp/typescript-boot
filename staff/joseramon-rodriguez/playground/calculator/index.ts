function calculate(op: '+' | '-' | '*' | '/', x: number, y: number) {
    switch (op) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
    }
}

console.log(calculate('+', 1, 1))
//2

console.log(calculate('-', 1, 1))
//0

console.log(calculate('*', 1, 1))
//1

console.log(calculate('/', 2, 1))
//2