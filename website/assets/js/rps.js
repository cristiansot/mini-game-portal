/* LINKS */
const goBack = document.getElementById("goBack") // link to main page
goBack.addEventListener("click", function () {
    location.href = "index.html";
});

const tictactoe = document.getElementById("tictactoe") // link button tic tac toe html
tictactoe.addEventListener("click", function () {
    location.href = "tictactoe.html";
});

const blackjack = document.getElementById("blackjack") // link button blackjack html
blackjack.addEventListener("click", function () {
    location.href = "blackjack.html";
});

const hangman = document.getElementById("hangman") // link button hangman html
hangman.addEventListener("click", function () {
    location.href = "hangman.html";
});

const contact = document.getElementById("contact") // link to main page ----> contact form
contact.addEventListener("click", function () {
    location.href = "index.html" ;
});

const home = document.getElementById("home") // link to main page
home.addEventListener("click", function () {
    location.href = "index.html" ;
});


/* GAME */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");
    const humanDiv = document.getElementById("human");
    const computerDiv = document.getElementById("computer");
    const playerScore = document.querySelector(".score-human");
    const computerScore = document.querySelector(".score-computer");
    const winMessage = document.querySelector(".win");
    const playAgainButton = document.querySelector(".play-again");
    const roundsPlayers = document.getElementById("rounds-players");

    let roundsLeft = 5;
    let userScore = 0;
    let computerScoreValue = 0;
    let currentRound = 0; // Comenzamos en 0 para que la primera pantalla muestre "Round 0"

    // Hidden "Play Again" button when start the match
    playAgainButton.style.display = "none";

    function updateRoundDisplay() { // 
        currentRound++;
        roundsPlayers.textContent = `Round ${currentRound}`;
        if (currentRound === 1) {
            roundsPlayers.style.display = "block"; // Muestra el display de las rondas en la segunda pantalla
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            if (roundsLeft > 0) {
                updateRoundDisplay();
                playAgainButton.style.display = "none";
                const userChoice = button.querySelector("img").alt;
                const computerChoice = getComputerChoice();
                const winner = determineWinner(userChoice, computerChoice);

                humanDiv.innerHTML = `<img src="./assets/img/${userChoice}-left.svg" alt="${userChoice}">`;
                computerDiv.innerHTML = `<img src="./assets/img/${computerChoice}-right.svg" alt="${computerChoice}">`;

                if (winner === "Player") {
                    userScore++;
                } else if (winner === "Computer") {
                    computerScoreValue++;
                }

                playerScore.textContent = userScore;
                computerScore.textContent = computerScoreValue;
                roundsLeft--;

                if (roundsLeft === 0) {
                    endGame();
                }
            }
        });
    });

    playAgainButton.addEventListener("click", function () { // restart Play again button 
        resetGame();
    });

    function getComputerChoice() { // Random computer choice
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) { // Winer function 
        if (playerChoice === computerChoice) {
            return "Tie";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return "Player";
        } else {
            return "Computer";
        }
    }

    function endGame() { // Hidden images
        if (userScore > computerScoreValue) {
            winMessage.textContent = "Player wins the game!";
            humanDiv.style.display = "none";
            computerDiv.style.display = "none"; 
        } else if (userScore < computerScoreValue) {
            winMessage.textContent = "Computer wins the game!";
            humanDiv.style.display = "none"; 
            computerDiv.style.display = "none"; 
        } else {
            winMessage.textContent = "It's a tie!";
            humanDiv.style.display = "none"; 
            computerDiv.style.display = "none"; 
        }
        playAgainButton.style.display = "block"; // Show "Play Again" button when finish the game 
    }

    function resetGame() {
        roundsLeft = 5;
        userScore = 0;
        computerScoreValue = 0;
        currentRound = 0;
        roundsPlayers.style.display = "none"; // Hidden element "rounds-played"
        playerScore.textContent = "0"; // restart counter
        computerScore.textContent = "0"; // restart counter
        winMessage.textContent = ""; // clean messages
        humanDiv.innerHTML = ""; // clean div content image
        computerDiv.innerHTML = ""; // clean div content image
        humanDiv.style.display = "block"; // Show the images "human" to restart
        computerDiv.style.display = "block"; // Show the images "computer" to restart
        playAgainButton.style.display = "none";// Hidden play again button when player push it
    }
});
