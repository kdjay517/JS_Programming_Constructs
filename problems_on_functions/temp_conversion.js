var prompt = require('prompt-sync')({sigint:true});

function degToFahre(degree){
    let degreeToFahrenheit = (degree * 9/5) + 32;
    console.log("The fahrenheit value for entered value is "+ degreeToFahrenheit);
}

function fahreToDeg(degree){
    let  FahrenheitTodegree = (fahrenheit - 32) * 5/9;
    console.log("The degree value for entered value is "+ FahrenheitTodegree);
}

let convert = parseInt(prompt("Enter \n1. to convert degree celcius to fahrenheit \n"+
                                       "2. to convert fareh  to celcius  "));

switch(convert){

    case 1:{
   let degree = parseInt(prompt("Enter degree to convert to fahrenheit "));
   if(degree >= 0 && degree <= 100){
    degToFahre(degree);
    break;
   }
   else
   console.log("Enter value between o to 100 degree");
   break;
   }
    case 2:{
   let fahrenheit = parseInt(prompt("Enter degree to convert to fahrenheit "));
   if(fahrenheit >= 32 && fahrenheit <= 212){
    fahreToDeg(degree);
    break;
   }
   else
   console.log("Enter value between 32 to 212 fahrenheit");
   break;
   }
   default:
            console.log("Enter valid input 1 or 2");
    
}