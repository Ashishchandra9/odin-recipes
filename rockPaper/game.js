const playertext = document.querySelector('#Player');
const computertext = document.querySelector('#Computer');
const resulttext = document.querySelector('#Result');
const choicetext = document.querySelectorAll('.choice');
let player;
let computer;
let result;
choicetext.forEach(button => button.addEventListener('click', () => {
    player = button.textContent
    computerTurn();
    playertext.textContent = `Player:${player}`;
    computertext.textContent = `Computer: ${computer}`;
    resulttext.textContent =checkWinner();
}));

function computerTurn() {
    const randomN = Math.floor(Math.random() * 3) + 1;

    switch (randomN) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "you Win!" : "you Lose!"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "you Win!" : "you Lose!"
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "you Win!" : "you Lose!"
    }
}