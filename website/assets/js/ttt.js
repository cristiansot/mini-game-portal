/* LINKS */
const goBack = document.getElementById("goBack"); // Link to the main page
goBack.addEventListener("click", function () {
    location.href = "index.html";
});

const rps = document.getElementById("rps"); // Link button to Rock Paper Scissors
rps.addEventListener("click", function () {
    location.href = "rps.html";
});

const blackjack = document.getElementById("blackjack"); // Link button to Blackjack
blackjack.addEventListener("click", function () {
    location.href = "blackjack.html";
});

const hangman = document.getElementById("hangman"); // Link button to Hangman
hangman.addEventListener("click", function () {
    location.href = "hangman.html";
});

const contact = document.getElementById("contact"); // Link to the contact form
contact.addEventListener("click", function () {
    location.href = "index.html";
});

const home = document.getElementById("home"); // Link to the main page
home.addEventListener("click", function () {
    location.href = "index.html";
});

/* GAME CODE */
document.addEventListener('DOMContentLoaded', function () {
const cells = document.querySelectorAll('.cell');
const playAgainButton = document.getElementById('play-again');
const winMessage = document.querySelector(".win");

let currentPlayer = ''; // The player hasn't selected a symbol yet
let computer = ''; // Computer's symbol
let running = false;
let options = Array(9).fill(' ');

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function getComputerChoice(playerChoice) {
    return playerChoice === 'X' ? 'O' : 'X';
}

// Function get random index
function getRandomCellIndex() {
    const emptyCells = options.map((value, index) => value === ' ' ? index : -1).filter(index => index !== -1);
    if (emptyCells.length === 0) return -1; // No cells
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

// Function for to refresh the cell with images "X" or "O"
function updateCell(cellIndex) {
    if (!running || options[cellIndex] !== ' ') return;
    options[cellIndex] = currentPlayer;
    const img = new Image();
    img.classList.add("symbol-img");
    img.alt = currentPlayer;

    if (currentPlayer === "X") {
        img.src = "./assets/img/x.svg";
    } else if (currentPlayer === "O") {
        img.src = "./assets/img/o.svg";
    }

    const cell = cells[cellIndex];
    cell.textContent = '';
    cell.appendChild(img);
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check if there's a winner
function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (options[a] === options[b] && options[a] === options[c] && options[a] !== ' ') {
            running = false;

            // Rows --> show the position when someone wins and put the image line over the grid
            if (combo.toString() === [0, 1, 2].toString() || combo.toString() === [3, 4, 5].toString() || combo.toString() === [6, 7, 8].toString()) {
                const winIndex = combo[1]; // Middle cell index for horizontal win
                    if(combo.toString() === [0, 1, 2].toString()){
                        showWinImageHorizontal([0], "./assets/img/horizontal.png");
                        winMessage.textContent = "Computer wins the game!";
                    }
                    else if (combo.toString() === [3, 4, 5].toString()){
                        showWinImageHorizontal([3], "./assets/img/horizontal.png");
                        winMessage.textContent = "Computer wins the game!";
                    }
                    else if (combo.toString() === [6, 7, 8].toString()) {
                        showWinImageHorizontal([6], "./assets/img/horizontal.png");
                        winMessage.textContent = "Computer wins the game!";
                    }

            // Colums --> show the position when someone wins and put the image line over the grid
            } else if (combo.toString() === [0, 3, 6].toString() || combo.toString() === [1, 4, 7].toString() || combo.toString() === [2, 5, 8].toString()) {
                const winIndex = combo[1]; // Middle cell index for vertical win
                    if (combo.toString() === [0, 3, 6].toString()) {
                        showWinImageVertical([0], "./assets/img/vertical.png");
                        winMessage.textContent = "Computer wins the game!";
                    }
                    else if (combo.toString() === [1, 4, 7].toString()) {
                        showWinImageVertical([1], "./assets/img/vertical.png");
                        winMessage.textContent = "Computer wins the game!";
                    }
                    else if (combo.toString() === [2, 5, 8].toString()) {
                        showWinImageVertical([2], "./assets/img/vertical.png");
                        winMessage.textContent = "Computer wins the game!";
                    }
        
            // Diagonals --> show the position when someone wins and put the image line over the grid
            } else if (combo.toString() === [0, 4, 8].toString()) {
                showWinImageDiagonal1([0], "./assets/img/diagonal1.png");
                winMessage.textContent = "Computer wins the game!";
            // Diagonals --> show the position when someone wins and put the image line over the grid
            } else if (combo.toString() === [2, 4, 6].toString()) {
                showWinImageDiagonal2([0], "./assets/img/diagonal2.png");
                winMessage.textContent = "Computer wins the game!";
            }
            winMessage.textContent = "You Win";
            return ;
        }
    }
    if (options.every(option => option !== ' ')) {
        running = false;
        winMessage.textContent = "It's a tie!"; 
    }
}

    // Function show the combo winner
    function showWinImageHorizontal(index, imagePath) { // load horizontal image 
        for (const cellIndex of index) {
            const cell = cells[cellIndex];
            const img = new Image();
            img.src = imagePath;
            img.alt = currentPlayer;
            img.classList.add("symbol-horizontal");
            cell.appendChild(img);
        }
    }

    function showWinImageVertical(index, imagePath) {// load vertical image 
        for (const cellIndex of index) {
            const cell = cells[cellIndex];
            const img = new Image();
            img.src = imagePath;
            img.alt = currentPlayer;
            img.classList.add("symbol-vertical");
            cell.appendChild(img);
        }
    }

    function showWinImageDiagonal1(index, imagePath) { // load diagonal image 
        for (const cellIndex of index) {
            const cell = cells[cellIndex];
            const img = new Image();
            img.src = imagePath;
            img.alt = currentPlayer;
            img.classList.add("symbol-diagonal1");
            cell.appendChild(img);
        }
    }

    function showWinImageDiagonal2(index, imagePath) { // load diagonal image 
        for (const cellIndex of index) {
            const cell = cells[cellIndex];
            const img = new Image();
            img.src = imagePath;
            img.alt = currentPlayer;
            img.classList.add("symbol-diagonal2");
            cell.appendChild(img);
        }
    }

    // Event listener update the cells
    cells.forEach((cell, index) => {
        cell.addEventListener('click', function () {
            updateCell(index);
            computerMove();
        });
    });

    // Event listener for the "Play Again" button
    playAgainButton.addEventListener('click', function () {
        currentPlayer = ''; // Reset the player's choice
        running = false;
        options.fill(' ');
        cells.forEach(cell => cell.textContent = '');
        winMessage.textContent = "";
        
        // Computer starts the game
        computer = getComputerChoice(currentPlayer);
        computerMove();
    });

    // Function computer movements
    function computerMove() {
        if (running && currentPlayer === 'O' || currentPlayer === 'X') {
            const cellIndex = getRandomCellIndex();
            if (cellIndex !== -1) {
                setTimeout(() => {
                    updateCell(cellIndex);
                }, 300); // delay
            }
        }
    }

    // Event listener to select a symbol when clicking on "X" or "O"
    document.getElementById("symbol-o").addEventListener('click', function () { // If the player select "O", the computer start the game ussing "X"
        console.log("WORKS")
        if (!currentPlayer) {
            currentPlayer = 'X';
            computer = getComputerChoice('O');
            running = true;
            options.fill(' ');
            cells.forEach(cell => cell.textContent = '');
            computerMove();
        }
    });

    document.getElementById("symbol-x").addEventListener('click', function () { // If the player select "X", the computer start the game ussing "O"
        console.log("WORKS")
        if (!currentPlayer) {
            currentPlayer = 'O';
            computer = getComputerChoice('X');
            running = true;
            options.fill(' ');
            cells.forEach(cell => cell.textContent = '');
            computerMove();
        }
    });

});
