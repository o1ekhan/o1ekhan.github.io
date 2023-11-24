const quizData = [
    {
        question: "Did you like my website?",
        a: "No",
        b: "Yes",
        c: "Hard to answer",
        correct: "b",
    },
    {
        question: "Technologies about DVD is...",
        a: "Travel",
        b: "Communication",
        c: "Entertainment",
        correct: "c",
    },
    {
        question: "What is 1+1",
        a: "3",
        b: "2",
        c: "100000",
        correct: "b",
    },
    {
        question: "Welcome to...",
        a: "Back in time",
        b: "My website",
        c: "My home",
        correct: "a",
    },
    {
        question: "Should I get 100%",
        a: "Yes",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2 class="quiz-header">You answered coreectly at ${score}/${quizData.length} questions</h2>
            <button class="quiz-btn" onclick="location.reload()">Reload</button>
            `;
        }
    }
});

var pool = new Audio('/mouseclick.mp3')
var button = document.getElementById('submit')
var isPlaing = false

const play = () =>{
    if(isPlaing){
        pool.pause()
        pool.currentTime = 0;
        isPlaing = false
    }
    else{
        pool.play()
        isPlaing = true
    }
}

button.addEventListener('click', play)