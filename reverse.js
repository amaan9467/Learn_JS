const prompt = require("prompt-sync")();

let str = prompt("enter");
let rev = str.split("").reverse().join("");
console.log(rev);