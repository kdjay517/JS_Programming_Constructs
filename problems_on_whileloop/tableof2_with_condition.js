const promt = require('prompt-sync')({sigint:true});
let num = parseInt(promt('enter a number:'));
let j = 1;
let k = Math.pow(2,num);
while(j <= k){
    i = 1;
    while(i <= 10){
        a = Math.pow(j,2);
        b = i;
        c = a * i;
        if (c < 256){
            console.log(a + ' X '+ b +' = '+ c );
        }else{
            j = k + 1;
        }
        i += 1;
    }
    j += 1;
}