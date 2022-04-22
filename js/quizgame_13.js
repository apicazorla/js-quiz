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
    imgSrc: "assets/birds/13a.jpg",
    choiceA: "formamide",
    choiceB: "methanamide",
    choiceC: "carbamaldehyde",
    choiceD: "methaneamide",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13b.jpg",
    choiceA: "hexaneamide",
    choiceB: "hexylamide",
    choiceC: "hexanamide",
    choiceD: "caproamide",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13c.jpg",
    choiceA: "glutaramide",
    choiceB: "1,3-propanedicarboxamide",
    choiceC: "pentane-1,5-diamide",
    choiceD: "pentanediamide",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13d.jpg",
    choiceA: "propenamide",
    choiceB: "acrylamide ",
    choiceC: "prop-2-enamide",
    choiceD: "2-propeneamide",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13e.jpg",
    choiceA: "N-methylpropan-1-amide",
    choiceB: "N-methylpropionamide",
    choiceC: "N-methylpropaneamide",
    choiceD: "N-methylpropanamide",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13f.jpg",
    choiceA: "1,1,3-propanetricarboxamide",
    choiceB: "propane-1,1,3-tricarboxamide",
    choiceC: "2-carbamoilpentanediamide",
    choiceD: "2-carbamoilpropanediamide",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13g.jpg",
    choiceA: "3-methylcyclopent-3-enecarboxamide",
    choiceB: "4-methylcyclopent-3-enecarboxamide",
    choiceC: "4-methylcyclopent-3-ene-1-carboxamide",
    choiceD: "3-methylcyclopent-3-ene-1-carboxamide",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13h.jpg",
    choiceA: "benzenamide",
    choiceB: "benzamide",
    choiceC: "phenyl carboxamide",
    choiceD: "benzenecarboxamide",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13i.jpg",
    choiceA: "m-benzenedicarboxamide",
    choiceB: "isoftalamide",
    choiceC: "benzene-1,3-dicarboxamide",
    choiceD: "1,3-benzenedicarboxamide",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/13j.jpg",
    choiceA: "4-amino-4-oxobutanoic acid",
    choiceB: "3-carbamoilpropanoic acid",
    choiceC: "4-(aminocarbonyl)butanoic acid",
    choiceD: "4-oxo-4-aminobutanoic acid",
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
