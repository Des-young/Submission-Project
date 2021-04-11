let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
]

let app = {
    start: function() {

        this.currentPosition = 0
        this.score= 0

        let alts = document.querySelectorAll('.alternative');

        alts.forEach((el, i) => {
        // console.log(this);
            el.addEventListener('click', () => {
                this.checkAnswer(i);
            // console.log('check correct answer')
        });
    });
    this.updateStats()
    this.showQuestion(questions[this.currentPosition]);
    },

    showQuestion: function(q) {

        // keep track of current question.

        
        // 1. Select Dom element
        let titleDiv = document.getElementById('title');
// 2. modify
// pay attention to this part.  
            titleDiv.textContent = q.title;

        let alts = document.querySelectorAll('.alternative');
    
            alts.forEach(function(el, i){
                el.textContent = q.alternatives[i];
    });
    },

    checkAnswer: function(userSelect) {

        let currentQuestion = questions[this.currentPosition]

        if (currentQuestion.correctAnswer == userSelect) {
            console.log('correct!');
            this.score++;
            this.showResult(true)
        } else {
            console.log('wrong answer')
            this.showResult(false);
        }

        this.updateStats();

        //increase position
        this.increasePosition()

        // show next question
        this.showQuestion(questions[this.currentPosition])
    },

    increasePosition: function() {
        this.currentPosition++;
        let end = document.getElementById('ending');
        // if(this.currentPosition == questions.length) {
        //     this.currentPosition = 0
        // } else {
        //     this.currentPosition = ;
        // }

        if (this.currentPosition == questions.length) {
            if (this.score == 4) {
                end.innerHTML = 'Perfect Score!'
            } else {
                end.innerHTML = 'Good Tries!'
            }
        }
    },
    
    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `your score is: ${this.score}`;
    },
    
    showResult: function(isCorrect) {
      
        let resultDiv = document.getElementById('result');
        let result = '';

        if (isCorrect) {
            result = 'Correct Answer!';
        } else {
            let currentQuestion = questions[this.currentPosition];

            let correctAnswerIdx = currentQuestion.correctAnswer;

            let correctAnswerTxt = currentQuestion.alternatives[correctAnswerIdx];



            result = `Wrong! Correct answer is ${correctAnswerTxt}`;
        }

        resultDiv.textContent = result;
    }

};


app.start();

// let btn =document.getElementById('btn');

