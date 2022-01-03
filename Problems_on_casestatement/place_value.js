const promt = require("prompt-sync")({sigint:true});
let value = parseInt(promt("enter a value:"));
switch(value){
    case 1:
        text = 'ones';
        break;
    case 10:
        text = 'tens';
        break;
    case 100:
        text = 'hundreds';
        break;
    case 1000:
        text = 'thousand';
        break;
    default:
        text = 'enter a correct value';
        break;
}
console.log(text);