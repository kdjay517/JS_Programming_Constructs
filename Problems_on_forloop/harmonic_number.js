const promt = require('prompt-sync')({sigint:true});
let harmonic_num;
let num = parseInt(promt("enter a number:"));
if(num >= 2){
    for(i = 2;i <= num;i++){
        harmonic_num = parseFloat(1 + 1 / num);
    }
}else if(num = 0){
    console.log("enter number greater than zero")
}else{
    console.log("harmonic num is " + 1);
}
console.log("harmonic num is " +harmonic_num);