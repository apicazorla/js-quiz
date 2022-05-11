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
    imgSrc: "assets/birds/12a.jpg",
    choiceA: "ethyl acetate",
    choiceB: "methyl acetate",
    choiceC: "ethyl ethanoate",
    choiceD: "methyl ethanoate",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12b.jpg",
    choiceA: "butyric ether",
    choiceB: "ethyl butyrate",
    choiceC: "ethyl n-butanoate",
    choiceD: "ethyl butanoate",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12c.jpg",
    choiceA: "isopropyl formate",
    choiceB: "isopropyl methanoate",
    choiceC: "propan-2-yl formate",
    choiceD: "1-methylethyl formate",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12d.jpg",
    choiceA: "3-methylbutyl acetate",
    choiceB: "3-methylbutyl ethanoate ",
    choiceC: "isopentyl acetate",
    choiceD: "isopentyl ethanoate",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12e.jpg",
    choiceA: "allyl butanoate",
    choiceB: "ethenyl butanoate",
    choiceC: "prop-2-en-1-yl butanoate",
    choiceD: "prop-1-en-1-yl butanoate",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12f.jpg",
    choiceA: "ethyl 2-hydroxypropionate",
    choiceB: "ethyl hidroxypropanoate",
    choiceC: "ethyl 2-hydroxypropanoate",
    choiceD: "ethyl hidroxypropionate",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12g.jpg",
    choiceA: "phenyl acetate",
    choiceB: "benzyl acetate",
    choiceC: "benzyl ethanoate",
    choiceD: "phenylmethyl ethanoate",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12h.jpg",
    choiceA: "benzoic ether",
    choiceB: "ethyl benzenecarboxylaye",
    choiceC: "methyl benzoate",
    choiceD: "ethyl benzoate",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12i.jpg",
    choiceA: "methyl 4-chloro-5-oxohexanoate",
    choiceB: "methyl 3-chloro-2-oxohexanoate",
    choiceC: "methyl 4-chloro-5-oxopentanoate",
    choiceD: "methyl 3-chloro-2-oxopentanoate",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/12j.jpg",
    choiceA: "dimethyl succinate",
    choiceB: "dimethyl butane-1,4-dioate",
    choiceC: "dimethyl butanedioate",
    choiceD: "dimethyl 1,4-butanedioate",
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
