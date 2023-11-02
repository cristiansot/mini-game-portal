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
const username = document.getElementById('username');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const finalMsg = document.getElementById('finalMsg');

submitBtn.addEventListener("click", function () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        finalMsg.textContent = (username, 'Name is required');
    } else if (isNaN(usernameValue) === false) {
        finalMsg.textContent = (username, 'Name cannot be a number');
    } else {
        form.style.display = "none";
        username.style.display = "none";
        email.style.display = "none";
        finalMsg.textContent = `Hi ${usernameValue}, thanks for contacting us. We will respond to your email soon.`;
        form.parentNode.insertBefore(finalMsg, form.nextSibling);
        // Clear form inputs
        username.value = '';
        email.value = '';
    }
});

const isValidEmail = email => {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email.toLowerCase());
};
