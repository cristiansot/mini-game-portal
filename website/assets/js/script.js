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

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    form.style.display = "none";
    username.style.display = "none";
    email.style.display = "none";
    const message = document.createElement('p');
    message.textContent = `Hi ${username.value}, thanks for contacting us. We will respond to your email soon.`;
    form.parentNode.insertBefore(message, form.nextSibling);
});

const isValidEmail = email => {
    const re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email.toLowerCase());
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    if (usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
};

const setError = (element, message) => {
    element.classList.add('error');
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;
};

const setSuccess = (element) => {
    element.classList.remove('error');
    const errorElement = element.nextElementSibling;
    errorElement.textContent = '';
};
