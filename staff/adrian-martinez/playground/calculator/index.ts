let op: string = "";
let a: number = 0;
let b: number = 0;

console.log(a);

function calculate(op: "add" | "sub" | "mul" | "div", a: number, b: number){
    
    if(op === "add") return a + b;

    else if(op === "sub") return a - b;

    else if(op === "mul") return a * b;

    else if(op === "div") return a / b;

}

export default calculate;