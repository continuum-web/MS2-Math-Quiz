//bring in the HTML
let question = document.querySelector("#question");
let gameForm = document.querySelector(".gameForm");
let playerAnswer = document.querySelector(".answerInput");
let answerInput = document.querySelector(".answerInput")
let truckdiv = document.querySelector(".fuel");
let trucks = document.querySelectorAll(".fuelimg");
let rocket = document.querySelector('.rocket');
let score = document.querySelector(".score");
let correctAnswer;



//saves the game state
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

// function to display and update the problem
function displayProblem() {
    gameState.currentQuestion = generateProblem()
    question.innerHTML = `${gameState.currentQuestion.operand1}` + `${gameState.currentQuestion.operator}` + `${gameState.currentQuestion.operand2}` + "=";
    score.textContent = `current score is : ${gameState.score}`;
    answerInput.value = "";
    answerInput.focus()


}
displayProblem()

gameForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const q = gameState.currentQuestion
    if (q.operator == "+") correctAnswer = q.operand1 + q.operand2;
    if (q.operator == "-") correctAnswer = q.operand1 - q.operand2;
    if (q.operator == "X") correctAnswer = q.operand1 * q.operand2;
    
    if (parseInt(answerInput.value, 10) === correctAnswer) {
        gameState.score++
        score.textContent = `current score is : ${gameState.score}`;
        let randomChild = Math.floor(Math.random() * (trucks.length), 10)
        
        trucks[randomChild].classList.add("hidden")
        displayProblem()
        checkLogic()

    } else {
        gameState.wrong++
        score.textContent = `current score is : ${gameState.score}`;
        alert("wrong")
        displayProblem()
        checkLogic()
    }  


}

function checkLogic() {
  // if you won
  if (gameState.score === 7) {
      gameState.score = 0;
      rocket.classList.add("animate")   
  }

  // if you lost
    if (gameState.wrong === 3) {
        gameState.wrong = 0
        console.log(gameState.wrong);
        alert("you lose")
  }
}

