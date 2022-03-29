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
    imgSrc: "assets/birds/03a.jpg",
    choiceA: "cyclohexene",
    choiceB: "cyclopentene",
    choiceC: "benzene",
    choiceD: "cyclohexane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03b.jpg",
    choiceA: "1-methyl-2-ethylcyclopentane",
    choiceB: "1-ethyl-2-methylcyclopentane",
    choiceC: "o-ethylmethylcyclopentane",
    choiceD: "2-methyl-1-ethylcyclopentane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03c.jpg",
    choiceA: "cyclobuta-1,3-diene",
    choiceB: "butadiene",
    choiceC: "1,3-cyclobutadiene",
    choiceD: "cyclobutadyene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03d.jpg",
    choiceA: "3-methylcyclohex-1-ene",
    choiceB: "4-methylcyclohex-1-ene",
    choiceC: "4-methylcyclohexene",
    choiceD: "3-methylcyclohexene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03e.jpg",
    choiceA: "1-methyl-7-ethylcyclohepta-2,4-diene",
    choiceB: "5-ethyl-6-methylcyclohepta-1,3-diene",
    choiceC: "4-ethyl-5-methylcyclohepta-1,3-diene",
    choiceD: "1-ethyl-7-methylcyclohepta-2,4-diene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03f.jpg",
    choiceA: "4-ethyl-3-methylcyclopent-1-yne",
    choiceB: "4-ethyl-5-methylcyclopentyne",
    choiceC: "4-ethyl-3-methylcyclopentyne",
    choiceD: "3-ethyl-4-methylcyclopent-1-yne",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03g.jpg",
    choiceA: "1,2-dimethyl-4-ethylcyclohexane",
    choiceB: "4-ethyl-1,2-dimethylcyclohexane",
    choiceC: "5-ethyl-1,2-dimethylcyclohexane",
    choiceD: "1-ethyl-3,4-dimethylcyclohexane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03h.jpg",
    choiceA: "3-methyl-6-ethylocta-4-en-1-yne",
    choiceB: "3-methyl-8-ethylocta-1-en-4-yne",
    choiceC: "8-ethyl-3-methylocta-1-en-4-yne",
    choiceD: "6-ethyl-3-methylocta-4-en-1-yne",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03i.jpg",
    choiceA: "phenylcyclohexane",
    choiceB: "dicyclohexylmethane",
    choiceC: "bis(ciclohexane)",
    choiceD: "diphenylmethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/03j.jpg",
    choiceA: "1-ethyl-2-ethylidencyclohexane",
    choiceB: "1-ethyl-2-vinylcyclohexane",
    choiceC: "2-ethyl-1-ethenylcyclohexane",
    choiceD: "1-ethenyl-2-ethylcyclohexane",
    correctAnswer: "D"
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
        scoreMessage.innerHTML = "<p>Great work! You really know your birds!</p>"
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
