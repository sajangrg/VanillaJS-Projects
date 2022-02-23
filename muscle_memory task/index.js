let errorMsg = "Something went wrong, please try again";

function status() {
    document.getElementById("error").textContent = errorMsg;
}

// Calculator

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let result = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + result;
}

function subtract() {

    let result = num1 - num2
    document.getElementById("sum-el").textContent = "Sum: " + result;
}

function divide() {
    let result = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + result;
}

// Let & Const.

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if(hasWon){
  console.log(`${player} got ${points} points and won the ${game} game!`)
} else{
  console.log(`The winner is ${opponent}! ${player} lost the game.`)
}