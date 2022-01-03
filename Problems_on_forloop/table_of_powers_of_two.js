const promt = require('prompt-sync')({sigint:true});
let num = parseInt(promt('enter the number:'));
let power_of_num = Math.pow(2,num);

for (i = 1; i <= power_of_num; i++){
    for(j = 1; j <= 10; j++){
        if(i % 2 == 0 ){
            let b = Math.pow(i,2);
            let c = b * j;
            console.log(b + " X " + j + ' = ' + c );
        }
        
    }
}