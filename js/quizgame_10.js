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
    imgSrc: "assets/birds/10a.jpg",
    choiceA: "1-chlorobutan-2-one",
    choiceB: "chlorobutanone",
    choiceC: "chlorobutan-2-one",
    choiceD: "1-chloro-2-oxybutane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10b.jpg",
    choiceA: "2,4-pentanedione",
    choiceB: "diacetylmethane",
    choiceC: "acetylacetone",
    choiceD: "pentane-2,4-dione",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10c.jpg",
    choiceA: "1,3-hexanedione",
    choiceB: "3-oxo-1-hexanal",
    choiceC: "hexane-1,3-dione",
    choiceD: "3-oxohexanal",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10d.jpg",
    choiceA: "3-methylbut-3-enona",
    choiceB: "3-methylbut-3-en-2-one",
    choiceC: "2-methylbut-3-en-3-one",
    choiceD: "2-methylbut-1-enona",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10e.jpg",
    choiceA: "oxobutanol",
    choiceB: "2-oxo-butan-1-ol",
    choiceC: "1-hydroxybutan-2-one",
    choiceD: "1-hydroxybutanone",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10f.jpg",
    choiceA: "3-hydroxycyclopent-4-en-1-one",
    choiceB: "3-hydroxycyclopent-4-enone",
    choiceC: "4-hydroxycyclopent-2-enone",
    choiceD: "4-hydroxycyclopent-2-en-1-one",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10g.jpg",
    choiceA: "pyruvic acid",
    choiceB: "oxopropanoic acid",
    choiceC: "2-oxopropanoic acid",
    choiceD: "acetylformic acid",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10h.jpg",
    choiceA: "1,4-benzoquinone",
    choiceB: "cyclohexa-2,5-diene-1,4-dione",
    choiceC: "benzoquinone",
    choiceD: "2,5-cyclohexadiene-1,4-dione",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10i.jpg",
    choiceA: "diphenyl ketone",
    choiceB: "benzophenone",
    choiceC: "diphenylmethanone",
    choiceD: "1,1'-carbonyldibenzene",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10j.jpg",
    choiceA: "1-phenylpropan-1-one",
    choiceB: "phenylpropanone",
    choiceC: "1-phenylpropanone",
    choiceD: "propiophenone",
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
