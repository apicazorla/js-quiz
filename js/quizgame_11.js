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
    imgSrc: "assets/birds/11a.jpg",
    choiceA: "vinegar",
    choiceB: "acetic acid",
    choiceC: "ethanoic acid",
    choiceD: "methanecarboxylic acid",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11b.jpg",
    choiceA: "1,2-ethanodioic acid",
    choiceB: "oxamic acid",
    choiceC: "oxalic acid",
    choiceD: "methanecarboxylic acid",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11c.jpg",
    choiceA: "butyric acid",
    choiceB: "ethylacetic acid",
    choiceC: "butanoic acid",
    choiceD: "1-propanecarboxylic acid",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11d.jpg",
    choiceA: "prop-2-enoic acid",
    choiceB: "acrylic acid ",
    choiceC: "ethylenecarboxylic acid",
    choiceD: "propenoic acid",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11e.jpg",
    choiceA: "1,2-dihydroxipropanoic acid",
    choiceB: "glyceric acid",
    choiceC: "glycolic acid",
    choiceD: "2,3-dihydroxypropanoic acid",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11f.jpg",
    choiceA: "3-carboxy-3-hydroxypentanodioic acid",
    choiceB: "citric acid",
    choiceC: "2-hydroxypropane-1,2,3-tricarboxylic acid",
    choiceD: "2-hydroxy-1,2,3-propanetricarboxylic acid",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11g.jpg",
    choiceA: "acethylformic acid",
    choiceB: "pyruvic acid",
    choiceC: "2-oxopropanoic acid",
    choiceD: "oxopropanoic acid",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11h.jpg",
    choiceA: "benzoic acid",
    choiceB: "phenylmetanoic acid",
    choiceC: "benzenecarboxylic acid",
    choiceD: "carboxybenzene",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11i.jpg",
    choiceA: "3-cyclohexene-1,2-dicarboxylic acid",
    choiceB: "cyclohex-3-ene-1,2-dicarboxylic acid",
    choiceC: "cyclohex-4-ene-1,2-dicarboxylic acid",
    choiceD: "4-cyclohexene-1,2-dicarboxylic acid",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/11j.jpg",
    choiceA: "3-aminobenzoic acid",
    choiceB: "3-aminobenzenecarboxilic acid",
    choiceC: "m-aminobenzoic acid",
    choiceD: "2-aminobenzoic acid",
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
