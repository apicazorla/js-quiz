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
    imgSrc: "assets/birds/04a.jpg",
    choiceA: "cyclohexatriene",
    choiceB: "cyclohex-1,3,5-triene",
    choiceC: "benzene",
    choiceD: "1,3,5-cyclohexatriene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04b.jpg",
    choiceA: "toluene",
    choiceB: "phenylmethanetane",
    choiceC: "1-methylbenzene",
    choiceD: "metylbenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04c.jpg",
    choiceA: "m-dimethylbenzene",
    choiceB: "1,2-xylene",
    choiceC: "1,2-dimethylbenzene",
    choiceD: "o-dimethylbenzene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04d.jpg",
    choiceA: "1,3,5-trimethylbenzene",
    choiceB: "anisol",
    choiceC: "mesitylene",
    choiceD: "trimethylbenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04e.jpg",
    choiceA: "styrene",
    choiceB: "vinylbenzenee",
    choiceC: "phenylethene",
    choiceD: "ethenylbenzene",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04f.jpg",
    choiceA: "phenylbenzene",
    choiceB: "byphenyl",
    choiceC: "1-phenylbenzene",
    choiceD: "1,1'-biphenyl",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04g.jpg",
    choiceA: "1,2-biphenyl",
    choiceB: "naphthalin",
    choiceC: "naphthalene",
    choiceD: "antrhacene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04h.jpg",
    choiceA: "4-ethyl-1,2-dimethylbenzene",
    choiceB: "1-ethyl-3,4-dimethylbenzene",
    choiceC: "1,2-dimethyl-4-ethylbenzene",
    choiceD: "3,4-dimethyl-1-ethylbenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04i.jpg",
    choiceA: "1-cyclohexylbenzene",
    choiceB: "dcyclohexilbenzene",
    choiceC: "phenylcyclohexane",
    choiceD: "1,1'-phenylcyclohexane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/04j.jpg",
    choiceA: "(1,1-dimethylethyl)benzene",
    choiceB: "(2-methylpropan-2-yl)benzene",
    choiceC: "(tert-buthyl)benzene",
    choiceD: "(sec-buthyl)benzene",
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
