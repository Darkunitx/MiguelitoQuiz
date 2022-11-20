var timeEl = document.querySelector(".time");
var genbutton = document.querySelector("#generate");
genbutton.addEventListener("click", startGame);

var questions = [
    {title:"How many fingers am i holding up?",
    choices: ["one","two","three","eight hundred and fifty five"],
    answer: "eight hundred and fifty five"}
]

function startGame() {
    startTimer();
    questionTime();
}

function startTimer() {
  var timeLeft = 100;
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds left! Hurry up!.";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
       loserMessage();
    }

  }, 1000);
}

function questionTime() {

}

function loserMessage(){
   window.alert("you lost SUCKAA");
   return null;
}