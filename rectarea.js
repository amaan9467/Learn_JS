const prompt = require("prompt-sync")();

let width = parseFloat(prompt("Enter width of rectangle: "));
let height = parseFloat(prompt("Enter height of rectangle: "));
let area = width * height;

console.log(area);
