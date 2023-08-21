// create variable to hold the state of the game
let mistakes = 0;
let correctAnswer = 0;
let currentQuestion = 0;
let numCorrect = 0;
let numIncorrect = 0;

// this section of code adds all answers from the 12 times table to the answers array. This includes repeated values.
let answers = [];
for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        answers.push(i * j);
    }
}

// this code randomises the order of the answers array
answers = answers.sort(() => Math.random() - 0.5);

// this allows for a reset of the current game with the 'New Game' button
function resetGame() {
    mistakes = 0;
    correctAnswer = 0;
    currentQuestion = 0;
    numCorrect = 0;
    numIncorrect = 0;
    showQuestion();
    showMistakes();
    showCorrectAnswer();
}

document.getElementById("resetButton").addEventListener("click", resetGame);

function showMistakes() {
    document.getElementById("mistakes").innerHTML = + mistakes;
}

function showCorrectAnswer() {
    document.getElementById("correctAnswer").innerHTML = + correctAnswer;
}

function showQuestion() {
    document.getElementById("num").innerHTML = answers[currentQuestion];
}

// once a question has been correctly answered, it will move on to the next one. Otherwise each mistake will be displayed below the grid
function checkAnswer(i) {
    let I = i - 1;
    let row = Math.ceil(i / 12);
    let col = i % 12 || 12;

    if (row * col === answers[currentQuestion]) {
        console.log("Correct");
        correctAnswer++;
        numCorrect++;
        currentQuestion++;
        showQuestion();
        showCorrectAnswer();
    } else {
        console.log("Incorrect");
        mistakes++;
        numIncorrect++;
        showMistakes();
    }
}

// this makes the buttons function, with their location determining whether or not the question has been answered correctly
function addEventListenerForButton(buttonId) {
    document.getElementById(buttonId).addEventListener("click", function() {
        checkAnswer(Number(buttonId));
    });
}

// this allows for a range of answers to be checked
for (let i = 1; i <= 144; i++) {
    addEventListenerForButton(i);
}

showQuestion();
addEventListeners();
resetGame();
