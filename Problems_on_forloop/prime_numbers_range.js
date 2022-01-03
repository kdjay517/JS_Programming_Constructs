const promt = require('prompt-sync')({sigint:true});
let num = parseInt(promt('enter a number:'));
let count;
let j = 1;
while(j <= num){
    count = 0;
    for(i = 1;i <= j;i++){
        if(j%i == 0){
            count += 1;
        }
    }
    if(count == 2){
        console.log(j);
    }
    j ++;
}
