import { Calculator } from "./calculator.js";

let x = 2;
let y = 3;
let calculator = new Calculator();

console.log(`x + y = ${calculator.add(x, y)}`);
console.log(`x - y = ${calculator.sub(x, y)}`);
console.log(`x * y = ${calculator.mul(x, y)}`);
console.log(`x / y = ${calculator.div(x, y)}`);