const prompt = require("prompt-sync")();

let str = prompt("Enter");
let vowelCount = 0;
let vowels = "aeiou";

for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log(vowelCount);