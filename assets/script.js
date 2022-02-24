// showing questions when we click start 
document.getElementById("start").addEventListener('click', event => {
    document.getElementById("showMe").classList.remove('hidden')
    displayQuestion()

})

// console log answer selection 
document.addEventListener('click', event => {
    if(event.target.classList.contains('option')) {
        // console.log(event.target.dataset.option)
        // console.log(event.target.dataset.answer)
        if(event.target.dataset.option== event.target.dataset.answer) {
            console.log('Correct!')
            score += 1
            currentQuestion += 1
            displayQuestion()
        } else {
            console.log('Wrong.')
        }
    
    }
    
})

// set question number, score and timer

currentQuestion = 0
let score = 0
let timer = 0

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