const prompt = require("prompt-sync")();

let fName = prompt("Enter");
let lName = prompt("Enter");

let fullName = fName + " " + lName;

if (fullName.length < 12) {
    console.log(fullName);
} else {
    console.log("Invalid name");
}
