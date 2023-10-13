function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    computer = options[Math.floor(Math.random() * 3)]
    return computer;
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (playerChoice == computerChoice){
        result = "It's a tie!"
    }else if(playerChoice == "rock" & computerChoice == "scissors"){
        result = "You win! Rock beats scissors"
    }else if(computerChoice == "rock" & playerChoice == "scissors"){
        result = "You lose! Rock beats scissors"
    }else if(playerChoice == "scissors" & computerChoice == "paper"){
        result = "You win! Scissors beats paper"
    }else if(computerChoice == "scissors" & playerChoice == "paper"){
        result = "You lose! Scissors beats paper"
    }else if(playerChoice == "paper" & computerChoice == "rock"){
        result = "You win! Paper beats rock"
    }else if(computerChoice == "paper" & playerChoice == "rock"){
        result = "You lose! Paper beats rock"
    }
    return result;
}

function game(){
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (i <= 4){
        let playerChoice = prompt("Please enter Rock, Paper, or Scissors");
        let computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        if (result.includes("You win")){
            playerScore++;
        }else if (result.includes("You lose")) {
            computerScore++;
        }
        console.log(result);
        console.log(`Player score: ${playerScore} vs Computer Score: ${computerScore}`);
        i++;
    }
}

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

let btns = document.querySelector('#button-wrapper');
let results = document.querySelector('#results');
let score = document.createElement('h2');
let scoreSpan = document.createElement('span');
let playerScoreText = document.createElement('p');
let cpuScoreText = document.createElement('p');

score.textContent = "Score";
results.appendChild(score);

playerScoreText.textContent = `Player Score: ${playerScore}`;
scoreSpan.append(playerScoreText);

cpuScoreText.textContent = `Computer Score: ${computerScore}`;
scoreSpan.append(cpuScoreText);

results.appendChild(scoreSpan);


btns.addEventListener('click',(event) => {
    let playerChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        gamesPlayed++;
        if (result.includes("You win")){
            playerScore++;
        }else if (result.includes("You lose")) {
            computerScore++;
        }
        playerScoreText.textContent = `Player Score: ${playerScore}`;
        cpuScoreText.textContent = `Computer Score: ${computerScore}`;

        if (playerScore == 5){
            let winner = document.createElement('h3');
            winner.textContent = 'PLAYER WINS';
            results.appendChild(winner);
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

        }else if (computerScore == 5){
            let winner = document.createElement('h3');
            winner.textContent = 'COMPUTER WINS';
            results.appendChild(winner);
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
        }
        console.log(result);
        console.log(`Player score: ${playerScore} vs Computer Score: ${computerScore}`);
});
