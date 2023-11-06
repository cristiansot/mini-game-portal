const rps = document.getElementById("rps");
rps.addEventListener("click", function () {
    window.location.href = "rps.html";
});

const tictactoe = document.getElementById("tictactoe");
tictactoe.addEventListener("click", function () {
    window.location.href = "tictactoe.html";
});

const blackjack = document.getElementById("blackjack");
blackjack.addEventListener("click", function () {
    window.location.href = "blackjack.html";
});

const hangman = document.getElementById("hangman");
hangman.addEventListener("click", function () {
    window.location.href = "hangman.html";
});

/* CARD LINK BUTTONS */
const rpsCard = document.getElementById("rpsCard");
rpsCard.addEventListener("click", function () {
    window.location.href = "rps.html";
});

const tictactoeCard = document.getElementById("tictactoeCard");
tictactoeCard.addEventListener("click", function () {
    window.location.href = "tictactoe.html";
});

const blackjackCard = document.getElementById("blackjackCard");
blackjackCard.addEventListener("click", function () {
    window.location.href = "blackjack.html";
});

const hangmanCard = document.getElementById("hangmanCard");
hangmanCard.addEventListener("click", function () {
    window.location.href = "hangman.html";
});

/* FORM */
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const finalMsg = document.getElementById('finalMsg');
const failMsg = document.getElementById('failMsg')

/* The code block is an event listener that is triggered when the submit button (`submitBtn`) is
clicked. It prevents the default behavior of submitting the form and changing the page by calling
`event.preventDefault()`. */
submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Avoid submitting the form and changing the page

/* The code block is handling form validation and submission. ---> Aleem help me a lot for develop this code */
const usernameValue = usernameInput.value.trim();
const email = emailInput.value.trim();
const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const isEmailValid = re.test(email.toLowerCase());


/* The code block is handling form validation and submission. */
    if (usernameValue === '') {
        failMsg.textContent = 'Name is required';
    } else if (!isNaN(usernameValue)) {
        failMsg.textContent =  'Name is not valid';
    } else if (!isEmailValid) { 
        failMsg.textContent = 'E-mail is not valid';
    } else {
        form.style.display = "none";
        usernameInput.style.display = "none";
        emailInput.style.display = "none";
        finalMsg.textContent = `Hi ${usernameValue}, thanks for to contact us. We'll respond soon!!!.`;
        form.parentNode.insertBefore(finalMsg, form.nextSibling);
        //Clear form fields
        usernameInput.value = '';
        emailInput.value = '';
    }
});
