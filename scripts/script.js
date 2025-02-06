let quiz;

let quizActive = false;
let quizConcluded = false;
let questionActive = false;
let questionNow;
let score = 0;
const form = document.getElementById("start");
form.addEventListener("click", function (event) {
  score = 0;
  quizActive = true;
  quiz = new Quiz(10);
  questionActive = true;
  setNextQuestion();
  let scoreEl = document.querySelector(".section__score");
  scoreEl.innerHTML = `Which movie is this 'whoa' from?`;
  let movie1 = document.querySelector(".section__video");
  movie1.classList.remove("hide");
  form.innerHTML = `Give me &nbsp; <i>another</i> &nbsp; 'whoa' to guess!`
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
  const val = form2.innerText;
  console.log(val);
  let validation = questionNow.validateAnswer(val);
  let scoreEl = document.querySelector(".section__score");
  if (validation) {
    scoreEl.innerHTML = `<img src="https://media.tenor.com/hY5YVzpFgIkAAAAM/keanu-reeves-woah.gif" alt="">`;
  } else {
    scoreEl.innerText = "Sorry! You are wrong. Try another 'whoa'.";
  }
});
const form3 = document.getElementById("second_Option");
form3.addEventListener("click", function (event) {
  event.preventDefault();
  const val = form3.innerText;
  console.log(val);
  let validation = questionNow.validateAnswer(val);
  let scoreEl = document.querySelector(".section__score");
  if (validation) {
    scoreEl.innerHTML = `<img src="https://media.tenor.com/hY5YVzpFgIkAAAAM/keanu-reeves-woah.gif" alt="">`;
  } else {
    scoreEl.innerText = "Sorry! You are wrong. Try another 'whoa'.";
  }
});