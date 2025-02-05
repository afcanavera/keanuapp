let quiz;

let quizActive = false;
let quizConcluded = false;
let questionActive = false;
let questionNow;
let score = 0;
let order = 0;
const form = document.getElementById("start");
form.addEventListener("click", function (event) {
  score = 0;
  quizActive = true;
  quiz = new Quiz(10);
  questionActive = true;
  setNextQuestion();
});
async function setNextQuestion() {
  if (!(quiz.getOrder() >= 10)) {
    console.log();
    questionNow = await quiz.getNextQuestion();
    var video = document.querySelector(".section__video");
    console.log(questionNow);
    console.log(questionNow.getVideo());
    video.setAttribute("src", questionNow.getVideo());
    document.getElementById("first_Option").innerText = questionNow
      .getOptions()
      .at(0);
    document.getElementById("second_Option").innerText = questionNow
      .getOptions()
      .at(1);
    video.setInnerText;
  } else {
    quizActive = false;
  }
}
const form2 = document.getElementById("first_Option");
form2.addEventListener("click", function (event) {
  event.preventDefault();
  if (quizActive) {
    if (questionNow.validateAnswer(questionNow.getOptions().at(0))) {
      let scoreVal = document.getElementsByClassName("section__score");
      scoreVal.innerText = "Score: " + String(++score);
    }
    order++;
    setNextQuestion();
  }
});
const form3 = document.getElementById("second_Option");
form3.addEventListener("click", function (event) {
    event.preventDefault();
    if (quizActive) {
      if (questionNow.validateAnswer(questionNow.getOptions().at(1))) {
        let scoreVal = document.getElementsByClassName("section__score");
        scoreVal.innerText = "Score: " + String(++score);
      }
      order++;
      setNextQuestion();
    }
  });
