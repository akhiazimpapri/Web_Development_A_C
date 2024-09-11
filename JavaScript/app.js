let max = prompt("Enter a maximum number:");
let guess = prompt(`Guess a random number between 1 to ${max}:`);
let random = Math.floor(Math.random() * max) + 1;

while(true) {
    if(guess === "quit") {
        console.log("You quited");
        break;
    } else if(guess === random) {
        console.log("You have guess the right number! congrats!!");
        break;
    } else if(guess < random) {
        guess = prompt("Your guess was too small.Try again.");
    } else if(guess > random) {
        guess = prompt("Your guess was too large.Try again.");
    } 
}

