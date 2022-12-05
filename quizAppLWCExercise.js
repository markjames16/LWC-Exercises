import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} 
    correctAnswers = 0 
    isSubmitted = false 
    myQuestions = [
        {
        id: "Question 1",
        question: "Which one is not a dog breed?",
        answers: {
            a: "Rottweiler",
            b: "Shiba Inu",
            c: "Aspin"
        },
        correctAnswer:"c"
    },
    
    {
        id: "Question 2",
        question: "Which commander killed Lapu Lapu?",
        answers: {
            a: "Ferdinand Marcos",
            b: "Ferdinand Magellan",
            c: "Fernando Mactan"
        },
        correctAnswer:"b"
    },

    {
        id: "Question 3",
        question: "What does 1 + 1 equates to?",
        answers: {
            a: "2",
            b: "11",
            c: "0"
        },
        correctAnswer:"a"
    }

  ]

    
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    
    changeHandler(event){
        const {name, value} = event.target 
        this.selected={...this.selected, [name]:value}
    }
    
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
   
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}