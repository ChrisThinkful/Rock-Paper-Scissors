function computerPlay(){
    const rps = ['Warrior','Wizard','Ranger'];
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;

playerChoice = document.getElementById('player__choice');
computerChoice = document.getElementById('computer__choice');

playerHero = document.getElementById('player__hero');
computerHero = document.getElementById('opponent__hero');

message = document.getElementById('game__statement');
yourScore = document.getElementById('player__score');
opponentScore = document.getElementById('opponent__score');

choices = document.getElementsByClassName('.btn');

function playRound(e){
    const playerSelection = e.target;
    const computerSelection = computerPlay();

    playerChoice.src = playerSelection.src;
    computerChoice.src = `/Images/${computerSelection}.png`;

    playerHero.innerText = `Your hero: ${playerSelection.alt}`;
    computerHero.innerText = `Your opponent: ${computerSelection}`;

    if(playerSelection.alt == computerSelection) {
        message.innerText = `It's a draw.`
    } else if (
    (playerSelection.alt == 'Warrior' && computerSelection == 'Ranger') ||
    (playerSelection.alt == 'Wizard' && computerSelection == 'Warrior') || 
    (playerSelection.alt == 'Ranger' && computerSelection == 'Wizard')
    ) {
        message.innerText = `You've won the battle!`
        yourScore.innerText = `Your score: ${++playerScore}`;
    } else {
        message.innerText = `You've lost the battle.`
        opponentScore.innerText = `Opponent's score: ${++computerScore}`;
    };
};



const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener('click', playRound));

