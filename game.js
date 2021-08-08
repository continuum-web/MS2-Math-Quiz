//bring in the HTML
let question = document.querySelector(".question");
let gameForm = document.querySelector(".gameForm");
let playerAnswer = document.querySelector(".answerInput");
let answerInput = document.querySelector(".answerInput")
let truckdiv = document.querySelector(".fuel");
let trucks = document.querySelectorAll(".fuelimg");
let rocket = document.querySelector('.rocket');
let score = document.querySelector(".score");
let correctAnswer;

/saves the game state
let gameState = {
    score: 0,
    wrong:0
}
//generate random Number
function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

//generate the math problem
function generateProblem() {
    return {
        operand1: generateNumber(10),
        operand2: generateNumber(10),
        operator: ["+","-","X"][generateNumber(2)]
    }
}