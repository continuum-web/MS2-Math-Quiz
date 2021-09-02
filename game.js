//bring in the HTML
let question = document.querySelector("#question");
let gameForm = document.querySelector(".gameForm");
let playerAnswer = document.querySelector(".answerInput");
let answerInput = document.querySelector(".answerInput")
let truckdiv = document.querySelector(".fuel");
let trucks = document.querySelectorAll(".fuelimg");
let rocket = document.querySelector('.rocket');
let score = document.querySelector(".score");
let scoreNumber = document.querySelector(".scoreNumber")
let wrongAnswerModal = document.querySelector(".wrongModal")
let modalButton = document.querySelector("#modalButton")
let newGameButton = document.querySelector("#newGameButton")
let newGame = document.querySelector(".newGame")

let fuelNum1 = document.querySelector("#fuelNum1")
let fuelNum2 = document.querySelector("#fuelNum2")
let fuelNum3 = document.querySelector("#fuelNum3")
let fuelNum4 = document.querySelector("#fuelNum4")
let fuelNum5 = document.querySelector("#fuelNum5")
let fuelNum6 = document.querySelector("#fuelNum6")

let correctAnswer;



//saves the game state
let gameState = {
    //used to keep scoure and hide the fuel trucks
    score: 0,
    wrong:0
}

//generate random Number
function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

//generate the math problem
    //this function is use gets 2 opperands and an opperator
function generateProblem() {
    return {
        operand1: generateNumber(10),
        operand2: generateNumber(10),
        //generate number is also used to pick a random operator from ["+","-","X"]
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
        let randomChild = Math.floor(Math.random() * (trucks.length), 10)
        truckToRemove = "fuelNum" + gameState.score
        console.log(truckToRemove);
        
        truckToRemoveNum = window[truckToRemove]
        truckToRemoveNum.classList.add("hidden")
        displayProblem()
        checkLogic()
        
        

    } else {
        gameState.wrong++
        wrongAnswerModal.classList.remove("hidden")
        
        
        displayProblem()
        checkLogic()
    }  


}
modalButton.addEventListener("click", wrongAnswerPopup)
newGameButton.addEventListener("click", newGameFunc)

function wrongAnswerPopup() {
    wrongAnswerModal.classList.add("hidden")
    
}
 
function newGameFunc() {
    console.log("stuff here too")
    window.location.reload();
}

function checkLogic() {
  // if you won
  if (gameState.score === 6) {
      gameState.score = 0;
      rocket.classList.add("animate")
      newGame.classList.remove("hidden")
  }

   //if you lost
     if (gameState.wrong === 6) {
        gameState.wrong = 0
         console.log(gameState.wrong);
         alert("you lose")
   }
}

