const prompt = require("prompt-sync")();

let radius = parseFloat(prompt("Enter radius of circle: "));
let area = Math.PI * Math.pow(radius, 2);
console.log(area);
