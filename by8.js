const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
    console.log(`${i} % 8 = ${i % 8}`);
}
