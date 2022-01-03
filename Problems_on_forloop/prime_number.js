const promt = require('prompt-sync')({sigint:true});
let count = 0;
let num = parseInt(promt('enter a number'));
for(i = 1;i <= num;i++){
     if(num % i == 0){
        count += 1;
    }
}
if(count == 2){
    console.log(num +' is a prime number');
}else{
    console.log(num + ' is not a prime number');
}

