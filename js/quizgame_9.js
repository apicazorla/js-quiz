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
    imgSrc: "assets/birds/09a.jpg",
    choiceA: "acetaldehyde",
    choiceB: "ethanal",
    choiceC: "acetic aldehyde",
    choiceD: "ethyl aldehyde",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09b.jpg",
    choiceA: "acrolein",
    choiceB: "propenal",
    choiceC: "prop-2-enal",
    choiceD: "2-propenal",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09c.jpg",
    choiceA: "1,5-pentanedial",
    choiceB: "pentanedial",
    choiceC: "pentane-1,5-dial",
    choiceD: "glutaraldehyde",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09d.jpg",
    choiceA: "geranial",
    choiceB: "3,7-dimethylocta-2,6-dienal",
    choiceC: "3,7-dimethyl-2,6-octadienal",
    choiceD: "3,7-dimethyloctadien-2,6-al",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09e.jpg",
    choiceA: "2-methyl-3-hydroxybutanal",
    choiceB: "4.formyl-2-methylbutan-2-ol",
    choiceC: "3-hydroxy-2-methylbutan-1-al",
    choiceD: "3-hydroxy-2-methylbutanal",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09f.jpg",
    choiceA: "butane-1,2,2,4-tetracarbaldehyde",
    choiceB: "3,3-diformilhexane-1,6-dial",
    choiceC: "3,3-diformilhexanedial",
    choiceD: "butane-1,3,3,4-tetracarbaldehyde",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09g.jpg",
    choiceA: "benzenecarboxaldehyde",
    choiceB: "phenylmethanal",
    choiceC: "benzenecarbaldehyde",
    choiceD: "benzoic aldehyde",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09h.jpg",
    choiceA: "3-hydroxycyclohex-4-ene-1-al",
    choiceB: "3-hydroxycyclohex-4-ene-1-carbaldehyde",
    choiceC: "5-hydroxycyclohex-3-ene-al",
    choiceD: "5-hydroxycyclohex-3-ene-1-carbaldehyde",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09i.jpg",
    choiceA: "benzene-1,2-dicarboxaldehyde",
    choiceB: "benzene-1,2-dicarbaldehyde",
    choiceC: "phthalaldehyde",
    choiceD: "o-phthalaldehyde",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/09j.jpg",
    choiceA: "2,2-difluorocyclopentane-1-carbaldehyde",
    choiceB: "3,3-difluorocyclopentane-1-carbaldehyde",
    choiceC: "3,3-difluorocyclopentanecarbaldehyde",
    choiceD: "2,2-difluorocyclopentanecarbaldehyde",
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
