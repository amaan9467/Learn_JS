const prompt = require("prompt-sync")();

let num = prompt("enter");
if(num % 10 === 0){ 
    console.log("good")
}else{
    console.log("bad")
}
