const prompt = require("prompt-sync")();

let str = prompt("Enter");
let lower = str.toLowerCase();
let reverse = lower.split("").reverse().join("");

if (lower === reverse) {
    console.log("It is a palindrome!");
} else {
    console.log("It is not a palindrome!");
}
