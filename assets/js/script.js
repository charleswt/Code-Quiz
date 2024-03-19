const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice"));
const displayScore = document.querySelector('#score');


let currentQuestion = {};
let questionOptions = [];
let score = 0;

let questions = [
  {
    question: "Where is the recommended location to include JavaScript in an HTML document?",
    choice1: "a) At the beginning of the <head> section",
    choice2: "b) At the end of the <body> section",
    choice3: "c) Inside the <footer> section",
    choice4: "d) Just before the closing </html> tag",
    answer: 2
  },
  {
    question: "What is the correct syntax for a comment in JavaScript?",
    choice1: "a) <!-- This is a comment -->",
    choice2: "b) /* This is a comment */",
    choice3: "c) // This is a comment",
    choice4: "d) <!--- This is a comment --->",
    answer: 3
  },
  {
    question: "Which function is used to parse a string and return an integer in JavaScript?",
    choice1: "a) parseInt()",
    choice2: "b) parseInteger()",
    choice3: "c) stringToInteger()",
    choice4: "d) toInteger()",
    answer: 1
  },
  {
    question: "What does HTML stand for?",
    choice1: "a) HyperText Markup Language",
    choice2: "b) HyperText Modeling Language",
    choice3: "c) HyperTransfer Markup Language",
    choice4: "d) HyperText Modeling Logic",
    answer: 3
  },
  {
    question: "Which HTML tag is used for creating an unordered list?",
    choice1: "a) <ul>",
    choice2: "b) <ol>",
    choice3: "c) <li>",
    choice4: "d) <list>",
    answer: 1
  },
  {
    question: "What does the 'alt' attribute in an image tag provide?",
    choice1: "a) Alternative text for the image",
    choice2: "b) Alignment of the image",
    choice3: "c) Altitude of the image",
    choice4: "d) Animation for the image",
    answer: 1
  },
  {
    question: "Which property is used to change the background color in CSS?",
    choice1: "a) color",
    choice2: "b) background-color",
    choice3: "c) bgcolor",
    choice4: "d) background",
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    choice1: "a) Counter Style Sheets",
    choice2: "b) Computer Style Sheets",
    choice3: "c) Cascading Style Sheets",
    choice4: "d) Colorful Style Sheets",
    answer: 3
  },
  {
    question: "Which CSS property is used for controlling the layout flow of an element?",
    choice1: "a) position",
    choice2: "b) float",
    choice3: "c) display",
    choice4: "d) layout",
    answer: 3
  },
  {
    question: "Which language is used for styling web pages?",
    choice1: "a) JavaScript",
    choice2: "b) HTML",
    choice3: "c) CSS",
    choice4: "d) Java",
    answer: 3
  }
];

const startGame = () => {
    questionOptions = [...questions];
    displayNewQuestion();
  };

const displayNewQuestion = () => {
    if (questionOptions.length === 0) {
    localStorage.setItem('recentScore', score);
    return window.location.assign("end.html");
};

const questionRandom  = Math.floor(Math.random() * questionOptions.length);
  currentQuestion = questionOptions[questionRandom];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion["choice" + number];
  });

  questionOptions.splice(questionRandom, 1);
};

choices.forEach(choice => {
    choice.addEventListener("click", btn => {

        const selectedChoice = btn.target;
        const selectedAnswer = selectedChoice.dataset["number"];
      
        const wrongRight = selectedAnswer == currentQuestion.answer ? "right" : "wrong";

        if (wrongRight === 'right') {
            updateScore();
        } else {
          minusTime();
        }
        displayNewQuestion();
        });
    });

    const updateScore = () => {score++; displayScore.innerText = score + "/10";};

    const minusTime = num => {num = 10; timeSecond -= num;};

    const timeH = document.getElementById('timeLeft');
    let timeSecond = 90;

    const countDown = setInterval (() =>{
      timeSecond--;
      displayTime(timeSecond);
      if (timeSecond <= 0 || timeSecond< 1){
        clearInterval(countDown);
        localStorage.setItem('recentScore', score);
      return window.location.assign("end.html");
      }
    },1000)

    const displayTime = second => {
      const sec = Math.floor(second % 90);
      timeH.innerText = `${sec<10?'0':''}${sec}s`;
    }

startGame();