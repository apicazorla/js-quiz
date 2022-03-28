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
    imgSrc: "assets/birds/02a.jpg",
    choiceA: "ethylene",
    choiceB: "acetylene",
    choiceC: "ethene",
    choiceD: "eth-1-ene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02b.jpg",
    choiceA: "methylprop-1-ene",
    choiceB: "2-methylprop-1-ene",
    choiceC: "methylpropene",
    choiceD: "2-methylpropene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02c.jpg",
    choiceA: "2,4-dimethylpent-2-ene",
    choiceB: "2,4-methylpent-2-ene",
    choiceC: "dimethylpent-2-ene",
    choiceD: "2,4-dimethylpentene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02d.jpg",
    choiceA: "6-ethyl-5-methyl-3-nonyne",
    choiceB: "6-ethyl-5-methylnon-3-yne",
    choiceC: "6-ethyl-5-methylnon-4-yne",
    choiceD: "5-methyl-6-ethylnon-3-yne",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02e.jpg",
    choiceA: "2-ethyl-4-methylpent-1-ene",
    choiceB: "4-methylene-2-methylhexane",
    choiceC: "4-methyl-2-ethylpent-1-ene",
    choiceD: "2-methyl-4-methylenehexane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02f.jpg",
    choiceA: "methylacethylene",
    choiceB: "propyne",
    choiceC: "prop-1-yne",
    choiceD: "1-propyne",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02g.jpg",
    choiceA: "1,4,7-nonatriene",
    choiceB: "2,5,8-nonatriene",
    choiceC: "nona-2,5,8-triene",
    choiceD: "nona-1,4,7-triene",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02h.jpg",
    choiceA: "2-methylocta-2,4-diyne",
    choiceB: "6-methylocta-2,4-diyne",
    choiceC: "2-methyloct-4,6-adiyne",
    choiceD: "6-methyloct-2,4-adiyne",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02i.jpg",
    choiceA: "3-ethyl-4-methylhex-3-en-1-yne",
    choiceB: "3-ethyl-4-methyl-3-hexen-5-yne",
    choiceC: "3-methyl-4-ethylhex-3-en-1-yne",
    choiceD: "4-ethyl-3-methylhex-3-en-1-yne",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/02j.jpg",
    choiceA: "3-ethyl-2-methylhex-2-en-4-yne",
    choiceB: "4-ethyl-5-methyl-2-hexen-4-yne",
    choiceC: "2-methyl-3-ethylhex-2-en-4-yne",
    choiceD: "4-ethyl-5-methylhex-4-en-2-yne",
    correctAnswer: "A"
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
