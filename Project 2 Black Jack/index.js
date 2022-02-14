let firstCard = 10;
let secondCard = 2;
let cards = [firstCard, secondCard] // array
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// Start Game
function startGame() {
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    // console.log(message);
}

// New Card
function newCard() {
    // console.log("New card has been drawn.");
    let lastCard = 10;
    sum += lastCard;
    renderGame();
}
// Cash out
// console.log('Black Jack : ' + hasBlackJack, '| IS ALIVE: ' + isAlive)


// if (sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack!!!");
// } else {
//     console.log("You're out of the game!")
// }

// let age = 105;

// if (age < 100) {
//     console.log("Not elegible.")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one.")
// }
// console.log(sum);