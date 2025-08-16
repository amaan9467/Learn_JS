const prompt = require("prompt-sync")();

let str = prompt("Enter").trim();
let words = str.split(" ").filter(word => word.length > 0);
console.log(words.length);
