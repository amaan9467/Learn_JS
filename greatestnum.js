const prompt = require("prompt-sync")();

let n1 = Number(prompt("Enter"));
let n2 = Number(prompt("Enter"));
let n3 = Number(prompt("Enter"));

if (n1 > n2 && n1 > n3) {
    console.log("N1");
} 
else if (n2 > n1 && n2 > n3) {
    console.log("N2");
} 
else {
    console.log("N3");
}
