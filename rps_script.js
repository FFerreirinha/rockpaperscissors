const options = [ "paper", "scissors", "rock" ];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
         let randomNum = Math.floor(Math.random()*3);
         //console.log(options[randomNum]);
         return options[randomNum];                      // Computer generates a random number to then pick a random option
    }

function playRound(playerSelection) {


        if (playerScore === 3) {
            winnerannouncer.innerText = "Congratulations, you have bested the machine!";
            return;
        }
        else if (computerScore === 3) {
            winnerannouncer.innerText = "It is only human to lose, human.";
            return;
        }
        // Determining Computer choice
        computerSelection = computerPlay();

        // Rock Paper Scissors Logic
        if (computerSelection === "rock") {
            switch(playerSelection) {
                case "paper":
                    playerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                    console.log("You win! Paper beats Rock!");
                    return "winner";
                    break;
                case "scissors":
                    computerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                     console.log("You lose! Rock beats Scissors!");
                     return "loser";
                      break;
                  case "rock":
                      console.log("It's a tie! You both picked Rock!");
                     return "tie";
                     break;
             }
        } 
        else if (computerSelection === "paper") {
            switch(playerSelection) { 
                case "scissors":
                    playerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                    console.log("You win! Scissors beats Paper!");
                    return "winner";
                    break;
                case "rock":
                    computerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                    console.log("You lose! Paper beats Rock!");
                    return "loser";
                    break;
                case "paper":
                    console.log("It's a tie! You both picked Paper!");
                    return "tie";
                    break;
            }
        }
        else if (computerSelection === "scissors") {
            switch(playerSelection) { 
                case "rock":
                    playerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                    console.log("You win! Rock beats Scissors!");
                    return "winner";
                    break;
                case "paper":
                    computerScore += 1;
                    scoreCounter.innerText = playerScore + ' - ' + computerScore;
                    console.log("You lose! Scissors beats Paper!");
                    return "loser";
                    break;
                case "scissors":
                    console.log("It's a tie! You both picked Scissors!");
                    return "tie";
                    break;
                }
        }
    }
        
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const scoreCounter = document.getElementById('scorecounter');
const winnerannouncer = document.getElementById('winner');

rockButton.addEventListener("click", () => playRound('rock'));
paperButton.addEventListener("click", () => playRound('paper'));
scissorsButton.addEventListener("click", () => playRound('scissors'));