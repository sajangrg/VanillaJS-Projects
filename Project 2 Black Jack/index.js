let player = {
    name: "Alisha",
    chips: 5000
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let genNum = Math.floor(Math.random() * 13) + 1
    if (genNum === 1) {
        return 11;
    } else if (genNum > 10) {
        return 10;
    } else {
        return genNum;
    }
}
// Start Game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard] // array
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
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
    // Rendering out all the cards using for loop
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    // New Card
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}