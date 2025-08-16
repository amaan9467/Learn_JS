const prompt = require("prompt-sync")();

let str = prompt("Enter");
let uniqueChars = [];

for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
        uniqueChars.push(ch);
    }
}

console.log(uniqueChars);
