let cards = [] // array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function getRandomCard() {
    let genNum = Math.floor(Math.random() * 13) + 1
    if (genNum === 1) {
        return 11;
    } else if (genNum > 10) {
        return 10;
    } else {
        return genNum;
    }
    // console.log(genNum);
    // return ;
}

// Start Game
function startGame() {
    renderGame();
}

function renderGame() {
    let isAlive = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard, secondCard] // array
    let sum = firstCard + secondCard;
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
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    cardsEl.textContent = "Cards: ";

    // Rendering out all the cards using for loop
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
}

// New Card
function newCard() {
    // console.log("New card has been drawn.");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
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