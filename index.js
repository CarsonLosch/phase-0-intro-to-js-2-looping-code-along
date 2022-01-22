// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
 }
*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const name = ["Poco", "Brook", "Yuzu"];
const event = "suprise";
const newArray = [];

function writeCards(name, event) {
    for (let x = 0; x < name.length; x++) {
        newArray[x] = `Thank you, ${name[x]}, for the wonderful ${event} gift!`
    debugger;
    }
    return newArray
}

writeCards(["Poco", "Brook", "Yuzu"], "suprise");

function countDown() {
let x = 10
    while (x >= 0) {
        console.log(x--);
    }
}
    countDown(10)