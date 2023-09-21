let userScore = 0;
let computerScore = 0;
let tiedScore = 0;
let totalScore = userScore + computerScore + tiedScore;

const button = document.querySelectorAll("button");
const winLoseDraw = document.querySelector("#win-lose-draw");
const result = document.querySelector("#result");

button.forEach((buttons) =>
  buttons.addEventListener("click", (event) => {
    buttonClicked(event);
  })
);

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

const buttonClicked = (event) => {
  const computerSelection = getComputerChoice();
  const playerChoice = event.target.value;
  playRound(playerChoice, computerSelection);
};

const playRound = (playerChoice, computerChoice) => {
  playerChoice.toLowerCase();
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tiedScore++;
      winLoseDraw.textContent = "Computer also chose rock. The game is tied!";
    } else if (computerChoice === "paper") {
      computerScore++;
      winLoseDraw.textContent = "Computer chose Paper. you lose!";
    } else if (computerChoice === "scissors") {
      userScore++;
      winLoseDraw.textContent = "Computer chose Scissors. You won!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      ++userScore;
      winLoseDraw.textContent = "Computer chose rock. You won!";
    } else if (computerChoice === "paper") {
      ++tiedScore;
      winLoseDraw.textContent = "Computer also chose Paper. Its a draw!";
    } else if (computerChoice === "scissors") {
      ++computerScore;
      winLoseDraw.textContent = "Computer chose scissors. You lose!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      ++computerScore;
      winLoseDraw.textContent = "Computer chose rock. You lose!";
    } else if (computerChoice === "paper") {
      ++userScore;
      winLoseDraw.textContent = "Computer chose paper. You win!";
    } else if (computerChoice === "scissors") {
      ++tiedScore;
      winLoseDraw.textContent = "Computer also chose scissors. It's a draw!";
    }
  }
};

const game = () => {
  if (userScore > computerScore) {
    result.textContent = "User wins!";
  } else if (computerScore > userScore) {
    result.textContent = "Computer Wins!";
  } else if (tiedScore > userScore && computerScore) {
    result.textContent = "It's a tie!";
  }
};

game();
