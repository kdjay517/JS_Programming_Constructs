console.log('enter \n 1. Feet_to_Inch \n 2. Inch_to_Feet \n 3. Feet_to_Meter \n 4. Meter_to_Feet');
const promt = require('prompt-sync')({sigint:true});
let choice = parseInt(promt("enter your choice of conversion:"));

switch(choice){
    case 1:
        let feet = parseFloat(promt('enter no of feets:'));
        let conversion = feet * 12;
        console.log(feet + ' feets in inches are '+ conversion);
        break;
    case 2:
        let inches = parseFloat(promt('enter no of inches:'))
        let conversion1 = parseFloat(inches / 12);
        console.log(inches + " inches in feets are " + conversion1);
        break;
    case 3:
        let feet1 = parseFloat(promt('enter no of feets:'))
        let conversion2 = parseFloat(feet * 0.3048);
        console.log(feet + " feets in meters are " + conversion2);
        break;
    case 4:
        let meters = parseFloat(promt('enter no of meters:'))
        let conversion3 = parseFloat(meters/0.3048);
        console.log(meters + " meters in feets are " + conversion3);
        break;
    default:
        console.log('enter correct conversion');
        break;
}