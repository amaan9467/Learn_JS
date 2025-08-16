const prompt = require("prompt-sync")();

let month = prompt("Enter");
month = month.toLowerCase(); 

if (month === "january"||month === "february"|| month === "march") {
    console.log("Quarter 1");
} 
else if (month === "april"||month === "may"||month === "june") {
    console.log("Quarter 2");
} 
else if (month === "july"|| month === "august"||month === "september") {
    console.log("Quarter 3");
} 
else if (month === "october"|| month === "november"||month === "december") {
    console.log("Quarter 4");
} 
else {
    console.log("Invalid month");
}
