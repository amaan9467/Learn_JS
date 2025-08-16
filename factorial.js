const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter"));
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);
