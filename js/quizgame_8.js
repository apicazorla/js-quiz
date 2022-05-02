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
    imgSrc: "assets/birds/08a.jpg",
    choiceA: "methoxymethane",
    choiceB: "dimethyl ether",
    choiceC: "methyl ether",
    choiceD: "methyl oxide",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08b.jpg",
    choiceA: "ethyl methyl ether",
    choiceB: "ethoximethane",
    choiceC: "methoxiethane",
    choiceD: "methyl ethyl ether",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08c.jpg",
    choiceA: "2-bromoethyl ethyl ether",
    choiceB: "ethyl 2-bromoethyl ether",
    choiceC: "2-bromo-1-ethoxyethane",
    choiceD: "1-bromo-2-ethoxiethane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08d.jpg",
    choiceA: "cyclopropyl cyclobutyl ether",
    choiceB: "cyclopropoxycyclobutane",
    choiceC: "ciclobutoxycyclopropane",
    choiceD: "cyclobutyl cyclopropyl ether",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08e.jpg",
    choiceA: "propyl vinyl ether",
    choiceB: "ethenyl propyl ether",
    choiceC: "1-(vinyloxy)propane",
    choiceD: "1-(ethenyloxy)propane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08f.jpg",
    choiceA: "methyl phenyl ether",
    choiceB: "ansole",
    choiceC: "methoxibenzene",
    choiceD: "phenoximethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08g.jpg",
    choiceA: "1-chloro-4-methoxybenzene",
    choiceB: "1-methoxy-4-chlorobenzene",
    choiceC: "3-chorophenyl methyl ether",
    choiceD: "4-chlorophenyl methyl ether",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08h.jpg",
    choiceA: "cyclohexyloxibenzene",
    choiceB: "(cyclohexyloxy)benzene",
    choiceC: "cyclohexyloxy phenyl ether",
    choiceD: "phenyl cyclohexyl ether",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08i.jpg",
    choiceA: "diphenyl ether",
    choiceB: "phenoxybenzene",
    choiceC: "oxidibenzene",
    choiceD: "1,1'-oxidibenzene",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/08j.jpg",
    choiceA: "methyl 2-naphthyl ether",
    choiceB: "methyl naphthalen-2-yl ether",
    choiceC: "2-methoxynaphthalene",
    choiceD: "methoxy  naphthalene",
    correctAnswer: "C"
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
