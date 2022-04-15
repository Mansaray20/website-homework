var currentquestion = 0;


document.querySelector(".beginbutton").addEventListener("click", beginquiz);
function beginquiz() {
  
  setInterval(myTimer, 1000);
  presentQuestion();
}
function myTimer() {
  if (time < 0) {
    clearInterval();
  } else {
    document.querySelector(".timer").textContent = time;
    time--;
  }
}
var time = 75;
var score = 0;


function presentQuestion() {
  document.querySelector(".my-question").textContent =
    questions[currentquestion].question;
  document.querySelector(".num-A").textContent =
    questions[currentquestion].options[0];
  document.querySelector(".num-B").textContent =
    questions[currentquestion].options[1];
  document.querySelector(".num-C").textContent =
    questions[currentquestion].options[2];
  document.querySelector(".num-D").textContent =
    questions[currentquestion].options[3];
}


document.querySelector(".num-A").addEventListener("click", userchoice);
document.querySelector(".num-B").addEventListener("click", userchoice);
document.querySelector(".num-C").addEventListener("click", userchoice);
document.querySelector(".num-D").addEventListener("click", userchoice);

function userchoice() {
  console.log(this.textContent);
  if (this.textContent === questions[currentquestion].answer) {
   
    currentquestion++;
    presentQuestion();
    
    score++;
    console.log(score);
    console.log("correctAnswer");
  } else {
    
    
    time -= 15;
    console.log("wrongAnswer");
  }
}

var questions = [
  {
    question: "Who is the president of the United State?",
    answer: "Joe Biden",
    options: [
      "Trump",
      "Clinton",
      "Bush",
      "Joe Biden",
    ],
  },
  {
    question: "What team does ronaldo play for?",
    answer: "Manchester United",
    options: [
      "Arsenal",
      "Chelsea",
      "Madrid",
      "Liverpool",
    ],
  },
  {
    question: "Who is the first president of America?",
    answer: "George Washington",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Franklin richardson",
      "George Forman",
    ],
  },
  {
    question: "Who is the NBA finals MVP?",
    answer: "Giannis Antetekounmpo",
    options: [
      "Lebron",
      "Curry",
      "Booker",
      "Paul",
    ],
  },
  {
    question: "What is the Capital of France?",
    answer: "Paris",
    options: [
      "munich",
      "Turkey",
      "Columbus",
      "Los Angeles",
    ],
  },
];
