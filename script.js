let humanScore = 0;
let computerScore = 0;
console.log ("Your score is: " + humanScore);
console.log("The score of the computer is: " + computerScore);


function getHumanChoice() {
 
sign = window.prompt("Please enter your choice. Rock, Paper or scissor").toLowerCase();


if ( sign === "rock" ) {
return "rock";
}
else if (sign === "paper") { 
    return "paper";
}

else if (sign === "scissor") {
    return "scissor";
}
else {return "invalid" }
}
console.log(getHumanChoice());






function computer() {
    let choice = Math.floor(Math.random()*3);

    if (choice === 0) {return "rock"}
    else if (choice === 1) {return "paper"}
    else {return "scissor"}
    
    }
    console.log(computer());


function playRound () {
let humanChoice = getHumanChoice();
let computerChoice = computer();

if (humanChoice === computerChoice) {return "Draw"}
else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice==="paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {return "You win!" }
else {return "You lose!" }
}
console.log(playRound());

// if you win then so und so //
function result() {
let pointPlayer = playRound("You win!");
let pointComputer = playRound("You lose!");

if (pointPlayer) {++humanScore}
else if (pointComputer) {++computerScore}
}
console.log(result());

console.log ("Your score is: " + humanScore);
console.log("The score of the computer is: " + computerScore);