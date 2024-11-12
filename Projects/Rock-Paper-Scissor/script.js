let playerScore = 0;
let iaScore = 0;

function playGame(player) {
    ia = iaChoice();
    winner = handleWinner(player, ia);
    if (winner === 'player')
        playerScore++;
    else if (winner === 'ia')
        iaScore++;

    document.getElementById('score1').innerHTML = playerScore;
    document.getElementById('score2').innerHTML = iaScore;

    document.getElementById('lastPlayPlayer').setAttribute("src", 'images/' + player + '.png');
    document.getElementById('lastPlayIa').setAttribute("src", 'images/' + ia + '.png');
    document.getElementById('gameResult').innerHTML = 'Winner: ' + winner.toUpperCase();
}

function iaChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return 'rock';
    else if (choice == 1)
        return 'paper';  
    else if (choice == 2)
        return 'scissor';
}

function handleWinner(player, ia) {
    if (player === ia)
        return 'draw'
    if (player === 'rock' && ia === 'scissor')
        return 'player'
    if (player === 'rock' && ia === 'paper')
        return 'ia'
    if (player === 'paper' && ia === 'rock')
        return 'player'
    if (player === 'paper' && ia === 'scissor')
        return 'ia'
    if (player === 'scissor' && ia === 'paper')
        return 'player'
    if (player === 'scissor' && ia === 'rock')
        return 'ia'
}