// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints += 50;
// console.log(bonusPoints)

// bonusPoints -= 75;
// console.log(bonusPoints);

// bonusPoints += 45
// console.log(bonusPoints);
// // count++;

// // let myDogAge = myAge * humanDogRatio;

// // console.log(count);

// function increment() {
//     console.log('clicked');
// }

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function calculateTotalLaps() {
//     let total = lap1 + lap2 + lap3;
//     console.log(total);
// };

// calculateTotalLaps();

// let lapsCompleted = 0;

// function incrementLaps() {
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }

// incrementLaps();
// incrementLaps();
// incrementLaps();

let count = 0;
let countEle = document.querySelector('#count-el');
let saveEle = document.querySelector('#saveEl');

function calculateIncrement() {
    console.log('CLiked');
    count++;
    countEle.textContent = count;
}

function save() {
    console.log(count);

    let countStr = count + " - ";
    saveEle.textContent += countStr;
    countEle.textContent = 0;
    count = 0;
}

// GREETING LINDA
// let firstName = "Linda";
// let greeting = "Hi there";

// let greetWithName = greeting + ", " + firstName + "!";

// function greetSomeone() {
//     console.log(greetWithName);
// }

// greetSomeone();

// POINTS COUNT
// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints--
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);