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
    imgSrc: "assets/birds/05a.jpg",
    choiceA: "methylene chloride",
    choiceB: "methylene dichloride",
    choiceC: "1,1-dichloromethane",
    choiceD: "dichloromethane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05b.jpg",
    choiceA: "bromodifluoromethane",
    choiceB: "bromodi(fluoro)methane",
    choiceC: "bromo(difluoro)methane",
    choiceD: "(bromo)difluoromethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05c.jpg",
    choiceA: "chloroethane",
    choiceB: "1-chloroethane",
    choiceC: "ethyl chloride",
    choiceD: "monochloroethane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05d.jpg",
    choiceA: "1,1,1-trifluoro-2,2-dichloroethane",
    choiceB: "1,1-dichloro-2,2,2-trifluoroethane",
    choiceC: "2,2-dichloro-1,1,1-trifluoroethane",
    choiceD: "2,2,2-trifluoro-1,1-dichloroethane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05e.jpg",
    choiceA: "sec-butyl chloride",
    choiceB: "2-chlorobutane",
    choiceC: "chlorobutane",
    choiceD: "2-chlorobutene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05f.jpg",
    choiceA: "3-bromocyclohexene",
    choiceB: "4-bromocyclohexene",
    choiceC: "4-bromocyclohex-1-ene",
    choiceD: "3-bromocyclohex-1-ene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05g.jpg",
    choiceA: "p-dichlorobenzene",
    choiceB: "m-dichlorobenzene",
    choiceC: "para-dichlorobenzene",
    choiceD: "1,4-dichlorobenzene",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05h.jpg",
    choiceA: "(chloromethyl)benzene",
    choiceB: "benzyl chloride",
    choiceC: "chloro(phenyl)methane",
    choiceD: "chloromethylbenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05i.jpg",
    choiceA: "perfluoroethylene",
    choiceB: "tetrafluoroethene",
    choiceC: "1,1,2,2-tetrafluoroethene",
    choiceD: "tetrafluoroethylene",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/05j.jpg",
    choiceA: "2-chloro-3-methyl-5-bromohex-3-ene",
    choiceB: "2-bromo-5-chloro-4-methylhex-4-ene",
    choiceC: "2-bromo-5-chloro-4-methylhex-3-ene",
    choiceD: "5-bromo-2-chloro-3-methylhex-3-ene",
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
