//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07a.jpg",
    choiceA: "ethylic alcohol",
    choiceB: "ethanol",
    choiceC: "methylcarbinol",
    choiceD: "hydroxyethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07b.jpg",
    choiceA: "ethane-1,2-diol",
    choiceB: "ethanediol",
    choiceC: "ethylene glycol",
    choiceD: "1,2-ethanediol",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07c.jpg",
    choiceA: "propanol",
    choiceB: "propilic alcohol",
    choiceC: "propan-1-ol",
    choiceD: "1-propanol",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07d.jpg",
    choiceA: "2-hydroxypent-3-ene",
    choiceB: "pent-2-en-4-ol",
    choiceC: "4-hydroxypent-2-ene",
    choiceD: "pent-3-en-2-ol",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07e.jpg",
    choiceA: "3-chlorocyclopentan-1-ol",
    choiceB: "1-chloro-3-hydroxycyclopentane",
    choiceC: "3-chlorocyclopentanol",
    choiceD: "3-chloropentanol",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07f.jpg",
    choiceA: "3-methylcyclobuta-1,2-diol",
    choiceB: "1-methylcyclobuta-1,3-diene-2,3-diol",
    choiceC: "3-methylcyclobuta-2,4-diene-1,2-diol",
    choiceD: "3-methyl-2,4-cyclobutadiene-1,2-diol",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07g.jpg",
    choiceA: "phenol",
    choiceB: "phenic acid",
    choiceC: "phenylic acid",
    choiceD: "hydroxybenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07h.jpg",
    choiceA: "2-chlorobenzenol",
    choiceB: "2-chlorophenol",
    choiceC: "o-chlorophenol",
    choiceD: "2-chlorohydroxybenzene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07i.jpg",
    choiceA: "1-hydroxy-4-methylbenzene",
    choiceB: "p-cresol",
    choiceC: "4-methylbenzenol",
    choiceD: "4-methylphenol",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/07j.jpg",
    choiceA: "1,3-dihydroxybenzene",
    choiceB: "benzene-1,3-diol",
    choiceC: "1,3-benzenediol",
    choiceD: "resorcinol",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the nomenclature!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
