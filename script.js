var timeEl = document.querySelector(".time");

var genbutton = document.querySelector("#generate");
genbutton.addEventListener("click", startTimer);

var timeLeft = 100;

function startTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft + " Seconds left! Hurry up!.";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
    //   sendMessage();
    }

  }, 1000);
}