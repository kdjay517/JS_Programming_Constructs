const promt = require('prompt-sync')({sigint: true});
let digit = promt('enter a digit:');
if(digit < 0 || digit > 9){
    console.log("Enter a digit between(0-9)");
}
else if(digit == 1){
    console.log('one');
}
else if(digit == 2){
    console.log('two');
}
else if(digit == 3){
    console.log('three');
}
else if(digit == 4){
    console.log('four');
}
else if(digit == 5){
    console.log('five');
}
else if(digit == 6){
    console.log('six');
}
else if(digit == 7){
    console.log('seven');
}
else if(digit == 8){
    console.log('eight');
}
else{
    console.log('nine');
}
    

