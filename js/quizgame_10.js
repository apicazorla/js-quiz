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
    choiceA: "dimethyl ketone",
    choiceB: "acetone",
    choiceC: "propan-2-one",
    choiceD: "propanone",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10b.jpg",
    choiceA: "butan-2-one",
    choiceB: "ethyl methyl ketone",
    choiceC: "methylpropanone",
    choiceD: "butanone",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10c.jpg",
    choiceA: "2,4-pentanedione",
    choiceB: "diacetylmethane",
    choiceC: "acetylacetone",
    choiceD: "pentane-2,4-dione",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10d.jpg",
    choiceA: "3-oxo-but-1-al",
    choiceB: "3-oxobutanal",
    choiceC: "4-formilbutan-2-one",
    choiceD: "3-oxobutyraldehyde",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10e.jpg",
    choiceA: "4-hydroxycyclopent-2-en-1-one",
    choiceB: "2-oxocyclopent-2-en-1-ol",
    choiceC: "4-hydroxycyclopent-2-enona",
    choiceD: "2-oxocyclopent-2-enol",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10f.jpg",
    choiceA: "3-buten-2-one",
    choiceB: "but-1-en-3-one",
    choiceC: "but-3-en-2-one",
    choiceD: "1-buten-3-one",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10g.jpg",
    choiceA: "1-pent-4-yn-3-one",
    choiceB: "pent-4-en-1-yn-3-one",
    choiceC: "4-penten-1-yn-3-one",
    choiceD: "pent-1-en-4-yn-3-one",
    correctAnswer: "D"
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
    choiceA: "acetophenone",
    choiceB: "phenylethanone",
    choiceC: "1-phenylethan-1-one",
    choiceD: "methyl phenyl ketone",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/10j.jpg",
    choiceA: "diphenylmethanone",
    choiceB: "benzophenone",
    choiceC: "diphenyl ketone",
    choiceD: "benzoylbenzene",
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
