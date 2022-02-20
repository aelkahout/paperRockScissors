

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function computerPlay() {
    const choices = ['Paper', 'Rock', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    playerCheck = capitalize(playerSelection);
    computerCheck = capitalize(computerSelection);

    if (playerCheck == 'Paper') {
        if (computerCheck == 'Rock') {
            console.log('You Win! ' + playerCheck + " beats " + computerCheck);
        } else if (computerCheck == 'Scissors'){
            console.log('You Lose! ' + computerCheck + " beats " + playerCheck);
        } else {
            console.log('Tie');
        }
    }
    if (playerCheck == 'Rock') {
        if (computerCheck == 'Scissors') {
            console.log('You Win! ' + playerCheck + " beats " + computerCheck);
        } else if (computerCheck == 'Paper'){
            console.log('You Lose! ' + computerCheck + " beats " + playerCheck);
        } else {
            console.log('Tie');
        }
    }
    if (playerCheck == 'Scissors') {
        if (computerCheck == 'Paper') {
            console.log('You Win! ' + playerCheck + " beats " + computerCheck);
        } else if (computerCheck == 'Rock'){
            console.log('You Lose! ' + computerCheck + " beats " + playerCheck);
        } else {
            console.log('Tie');
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Choose from Paper, Rock and Scissors");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

