const promt = require('prompt-sync')({sigint:true});
let num = promt('enter a number:')
let fact = 1;
if (num == 0 || num == 1){
    console.log('factors of a '+ num + 'are' +1);
}else{
    for(i = 1;i <= num;i++){
        if (num % i == 0){
            console.log('factors of a '+ num + ' are ' +i);
        }
    }
}