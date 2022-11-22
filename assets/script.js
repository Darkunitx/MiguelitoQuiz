var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var titleEl = document.querySelector(".title");
var innerEl = document.querySelector(".inner");
var genbutton = document.querySelector("#generate");
genbutton.addEventListener("click", startGame);

var question1 = [{
    title:"Which of the following is not a Javascript Data Type?",
    choices: ["Number","String","Boolean","Puppies"],
    answer: "Puppies"}
]

var question2 = [{
    title:"What is 'this' keyword in JavaScript??",
    choices: ["refers to the object from where it was called.","refers to whereever we point with our finger","Not sure","refers to background colors"],
    answer: "refers to the object from where it was called."}
]

var question3 = [{
    title:"What is a method?",
    choices: ["no","maybe","yes","Of course! here have two dollars instead!"],
    answer: "Of course! here have two dollars instead!"}
]

var question4 = [{
    title:"Coolest color in the world, Go",
    choices: ["yellow","cyan","red","black"],
    answer: "cyan"}
]

var question5 = [{
    title:"Does pineapple go on pizza?",
    choices: ["No","No","No","No"],
    answer: "No"}
]

var question6 = [{
    title:"How far away is the sun?",
    choices: ["93 million miles","530 billion miles","2 yards away","not close enough"],
    answer: "93 million miles"}
]

var question7 = [{
    title:"Is mayonnaise an instrument?",
    choices: ["It is whatever you want it to be","Could Be","Yes, Patrick","No, Horseradish is not an instrument either"],
    answer: "No, Horseradish is not an instrument either"}
]

var question8 = [{
    title:"What color is a Firetruck ?",
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
    titleEl.textContent = "Question 1"
    mainEl.textContent = question1[0].title;
    innerEl.textContent = question1[0].choices;
    // mainEl.textContent = question1[1].choices;
    // mainEl.textContent = question1[2].choices;
    // mainEl.textContent = question1[3].choices;

}

function questionTwo () {
    titleEl.textContent = "Question 2"

}

function questionThree () {
    titleEl.textContent = "Question 3"

}

function questionFour () {
    titleEl.textContent = "Question 4"

}

function questionFive () {
    titleEl.textContent = "Question 5"

}

function questionSix () {
    titleEl.textContent = "Question 6"

}

function questionSeven () {
    titleEl.textContent = "Question 7"

}

function questionEight () {
    titleEl.textContent = "Question 8"

}

function loserMessage(){
    timeEl.textContent = "You lost Suckaaa"
    titleEl.textContent = ""
    mainEl.textContent = ""
    innerEl.textContent = ""

    return null;
}