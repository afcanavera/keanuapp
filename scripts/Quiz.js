/**
* FUNCIONALITY: creates the quiz content questions,and stores the score.
 */
    class Quiz{

    #questions;
    #score;
    #order;
    #questionsNum;
    #checkValidation = false;
    /* 
        FUNCTIONALITY: Initializes all the quiz questions that will be asked for the quiz session.

        Parameters: number of questions to initialize

        Returns: None
    */
    constructor(questions){        
        this.#score = 0;
        this.#order = 1;
        this.#questionsNum =questions;
        this.#questions = [];
        for(var q=0; q<questions;q++){
            var temp = new Question();
            temp.intializeQuestion();
            this.#questions.push(temp);
        }

    }
    /* 
        FUNCTIONALITY: Initializes all the quiz questions that will be asked for the quiz session.

        Parameters: None

        Returns: Question variable
    */
    getNextQuestion() {
        if(this.#order > this.#questionsNum){
            throw new exception("function order has been maxed out")
        }
        this.#checkValidation =true;
        console.log(this.#questions[this.#order-1]);

        return this.#questions[this.#order-1];
    }
    /* 
        FUNCTIONALITY: Initializes all the quiz questions that will be asked for the quiz session.

        Parameters: None

        Returns: Question variable
    */
    getScore(){
        return this.#score;
    }

    validateQuestion(answer){
        if(this.#checkValidation){
            return;
        }
        if(this.#questions.at(this.#order++-1).validateQuestion(answer)){
            this.#score++;
            this.#checkValidation = false;
            return true;
        }else{
            this.#score++;
            this.#checkValidation = false;
            this.#order++;
            return answer;
        }
    }
    getOrder(){
        return this.#order;
    }

     
}
