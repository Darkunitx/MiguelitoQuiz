var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var genbutton = document.querySelector("#generate");
genbutton.addEventListener("click", startGame);

var questions = [
    {title:"How many fingers am i holding up?",
    choices: ["one","two","three","eight hundd fifty five"],
    answer: "eight hundred and fifty five"}
]

function startGame() {
    startTimer();
    questionOne();
}

function startTimer() {
    var timeLeft = 10;
    var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds left! Hurry up!.";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
       loserMessage();
    }

  }, 1000);
}

function questionOne () {
    mainEl.textContent = "Question 1"

}

function questionTwo () {
    mainEl.textContent = "Question 2"

}

function questionThree () {
    mainEl.textContent = "Question 3"

}

function questionFour () {
    mainEl.textContent = "Question 4"

}

function questionFive () {
    mainEl.textContent = "Question 5"

}

function questionSix () {
    mainEl.textContent = "Question 6"

}

function questionSeven () {
    mainEl.textContent = "Question 7"

}

function questionEight () {
    mainEl.textContent = "Question 8"

}

function loserMessage(){
    timeEl.textContent = "You lost Suckaaa"
    return null;
}