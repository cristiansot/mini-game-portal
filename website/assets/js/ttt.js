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

/* The code is adding an event listener to the `DOMContentLoaded` event, which is fired when the
initial HTML document has been completely loaded and parsed. Inside the event listener function, it
initializes variables for the Tic Tac Toe game. */
document.addEventListener('DOMContentLoaded', function () {
const cells = document.querySelectorAll('.cell');
const playAgainButton = document.getElementById('play-again');
const winMessage = document.querySelector(".win");

let currentPlayer = ''; // The player hasn't selected a symbol yet
let running = false;
let options = Array(9).fill(' ');

/* The `winningCombos` array is storing all the possible winning combinations in a Tic Tac Toe game.
Each sub-array represents a winning combination, where the numbers represent the indices of the
cells on the game board. */
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

/* The function returns the opposite choice of the player's choice. The player's choice of either 'X' or 'O'.
'O' if the playerChoice is 'X', and 'X' if the playerChoice is anything other than 'X' */
function getComputerChoice(playerChoice) {
    return playerChoice === 'X' ? 'O' : 'X';
}

 /* The getRandomCellIndex function returns a random index of an empty cell in an array.
 @returns the index of a randomly selected empty cell from the "options" array */
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

/* The function `checkWinner` checks if there is a winner in a tic-tac-toe game and displays the
 * winning message and image if there is a winner, or a tie message if there is no winner.
 * @returns nothing (undefined) */
function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (options[a] === options[b] && options[a] === options[c] && options[a] !== ' ') {
            running = false;

            // Rows --> show the position when someone wins and put the image line over the grid
            if (combo.toString() === [0, 1, 2].toString() || combo.toString() === [3, 4, 5].toString() || combo.toString() === [6, 7, 8].toString()) {
                const winIndex = combo[1]; // Middle cell index for horizontal win
                    if(combo.toString() === [0, 1, 2].toString()) {
                        showWinImageHorizontal([0], "./assets/img/horizontal.png");
                        winMessage.textContent = "You Win!!!";
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
    /* The above code is checking if every element in the `options` array is not equal to a space
    character (' '). If this condition is true, it sets the `running` variable to false and updates
    the text content of the `winMessage` element to "It's a tie!". */
    if (options.every(option => option !== ' ')) {
        running = false;
        winMessage.textContent = "It's a tie!"; 
    }
}

/* The function `showWinImageHorizontal` loads a horizontal image onto specified cells in a game board.
The `index` parameter is an array that contains the indices of the cells where the image should be displayed horizontally.
The `imagePath` parameter is a string that represents the path to the image file that you want to load. It should be a valid
file path that points to the image you want to display */
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

/* The function `showWinImageVertical` loads a vertical image into specified cells.*/
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

/* The function `showWinImageDiagonal1` loads a diagonal image onto specific cells in a game board. The `index` parameter is an array that contains the indices of the cells where the
The `imagePath` parameter is a string that represents the file path or URL of the image that you want to load */
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

/* The function `showWinImageDiagonal2` loads a diagonal image onto specific cells in a game board.
The `index` parameter is an array that contains the indices of the cells where the diagonal image should be displayed.
The `imagePath` parameter is a string that represents the file path or URL of the image that you want to load */
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

/* The code is adding an event listener to each cell in the game board. When a cell is clicked, the
function inside the event listener is executed. This function calls the `updateCell` function,
passing the index of the clicked cell as an argument, and then calls the `computerMove` function.
This allows the player to make a move by clicking on a cell, and then triggers the computer's
move. */
cells.forEach((cell, index) => {
    cell.addEventListener('click', function () {
        updateCell(index);
        computerMove();
    });
});

/* The code is adding an event listener to the "Play Again" button. When the button is clicked, the
function inside the event listener is executed. */
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


/* The function `computerMove` checks if the game is running and if it is the computer's turn, and
if so, selects a random cell index and updates the cell after a delay of 300 milliseconds */
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

/* Event listener to select a symbol when clicking on "X" or "O" */
document.getElementById("symbol-o").addEventListener('click', function () { // If the player select "O", the computer start the game ussing "X"
    if (!currentPlayer) {
        currentPlayer = 'X';
        computer = getComputerChoice('O');
        running = true;
        options.fill(' ');
        cells.forEach(cell => cell.textContent = '');
        computerMove();
    }
});

/* This code is adding an event listener to the element with the id "symbol-x". When this element is
clicked, the function inside the event listener is executed. */
    document.getElementById("symbol-x").addEventListener('click', function () { // If the player select "X", the computer start the game ussing "O"
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
