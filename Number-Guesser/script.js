let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Creates a random number between 0-9 as the target guess
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//Compares the human vs computer guesses and checks for the winner
const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanDif = Math.abs(target - humanGuess);
    let compDif = Math.abs(target - computerGuess);

    if (humanDif <= compDif) {
        return true;
    } else {
        return false;
    }
};

//Updates the score based on the winner
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

//Advances the round number
const advanceRound = () => currentRoundNumber++;

