function calculate(op, a, b) {
    switch (op) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            return a / b;
    }
}
export default calculate;
