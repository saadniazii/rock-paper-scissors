let userScore = 0;
let computerScore = 0;
let tiedScore = 0;
let totalScore = userScore + computerScore + tiedScore;

playerSelection = prompt("Please make a choice!");

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  } else {
    return "No choice selected.";
  }
};

const computerSelection = getComputerChoice();

const playRound = (playerChoice, computerChoice) => {
  playerChoice.toLowerCase();
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tiedScore++;
      return "Computer also chose rock. The game is tied!";
    } else if (computerChoice === "paper") {
      computerScore++;
      return "Computer chose Paper. you lose!";
    } else if (computerChoice === "scissors") {
      userScore++;
      return "Computer chose Scissors. You won!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      ++userScore;
      return "Computer chose rock. You won!";
    } else if (computerChoice === "paper") {
      ++tiedScore;
      return "Computer also chose Paper. Its a draw!";
    } else if (computerChoice === "scissors") {
      ++computerScore;
      return "Computer chose scissors. You lose!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      ++computerScore;
      return "Computer chose rock. You lose!";
    } else if (computerChoice === "paper") {
      ++userScore;
      return "Computer chose paper. You win!";
    } else if (computerChoice === "scissors") {
      ++tiedScore;
      return "Computer also chose scissors. It's a draw!";
    }
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    if (totalScore <= 5) {
      playerSelection = prompt("Please make a choice!"); // open the blank prompt window
      playRound(playerSelection, computerSelection);
    }
  }

  if (userScore > computerScore) {
    console.log("User wins!");
  } else if (computerScore > userScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a tie!");
  }
};

game();
