// Code your solutions in this file

/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
 } */


 const gifts = ["teddy bear", "drone", "doll"];

 function wrapGifts(gifts) {
   for (let i = 0; i < gifts.length; i++) {
     console.log(`Wrapped ${gifts[i]} and added a bow!`);
   }
 
   return gifts;
 }
 
 wrapGifts(gifts);


const newArry = []


function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        newArry[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    return newArry;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}

countDown(10)