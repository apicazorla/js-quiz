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
    imgSrc: "assets/birds/06a.jpg",
    choiceA: "ethylamine",
    choiceB: "1-nitroethane",
    choiceC: "nitroethane",
    choiceD: "ethyl nitrate",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06b.jpg",
    choiceA: "1,3-dimethyl-2-nitropropane",
    choiceB: "2-methyl-3-nitrobutane",
    choiceC: "2-nitro-3-methylbutane",
    choiceD: "1-nitro-1-isopropylethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06c.jpg",
    choiceA: "2,4-dinitropenthane",
    choiceB: "3,5-dinitrohexane",
    choiceC: "3,5-dinitropentane",
    choiceD: "2,4-dinitrohexane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06d.jpg",
    choiceA: "1,1,2,2-tetranitroethene",
    choiceB: "tetranitroethene",
    choiceC: "1,1,2,2-tetranitroethylene",
    choiceD: "tetranitroethylene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06e.jpg",
    choiceA: "2-nitropent-3-yne",
    choiceB: "4-nitro-2-pentyne",
    choiceC: "4-nitro-2-pentyne",
    choiceD: "4-nitropent-2-yne",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06f.jpg",
    choiceA: "3,8-dinitronon-3-en-6-yne",
    choiceB: "2,7-dinitronon-6-en-3-yne",
    choiceC: "2,7-dinitrononen-3-yne",
    choiceD: "2,7-dinitrooct-6-en-3-yne",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06g.jpg",
    choiceA: "nitrohexene",
    choiceB: "4-nitrocyclohexene",
    choiceC: "4-nitrocyclohex-1-ene",
    choiceD: "3-nitrocyclohex-1-ene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06h.jpg",
    choiceA: "3-ethyl-5-nitrocyclohexene",
    choiceB: "3-ethyl-5-nitrohexene",
    choiceC: "3-ethyl-5-nitrocyclohex-1-ene",
    choiceD: "2-ethyl-4-nitrocyclohex-1-ene",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06i.jpg",
    choiceA: "nitrobenzene",
    choiceB: "nitrobenzol",
    choiceC: "nitrocyclohexane",
    choiceD: "1-nitrocyclohexane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/06j.jpg",
    choiceA: "2,4,6-trinitrotoluene",
    choiceB: "2,4,6-trinitromethylbenzene",
    choiceC: "2-methyl-1,3,5-trinitrobenzene",
    choiceD: "1-methyl-2,4,6-trinitrobenzene",
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
