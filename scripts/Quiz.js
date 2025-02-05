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

        if(questions.type != Number){
            throw new exception("Parameter error: please enter a ")
        }
        this.#score = 0;
        this.#order = 1;
        this.#questionsNum =questions;
        this.#questions = [];
        for(var q in questions){
            var temp = new Question();
            temp.initializeQuestion();
            questions.append(temp);
        }

    }
    /* 
        FUNCTIONALITY: Initializes all the quiz questions that will be asked for the quiz session.

        Parameters: None

        Returns: Question variable
    */
    getNextQuestion() {
        if(this.#order > questionsNum){
            throw new exception("function order has been maxed out")
        }
        this.#checkValidation =true;
        return this.#questions.at(this.#order-1);
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
    getScore(){
        return this.#score;
    }

     
}
