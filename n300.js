const prompt = require("prompt-sync")();

let sum = 0;
while (true) {
    let num = parseInt(prompt("Enter"));

    sum += num;

    if (num > 300) {
        break;
    }
}

console.log(sum);
