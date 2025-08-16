const prompt = require("prompt-sync")();
let num = prompt("enter");
if(num % 4 == 0 && num % 8 ==0){
    console.log("divisible");
}else{
    console.log("not divisible");
}