let player = {
    name: "Alisha",
    chips: 5000
}
let cards = [] // array
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
    // console.log("New card has been drawn.");
    // New Card
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

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