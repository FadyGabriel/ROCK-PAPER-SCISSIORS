

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame (playerChoice) {

    const computerChoice = choices[Math.floor (Math.random() * 3)]
    let result ="";

    if (playerChoice === computerChoice) {
        result = "it is a tie!";
    }
    else {
        switch (playerChoice) {
            case "rock": 
                result = (computerChoice === "scissors") ? `you win!` : `you lose!`
                break;
            case "paper": 
                result = (computerChoice === "rock") ? `you win!` : `you lose!`
                break;
            case "scissors": 
                result = (computerChoice === "paper") ? `you win!` : `you lose!`
                break;
        }
    }

    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    switch (result){
        case "you win!":
            resultDisplay.classList.add("greenText");
            break
        case "you lose!":
            resultDisplay.classList.add("redText");
            break
    }

}




// if (computerChoice === "scissors") {
//     result = `ypu win`
// } else {
//     result = `you lose`
// }