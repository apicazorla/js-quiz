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
    imgSrc: "assets/birds/14a.jpg",
    choiceA: "ethanamine",
    choiceB: "ethylamine",
    choiceC: "ethaneamine",
    choiceD: "aminoethane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14b.jpg",
    choiceA: "3-aminohexane",
    choiceB: "3-hexaneamine",
    choiceC: "hexan-3-amine",
    choiceD: "1-ethylbutylamine",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14c.jpg",
    choiceA: "4-methyl-2,3,5.hexanetriamine",
    choiceB: "4-methylhexane-2,3-5-triamine",
    choiceC: "2-methylhexane-2,4,5-triamine",
    choiceD: "2-methyl-2,4,5-hexanetriamine",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14d.jpg",
    choiceA: "2-methyl-3-pentynamine",
    choiceB: "2-methyl-3-pentyn-1-amine ",
    choiceC: "2-methylpent-3-ynanime",
    choiceD: "2-methylpent-3-yn-1-amine",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14e.jpg",
    choiceA: "(2-methylpropil)azane",
    choiceB: "(2-methylpropyl)amine",
    choiceC: "(isobutyl)amine",
    choiceD: "2-methylpropan-1-amine",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14f.jpg",
    choiceA: "dietilpropilamine",
    choiceB: "N,N-diethylpropanamine",
    choiceC: "N,N-diethylpropan-1-amine",
    choiceD: "dimethyl(propyl)amine",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14g.jpg",
    choiceA: "3-aminocyclohexanol",
    choiceB: "3-aminophenol",
    choiceC: "3-aminocyclohexan-1-ol",
    choiceD: "3-aminohydroxybenzene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14h.jpg",
    choiceA: "aniline",
    choiceB: "(phenyl)amine)",
    choiceC: "aminobenzene",
    choiceD: "benzenamine",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14i.jpg",
    choiceA: "ethyl(phenyl)amine",
    choiceB: "N-ethylaniline",
    choiceC: "N-ethylaminobenzene",
    choiceD: "N-ethyl-N-phenylamine",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/14j.jpg",
    choiceA: "m-aminobenzoic acid",
    choiceB: "3-carboxyaniline",
    choiceC: "m-carboxyaniline",
    choiceD: "3-aminobenzoic acid",
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
