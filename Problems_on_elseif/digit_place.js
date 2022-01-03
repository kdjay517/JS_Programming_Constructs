const promt = require("prompt-sync")({sigint:true});
let digit = promt("Enter a Number:");
if(digit == 1){
    text = "ones"
}
else if(digit == 10){
    text = "tens"
}
else if(digit == 100){
    text = "hundreds"
}
else if(digit == 1000){
    text = "thousands"
}
console.log(text);
