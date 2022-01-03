const prompt = require('prompt-sync')({sigint:true});

function checkPrime(num){
    let flag = 1;
if(num == 1){
    console.log("Its not a prime number")
}
else{
    for(i = 2; i <= num/2; i++){
        let prime = num % i;
        if(prime == 0){
            flag = 0;
            break;
        }
        if(prime != 0){
            flag = 1;
        }
    }
    if(flag == 0){
        console.log("Its not a prime number");
    }
    else{
        console.log("Its a prime number");
        true;
    }
}
}

function checkPalindrome(num){
    let temp = num;
    let rev = 0;
    while(num > 0){
        let rem = num % 10;
        rev = (rev * 10)+rem;
        num = num/10;
    }
    if(rev == temp){
        console.log("Its Palindrome Number");
    }
    else{
        console.log("Its not a Palindrome Number");
    }
}
const num = parseInt(prompt('Enter a number to check whether it is prime and its palindrome is prime or not '));

checkPrime(num);

checkPalindrome(num);