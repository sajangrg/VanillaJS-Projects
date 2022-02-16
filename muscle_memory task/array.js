// Array
// 0 indexed
let portfolio = [
    "5 Years of Frontend Development", //0
    "Bachelor of Science in Computing", //1
    "Basics of MERN", //2
    "HTML, CSS, Javascript/jQuery" //3
]

// console.log(portfolio.length);


let personalDetails = [
    "Sajan",
    28,
    true
]

// console.log(personalDetails[1])

let cards = [7, 4, 1, 5, 10]

cards.push(9);

// console.log(cards);

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portfolio lately."
]

let newMessage = "Same here!";

messages.push(newMessage);
// console.log(messages);

// messages.pop();
// console.log(messages);


// For Loop
for (let count = 0; count < 11; count += 1) {
    // console.log(count);
}

for (i = 0; i < 6; i += 1) {
    // console.log(i);
}

for (i = 10; i <= 100; i += 10) {
    // console.log(i);
}

for (let i = 0; i < cards.length; i += 1) {
    // console.log(cards[i]);
}

for (let i = 0; i < messages.length; i++) {
    const element = messages[i];
    // console.log(element)
}

// Fetching data in DOM using for loop;
let sentence = ["Hello", "my", "name", "is", "Sajan Gurung"];
let greetingEl = document.getElementById("greeting-el");
// console.log(greetingEl);

for (i = 0; i < sentence.length; i++) {
    // console.log(sentence[i]);
    greetingEl.textContent += sentence[i] + " ";
}

// Random Number

let player1Time = 107;
let player2Time = 108;

function totalRaceTime() {
    if (player1Time > player2Time) {
        return player1Time
    } else if (player2Time > player1Time) {
        return player2Time
    } else {
        return player1Time;
    }
}

let totalTime = totalRaceTime();

console.log(totalTime);

// Logical Operator

// && operator
let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution();
}

function showSolution() {
    console.log("Showing the solution...")
}

// || operator
let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === false) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hay, check out this new film we think you will like!")
}

// Object in Javascript

let airbnbCastle = {
    name: "King's castle",
    totalRooms: 50,
    free: false,
    castleComposition: ["Lawn", "Corridor", "Passage"]
}

console.log(airbnbCastle.name);
console.log(airbnbCastle.totalRooms);
console.log(airbnbCastle.castleComposition[2]);


// Object and Fuctions practice

let person = {
    name: "Sajan",
    age: 28,
    country: "Nepal"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".");
}

logData();