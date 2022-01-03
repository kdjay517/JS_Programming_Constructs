const promt = require('prompt-sync')({sigint:true});
let digit = promt("Enter a digit:");
let num = parseInt(digit);
switch(num){
    case 0:
        text = "zero";
        break;
    case 1:
        text = "one";
        break;
    case 2:
        text = "two";
        break;
    case 3:
        text = "three";
        break;
    case 4:
        text = "four";
        break;
    case 5:
        text = "five";
        break;
    case 6:
        text = "six";
        break;
    case 7:
        text = "seven";
        break;
    case 8:
        text = "eight";
        break;
    case 9:
        text = "nine";
        break;
    default :
        text = "Enter a digit between (0-9)"
        break;
}
console.log(text);