// showing questions when we click start 
document.getElementById("start").addEventListener('click', event => {
    document.getElementById("showMe").classList.remove('hidden')
    displayQuestion()

})

// question count start at zero
currentQuestion = 0

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
    <p>
    ${questions[currentQuestion].question}
    </p>
    `
    document.getElementById('myOptions').innerHTML = `
    <p>
    ${questions[currentQuestion].options[0]}
    </p>
    <p>
    ${questions[currentQuestion].options[1]}
    </p>
    `
}