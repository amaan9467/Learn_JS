const prompt = require("prompt-sync")();
let num = prompt("enter");
let rem = (num % 17);
if(rem % 2 == 0){
    console.log("even")
}else{
    console.log("odd")
}