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

// Log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function listOutCourses(arr){
  for(i=0; i<arr.length; i++){
    console.log(arr[i])
  }
}

listOutCourses(myCourses)


// Save to localStorage

let carBrand = ["Farrari", "Suzuki", "Alto", "Ford"]

// localStorage.setItem('Car Brand', JSON.stringify(carBrand));

let carEntry = JSON.parse(localStorage.getItem("Car Brand"));

console.log(carEntry[3]);

// addEventListener and object in array

let data = [
  {
    player: "Jane",
    score: 52
  },
  {
    player: "Mark",
    score: 41
  }
]

const btnLog = document.getElementById('btn-log')

btnLog.addEventListener('click', function(){
  console.log(data[1].score);
})

// Generate Sentence using for loop and array

function generateSentence(desc, arr){
  let baseString = `The ${arr.length} ${desc} are `
  let lastIndex = arr.length - 1
  for(let i = 0; i < arr.length; i++){
    if(i === lastIndex){
      baseString += arr[i]
    }else{
      baseString += arr[i] + ', '
    }
  }
  return baseString;
}

const sentence = generateSentence('best fruits', ['Apple', 'Banana'])

console.log(sentence);


// Render Images
const imgs =[
  'img/01.png',
  'img/02.jpg',
  'img/03.png'
]

const imgLists = document.getElementById('image-lists');

function generateImg(){
  let images = '';
  for(let i = 0; i < imgs.length; i++){
      images +=  `<img alt="Family" src="${imgs[i]}" />`
  }
  imgLists.innerHTML = images
}

generateImg();






