/*Score object*/

let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
}; ;

updateScoreElement();

document.querySelector('.js-result').innerHTML = result ;

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties:${score.ties}`;
}
/*function pickComputerMove*/

function pickComputerMove()
{
const randomNumber =  Math.random();
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'scissors';
}

return computerMove;
}
/*function for picking the computer move ends here which was the same for all three--rock, ppr n scissors*/


/*Funtion for player's moves i.e. playGame which has paramter as playerMove */
function playGame(playerMove)
{
const computerMove = pickComputerMove();
let result='';
if(playerMove === 'scissors')
{
        if(computerMove === 'rock'){
        result = 'You lose.';
    }
    else if(computerMove === 'paper'){
        result = 'You win.';
    }
    else if(computerMove === 'scissors'){
        result = 'Tie.';
    }
}
else if(playerMove === 'paper')
{
    if(computerMove === 'rock'){
    result = 'You win.';
    }
    else if(computerMove === 'paper'){
        result = 'Tie.';
    }
    else if(computerMove === 'scissors'){
        result = 'You lose.';
    }
}
else if(playerMove === 'rock')
{
    if(computerMove === 'rock'){
    result = 'Tie.';
    }
    else if(computerMove === 'paper'){
        result = 'You lose.';
    }
    else if(computerMove === 'scissors'){
        result = 'You win.';
    }
}


/*updating the score*/
if(result === 'You win.'){
    score.wins += 1;
}
else if(result === 'You lose.'){
    score.losses += 1;
}
else if(result === 'Tie'){
    score.ties +=  1;
}

updateScoreElement();

localStorage.setItem('score',JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result ;

document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer` ;
}
