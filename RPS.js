function computerPlay(){
    const rps = ['Rock','Paper','Scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie!`;
    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ) {
        playerScore++
        return `You won! ${playerSelection} beats ${computerSelection}.`
    } else {
        computerScore++
        return `You lost. ${computerSelection} beats ${playerSelection}.`
    }
}

function game(num) {
    for (let i = 0; i < num; i++) {
        let playerSelection = prompt("Please choose one of the following: Rock, Paper, or Scissors.");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! You won ${playerScore} out of a possible ${num} games with ${num - (playerScore + computerScore)} ties.`)
    } else if (playerScore < computerScore) {
        console.log(`You lost. You won ${playerScore} out of a possible ${num} games with ${num - (playerScore + computerScore)} ties.`)
    } else {
        console.log(`You tied. You won ${playerScore} out of a possible ${num} games with ${num - (playerScore + computerScore)} ties.`)
    }
}
