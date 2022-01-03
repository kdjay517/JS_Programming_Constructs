let no_money = 0;
let goal = 200;
let money = 100;
let bets = 0;
while(true){
    bets += 1;
    if (Math.floor(Math.random()*10)%2 == 0){
        money += 1;
        if (money == goal){
            console.log('gambler reached hes goal '+ goal);
            break;
        }
    }else{
        loss = money - 1;
        if (loss == no_money){
            console.log('gambler has no money to play again')
            break;
        }
    }
}
console.log('number of bets are ' +bets);