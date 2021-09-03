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
let newGameButton2 = document.querySelector("#newGameButton2")
let newGame = document.querySelector(".newGame")
let lostModal = document.querySelector(".youLost")

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
// handles the game input submittion
gameForm.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    //checks for the operator and gets the correct answer
    const q = gameState.currentQuestion
    if (q.operator == "+") correctAnswer = q.operand1 + q.operand2;
    if (q.operator == "-") correctAnswer = q.operand1 - q.operand2;
    if (q.operator == "X") correctAnswer = q.operand1 * q.operand2;
    // this if statement checks if the user, has entered the correct answer
    if (parseInt(answerInput.value, 10) === correctAnswer) {
        //if the correct answeris entered add one to the game store
        gameState.score++
        //generates a string with "fuelNum" and the score.
        truckToRemove = "fuelNum" + gameState.score
        //converts the truck to remove
        truckToRemoveNum = window[truckToRemove]
        //removes a fuel truck image
        truckToRemoveNum.classList.add("hidden")
        //displays a new problem
        displayProblem()
        //checks game score  if its over six the player wins
        checkLogic()
        
        

    } else {
        // if the player is wrong, we increase a "wrong" count used to deternim lose
        gameState.wrong++
        //onWrong andswer, gives the player feed back
        wrongAnswerModal.classList.remove("hidden")
        
        //displays a new problem
        displayProblem()
        //checks game score  if its over six the player wins
        checkLogic()
    }  


}

// event listners for the modal buttons
modalButton.addEventListener("click", wrongAnswerPopup)
newGameButton.addEventListener("click", newGameFunc)
newGameButton2.addEventListener("click", newGameFunc)

//function used to show a model
function wrongAnswerPopup() {
    wrongAnswerModal.classList.add("hidden")
    
}
 //function to relaod the game on a new game event
function newGameFunc() {
    window.location.reload();
}
 //checks the win lose logic
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
        lostModal.classList.remove("hidden")    
   }
}

