
let quiz;

let quizActive = false;
let quizConcluded= false;
let questionActive = false;
let questionNow;
let score = 0;
const form = document.getElementById("start");
form.addEventListener('click', function (event) {
    score = 0;
    quizActive = true;
    quiz = new Quiz(10);
    questionActive = true;
    setNextQuestion();
    
});
function setNextQuestion(){
    if(!(quiz.getOrder() >=10)){
        console.log()
        questionNow = quiz.getNextQuestion();
        var video = document.getElementById("video");
        video.setAttribute("src",questionNow.getVideo());
        document.getElementsById("first_Option").innerText = questionNow.getOptions().at(0);
        document.getElementsById("second_Option").innerText = questionNow.getOptions().at(1);
        video.setInnerText;
    }else{
        quizActive = false;
    }
    

}
const form2 = document.getElementById("first_Option");
form2.addEventListener('click', function (event) {
    event.preventDefault();
    if(quizActive){
        var answer = quiz.validateQuestion(questionNow.getOptions().at(0));
        if(answer){
            let scoreVal = document.getElementsByClassName("section__score");
            scoreVal.innerText = "Score: " + String(++score);
        }
        setNextQuestion();
    }
});
const form3 = document.getElementById("second_Option");
form2.addEventListener('click', function (event) {
    event.preventDefault();
    if(quizActive){
        var answer = quiz.validateQuestion(questionNow.getOptions().at(1));
        if(answer){
            let scoreVal = document.getElementsByClassName("section__score");
            scoreVal.innerText = "Score: " + String(++score);
        }
        setNextQuestion();
    }
});