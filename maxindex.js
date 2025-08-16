const prompt = require("prompt-sync")();

let str = prompt("Enter");
let maxIndex = str.length - 1;   // subtracting by -1 because of 0 index  (total length - 1)
console.log(maxIndex);
