//SELECT 
let roundsDiv = document.querySelector('.rounds');
let diceImage = document.querySelector('#dice');
let headers = document.querySelectorAll('header');
let mains = document.querySelectorAll('main');
let footers = document.querySelectorAll('footer');



//startValues 

let round = 0;
let player1Score = 0;
let player2Score = 0;
let turn = 1;

//AskForNames

askForNames();

function askForNames() {
    let player1 = prompt('Enter player1 name')
    let player2 = prompt('Enter player2 name')
    headers[0].innerHTML = player1;
    headers[1].innerHTML = player2;

    rollDice();
}

//DisplayScore

function displayScore(dice) {
    if (turn === 1) {
        mains[0].innerHTML = dice;
        player1Score+=dice;
        footers[0].innerHTML = "Total : "+player1Score;
        turn++;
        rollDice();
    } else {
        mains[1].innerHTML = dice;
        player2Score+=dice;
        footers[1].innerHTML = "Total : "+player2Score;
        turn--;
        round++;
        roundsDiv.innerHTML = round;
        if (round < 4) {
            rollDice();
        }else{
            displayWinner()
        }
    }
}

//DisplayWinner

function displayWinner() {
    if (player1Score > player2Score) {
        mains[0].style.background = "olive";
    } else if(player1Score < player2Score){
        mains[1].style.background = "olive";
    }else {
        mains[0].style.background = "olive";
        mains[1].style.background = "olive";
    }
}
    
  //RollDice

function rollDice() {
    let counter = 0;
    let loop = setInterval(function(){
        let rand = Math.ceil(Math.random()*6);
        counter++;
        diceImage.setAttribute('src',`dice${rand}.png`);
        if (counter > 30) {
            clearInterval(loop);
            displayScore(rand);
        }
    },30)
}

