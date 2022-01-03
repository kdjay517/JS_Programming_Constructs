console.log('think a number between 0 - 100');
const promt = require('prompt-sync')({sigint:true});
let min = 0;
let max = 100;
while (min != max){
    avg = (min + max)/2;
    let num = parseInt(promt('if the number less than average '+ avg + 'press 1 or press 2 for above the average:'));
    if (num == 1){
        max = (max + min)/2;
    }
    else if(num == 2){
        min = (max + min)/2;
    }else{
        max = avg;
        min = avg;
    }
}
console.log('magic number found and is '+ avg);