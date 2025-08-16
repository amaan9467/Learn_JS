const prompt = require("prompt-sync")();

let A = Number(prompt("Enter score of Team A: "));
let B = Number(prompt("Enter score of Team B: "));

if (A > B) {
    console.log("Team A wins!");
} else if (B > A) {
    console.log("Team B wins!");
} else {
    console.log("It's a draw!");
}
