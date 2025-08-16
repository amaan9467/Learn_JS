const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");
let nonRepeating = [];

for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
        nonRepeating.push(ch);
    }
}

if (nonRepeating.length >= 2) {
    console.log(`Second non-repeating character is: ${nonRepeating[1]}`);
} else {
    console.log("No second non-repeating character found");
}
