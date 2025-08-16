const prompt = require("prompt-sync")();

let num = parseFloat(prompt("Enter"));
let square = Math.pow(num, 2);
let cube = Math.pow(num, 3);

console.log(square);
console.log(cube);
