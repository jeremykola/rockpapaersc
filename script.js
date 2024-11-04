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
else {return "try again" }
}
console.log(getHumanChoice());



let humanScore = 0;
let computerScore = 0;



function computer() {
    let choice = Math.floor(Math.random()*3);

    if (choice === 0) {return "rock"}
    else if (choice === 1) {return "paper"}
    else {return "scissor"}
    
    }
    console.log(computer());



