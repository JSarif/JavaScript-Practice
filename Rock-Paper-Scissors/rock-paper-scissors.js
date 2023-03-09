
/* 
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

// Creates an arrow function with a userInput parameter. 
const getUserChoice = userInput => {
userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Wrong Input')
  }
};

// creates a function to get the computer choice computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
};

// creates a function to compare user and computer choice using conditional statements
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  };

if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
  return 'The computer won!';
  }  else {
     return 'You won!';
  }
};

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The Computer won!';
  } else {
    return 'You won!';
  }
};

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The Computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'bomb') {
  return 'You won!';
  }
};

// creates a new function for playing the game. Also, user choice can be entered here.
const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

//calls the playGame function
playGame();