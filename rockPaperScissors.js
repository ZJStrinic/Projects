const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    if(randomNumber === 0 ) {
        computerChoice = 'Rock'
    } else if(randomNumber === 1) {
        computerChoice = 'Scissors'
    } else if(randomNumber === 2) {
        computerChoice = 'Paper'
    } else if (randomNumber === 3) {
        computerChoice = 'Lizard'
    } else if (randomNumber === 4) {
        computerChoice = 'Spock'
    };

    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You Lost!"
    } else if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Won!"
    } else if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You Won!"
    } else if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You Lost!"
    } else if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You Lost!"
    } else if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You Won!"
    } else if (computerChoice === "Rock" && userChoice === "Lizard") {
        result = "You Lost!"
    } else if (computerChoice === "Lizard" && userChoice === "Rock") {
        result = "You Won!"
    } else if (computerChoice === "Lizard" && userChoice === "Spock") {
        result = "You Lost!"
    } else if (computerChoice === "Spock" && userChoice === "Lizard") {
        result = "You Won!"
    } else if (computerChoice === "Spock" && userChoice === "Scissors") {
        result = "You Lost!"
    } else if (computerChoice === "Scissors" && userChoice === "Spock") {
        result = "You Won!"
    } else if (computerChoice === "Lizard" && userChoice === "Scissors") {
        result = "You Won!"
    } else if (computerChoice === "Scissors" && userChoice === "Lizard") {
        result = "You Lost!"
    } else if (computerChoice === "Lizard" && userChoice === "Paper") {
        result = "You Lost!"
    } else if (computerChoice === "Paper" && userChoice === "Lizard") {
        result = "You Won!"
    } else if (computerChoice === "Paper" && userChoice === "Spock") {
        result = "You Lost!"
    } else if (computerChoice === "Spock" && userChoice === "Paper") {
        result = "You Won!"
    } else if (computerChoice === "Spock" && userChoice === "Rock") {
        result = "You Lost!"
    } else if (computerChoice === "Rock" && userChoice === "Spock") {
        result = "You Won!"
    };

    resultDisplay.innerHTML = result;
        
};
