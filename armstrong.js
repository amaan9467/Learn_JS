const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let len = num.length;
let sum = 0;

for (let digit of num) {
    sum += parseInt(digit) ** len;
}

if (parseInt(num) === sum) {
    console.log(`${num} is an Armstrong number`);
} else {
    console.log(`${num} is NOT an Armstrong number`);
}
