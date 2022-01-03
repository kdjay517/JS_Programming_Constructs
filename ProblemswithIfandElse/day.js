const ps = require("prompt-sync");
const prompt = ps();

let date = prompt("Enter date:");
console.log(`Date is ${date}`);

let month = prompt("Enter Month:");
console.log(`Month is ${month}`);

if (date >= 20 &&  date <= 31 && month == 3){
    console.log(true);
}
else if (date >= 1 &&  date <= 30 && month == 4){
    console.log(true);
}
else if (date >= 1 &&  date <= 31 && month == 5){
    console.log(true);
}
else if (date <= 20 && month == 6){
    console.log(true);
}else{
    console.log(false)
}
