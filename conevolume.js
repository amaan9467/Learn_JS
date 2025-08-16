const prompt = require("prompt-sync")();

let radius = parseFloat(prompt("Enter radius of cone: "));
let height = parseFloat(prompt("Enter height of cone: "));
let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height; // formula: Volume - (1/3) × π × radius² × height
console.log(volume);
