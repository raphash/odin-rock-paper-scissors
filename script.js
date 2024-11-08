function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors?");

  // If input is null return.
  if (!choice) return;

  while (true) {
    // Convert to lowercase and return the choice else ask again.
    switch (choice.toLowerCase()) {
      case "rock": return "rock";
      case "paper": return "paper";
      case "scissors": return "scissors";

      default:
        choice = prompt("Rock, paper or scissors?");
    }
  }
}

function playGame() {
  let humanChoice;
  let computerChoice;
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a round.
  function playRound(humanChoice, computerChoice) {
    // Victory possibilities winner:loser.
    const cases = `paper:rock rock:scissors scissors:paper`;
    let isHumanWinner = cases.includes(`${humanChoice}:${computerChoice}`);
    let isComputerWinner = cases.includes(`${computerChoice}:${humanChoice}`);

    // Return the winner or tie.
    if (isHumanWinner) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (isComputerWinner) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
      computerScore++;
    } else {
      console.log(`It's a draw! ${humanChoice} x ${computerChoice}.`);
    }
  }

  // Start five rounds.
  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == null) break;
    
    playRound(humanChoice, computerChoice);
  }

  // Compute the winner or tie.
  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} x ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! ${computerScore} x ${humanScore}`);
  } else if (humanChoice != null) {
    console.log(`It's a draw! ${humanScore} x ${computerScore}`)
  } else {
    console.log(`Good bye!`);
  }
}

playGame() 