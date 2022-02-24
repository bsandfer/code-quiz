const timerFunction = () => {
    timer -= 1
    document.getElementById('timer').innerHTML = `
    ${timer}
    `
    if (timer < 0) {
        document.getElementById('all').innerHTML = `
        <h1> Try Again. </h1>
        `
    }
}

let myTimer

// showing questions when we click start 
document.getElementById("start").addEventListener('click', event => {
    document.getElementById("showMe").classList.remove('hidden')
    displayScore()
    myTimer = setInterval(timerFunction, 1000) 
    displayQuestion()

})
// diplay the score 
const displayScore = () => {
    document.getElementById("score").innerHTML = `
    Score: ${score}
    `
}

const quizFinished = () => {
    displayScore()
    clearInterval(myTimer)
    console.log('quiz finished')
    document.getElementById('myQuestion').innerHTML = ''
    document.getElementById('myOptions').innerHTML = ''
}

// console log | answer selection 
document.addEventListener('click', event => {
    if(event.target.classList.contains('option')) {
    
        if(event.target.dataset.option== event.target.dataset.answer) {
            console.log('Correct!')
            score += 1
            currentQuestion += 1
            if(currentQuestion == questions.length) {
                quizFinished()
                displayScore()
                clearInterval(myTimer)
               

            } else {
                displayScore()
                displayQuestion()
            }
        } else {
            console.log('Wrong.')
            timer -= 5
        }
    }   
})


// set question number, score and timer

currentQuestion = 0
let score = 0
let timer = 30

// define variables as arrays
let questions = [
    {
        question: "why did the chicken cross the road?",
        options: ['to get to the other side', 'who knows?'],
        answer: 'to get to the other side'
    },
    {
        question: "knock knock",
        options: ['whos there?', 'who knows?'],
        answer: 'whos there?'
    
    }
]


const displayQuestion = () => {
    document.getElementById("myQuestion").innerHTML = `
    <p
    
    >
    ${questions[currentQuestion].question}
    </p>
    `
    document.getElementById('myOptions').innerHTML = `
    <p
    class="option"
    data-option= '${questions[currentQuestion].options[0]}'
    data-answer= '${questions[currentQuestion].answer}'
    >
    ${questions[currentQuestion].options[0]}
    </p>
    <p
    class="option"
    data-option= '${questions[currentQuestion].options[1]}'
    data-answer= '${questions[currentQuestion].answer}'
    >
    ${questions[currentQuestion].options[1]}
    </p>
    `
}