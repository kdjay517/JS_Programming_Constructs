const d = new Date();
let day = d.getDay();
if (day == 0){
    text = "sunday";
}
else if(day == 1){
    text = "Monday";
}
else if(day == 2){
    text = "Tuesday";
}
else if(day == 3){
    text = "Wednsday";
}
else if(day == 4){
    text = "Thursday";
}
else if(day == 5){
    text = "Friday";
}
else {
    text = "Saturday";
}
console.log(text);