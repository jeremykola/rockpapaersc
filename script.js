





function random (number) {
return Math.floor(Math.random()*number);

}
console.log(random(3));

function computer() {
let choice = random(3);
    if (choice === 0) {return "rock"}
    else if (choice === 1) {return "paper"}
    else {return "scissor"}
    
    }
    console.log(computer());