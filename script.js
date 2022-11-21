var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var genbutton = document.querySelector("#generate");
genbutton.addEventListener("click", startGame);

var question1 = [
    {title:"How do you spell cat?",
    choices: ["c-e-t","c-o-t","c-a-t","d-o-g"],
    answer: "d-o-g"}
]

var question2 = [
    {title:"What is One plus One?",
    choices: ["One","zero","two","eight hundred and fifty five"],
    answer: "two"}
]

var question3 = [
    {title:"can i have a dollar?",
    choices: ["no","maybe","yes","Of course! here have two dollars instead!"],
    answer: "Of course! here have two dollars instead!"}
]

var question4 = [
    {title:"Coolest color in the world, Go",
    choices: ["yellow","cyan","red","black"],
    answer: "cyan"}
]

var question5 = [
    {title:"Does pineapple go on pizza?",
    choices: ["No","No","No","No"],
    answer: "No"}
]

var question6 = [
    {title:"How far away is the sun?",
    choices: ["93 million miles","530 billion miles","2 yards away","not close enough"],
    answer: "93 million miles"}
]

var question7 = [
    {title:"Is mayonnaise an instrument?",
    choices: ["It is whatever you want it to be","Could Be","Yes, Patrick","No, Horseradish is not an instrument either"],
    answer: "No, Horseradish is not an instrument either"}
]

var question8 = [
    {title:"What color is a Firetruck ?",
    choices: ["Rainbow","Red","black","I give up"],
    answer: "Red"}
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