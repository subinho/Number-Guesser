let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    computerAnswer = Math.floor(Math.random() * 10);
    return computerAnswer;
  }

  function compareGuesses(human, computer, secret) {
    if (Math.abs(human - secret) < Math.abs(computer - secret)) {
        return true;
    } else if (Math.abs(human - secret) === Math.abs(computer - secret)) {
        return true;
    } else {
        return false;
    }
  }

  function updateScore(score) {
      if (score === 'human') {
        humanScore  += 1;
      } else {
        computerScore += 1;
      }
  }

  function advanceRound() {
      currentRoundNumber += 1;
  }

  advanceRound();