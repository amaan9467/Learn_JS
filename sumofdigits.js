const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let sum = 0;

for (let digit of num) {
    sum += parseInt(digit);
}

console.log("Sum of digits:", sum);
