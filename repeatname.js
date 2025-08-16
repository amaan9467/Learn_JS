const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let repeatedName = "";

for (let i = 0; i < 20; i++) {
    repeatedName += name + " ";
}

repeatedName = repeatedName.trim();
console.log(repeatedName);