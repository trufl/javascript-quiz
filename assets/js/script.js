const $timeDisplayArea = $('#time-display');
const $quizQuestionArea = $('#quiz-question');
const $quizAnswersArea = $('#quiz-answers');
const $buttonsSection = $('#buttons-section');
const $scoresList = $('#scores-list');
const $backButton = $('#go-back');
const $clearButton = $('#clear-scores');
const questionsAsked = [];
let highscores = [];
let highscoresCount = 0;
let score = 0;
let timeLeft = 0;
let timerInterval;

const quizQuestions = [
    question1 = {
            question: "What is OOP?",
            answers: [
                answer1= {
                    answer: "The sound you make when you drop something",
                    isTrue: false,
                },
                answer2 = {
                    answer: "Object Oriented Programming",
                    isTrue: true,
                },
                answer3 = {
                    answer: "Objectively Orienting Paper",
                    isTrue: false,
                },
                answer4 = {
                    answer: "A certain fictional bear's distant cousin",
                    isTrue: false,
                },
            ],
    },
    question2 = {
            question: "This creates a variable that can NOT be changed",
            answers: [
                answer1= {
                    answer: "let",
                    isTrue: false,
                },
                answer2 = {
                    answer: "const",
                    isTrue: true,
                },
                answer3 = {
                    answer: "var",
                    isTrue: false,
                },
                answer4 = {
                    answer: "All of the above",
                    isTrue: false,
                },
            ],
    },
    question3 = {
            question: "Which type of variable does the whole file have access to?",
            answers: [
                answer1= {
                    answer: "private",
                    isTrue: false,
                },
                answer2 = {
                    answer: "global",
                    isTrue: true,
                },
                answer3 = {
                    answer: "local",
                    isTrue: false,
                },
                answer4 = {
                    answer: "None of the above",
                    isTrue: false,
                },
            ],
    },
    question4 = {
        question: "What can be stored in arrays?",
        answers: [
            answer1= {
                answer: "Numbers",
                isTrue: false,
            },
            answer2 = {
                answer: "Objects",
                isTrue: false,
            },
            answer3 = {
                answer: "Arrays",
                isTrue: false,
            },
            answer4 = {
                answer: "All of the above",
                isTrue: true,
            },
        ],
    },
    question5 = {
        question: "Which data type is also an Object?",
        answers: [
                answer1= {
                    answer: "Number",
                    isTrue: false,
                },
                answer2 = {
                    answer: "String",
                    isTrue: true,
                },
                answer3 = {
                    answer: "Boolean",
                    isTrue: false,
                },
                answer4 = {
                    answer: "None of the above",
                    isTrue: false,
                },
        ],
    },
    question6 = {
        question: "Which HTML element links your JavaScript file?",
        answers: [
                answer1= {
                    answer: "\"<link>\"",
                    isTrue: false,
                },
                answer2 = {
                    answer: "\"<script>\"",
                    isTrue: true,
                },
                answer3 = {
                    answer: "src",
                    isTrue: false,
                },
                answer4 = {
                    answer: "href",
                    isTrue: false,
                },
        ],
    },
    question7 = {
        question: "Attributes in Objects are seperated by a:",
        answers: [
                answer1= {
                    answer: "semi-colon",
                    isTrue: false,
                },
                answer2 = {
                    answer: "comma",
                    isTrue: true,
                },
                answer3 = {
                    answer: "parenthesis",
                    isTrue: false,
                },
                answer4 = {
                    answer: "Whats an attribute?",
                    isTrue: false,
                },
        ],
    },
    question8 = {
        question: "Which of these keywords identifies a conditional statement?",
        answers: [
                answer1= {
                    answer: "for",
                    isTrue: false,
                },
                answer2 = {
                    answer: "if",
                    isTrue: true,
                },
                answer3 = {
                    answer: "var",
                    isTrue: false,
                },
                answer4 = {
                    answer: "let",
                    isTrue: false,
                },
        ],
    },
    question9 = {
        question: "Bonus Question: Who is better?",
        answers: [
                answer1= {
                    answer: "Ja Morant",
                    isTrue: false,
                },
                answer2 = {
                    answer: "Devin Booker",
                    isTrue: true,
                },
                answer3 = {
                    answer: "Jayson Tatum",
                    isTrue: false,
                },
                answer4 = {
                    answer: "Luka Doncic",
                    isTrue: false,
                },
        ],
    },
];

function init() {
    const $welcomeHeading = $('<h1>');
    const $welcomeMsg = $('<p>');
    const $startButton = $('<button>');
    const $startTime = $('<p>');

    $welcomeHeading.text("Welcome to the JavaScript quiz!");
    $welcomeMsg.text(`
    Try to answer the following code-related questions within the time limit. Keep in mind that
    incorrect answers will penalize your score/time by ten seconds!
    `);
    $startButton.text("Start Quiz");
    $startTime.text(`Time: ${timeLeft}`);

    $welcomeMsg.addClass('welcome-text');

    $quizQuestionArea.append($welcomeHeading);
    $quizAnswersArea.append($welcomeMsg);
    $buttonsSection.append($startButton);
    $timeDisplayArea.append($startTime)

    if(localStorage.getItem("highscoresArray") !== null) {
        highscores = JSON.parse(localStorage.getItem('highscoresArray'));
        highscoresCount = highscores.length;
    }

    $startButton.on('click',function() {
        $welcomeHeading.remove();
        $welcomeMsg.remove();
        $startButton.remove();
        $startTime.remove();

        startTimer();
        startQuiz();
    });
}

 init();

function refreshDisplay() {
    $quizQuestionArea.children().remove();
    $quizAnswersArea.children().remove();
}

function startTimer() {
    const $timer = $('<p>');
    timeLeft = 60;

    $timer.text(`Time: ${timeLeft}`);
    $timeDisplayArea.append($timer);

    timerInterval = setInterval(function() {
        timeLeft--;
        $timer.text(`Time: ${timeLeft}`);

        if(timeLeft === 0) {
             clearInterval(timerInterval);
             stopQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function startQuiz() {
    
    if(timeLeft > 0) {
        if(questionsAsked.length < 8) {

            let index = Math.floor(Math.random() * (quizQuestions.length - 1)) + 0;

            if(!questionsAsked.includes(quizQuestions[index].question)){

                questionsAsked.push(quizQuestions[index].question);
                refreshDisplay();
                displayQuiz(quizQuestions[index]);

            } else {
                startQuiz();
            }

        } else if(questionsAsked.length === 8) {

            questionsAsked.push(quizQuestions[8].question);
            refreshDisplay();
            displayQuiz(quizQuestions[8])

        } else {
            stopQuiz();
        }
    } else {
        if(timeLeft < 0) {
            timeLeft = 0;
        }
        stopTimer();
        stopQuiz();
    }

}

function displayQuiz(questionObj) {
    const $questionHeading = $('<h2>');
    const $questionsList = $('<ul>');
    const listedAnswers = ['nope'];
    let index = Math.floor(Math.random() * questionObj.answers.length) + 0;

    $questionHeading.text(questionObj.question);

    $quizQuestionArea.append($questionHeading);
    $quizAnswersArea.append($questionsList);

    do {
        if(!listedAnswers.includes(questionObj.answers[index].answer)) {
            listedAnswers.push(questionObj.answers[index].answer);
            const $answerItem = $('<li>');
            $answerItem.text(questionObj.answers[index].answer);
            $answerItem.addClass(`${questionObj.answers[index].isTrue}`);
            $questionsList.append($answerItem);
        }

        index = Math.floor(Math.random() * questionObj.answers.length) + 0;
    } while (listedAnswers.length <= 4);


    $questionsList.on('click', '.true', function() {

        if(questionObj.question === "Bonus Question: Who is better?") {
            score += 3.5;
        } else {
            score += 2.5;
        }

        startQuiz();
    });

    $questionsList.on('click', '.false', function() {
        score -= 1;

        if(timeLeft > 0) {
            timeLeft -= 10;
        }

        startQuiz();
    });
}

function stopQuiz() {
    const $endHeader = $('<h2>');
    const $endMsg = $('<p>');
    const $endForm = $('<form>');
    const $endLabel = $('<label>');
    const $endInput = $('<input>');
    const $endButton = $('<button>');

    if(timeLeft > 0) {
        let newScore = timeLeft * .5;
        score += newScore;
    }
    
    $endHeader.text("All done!");
    $endMsg.text(`Your final score is: ${score}`);
    $endLabel.text("Enter initials: ");
    $endButton.text("Submit");


    $endMsg.addClass('end-text');
    $endForm.addClass('row');
    $endLabel.addClass('end-text custom-spacing');
    $endInput.attr('id', 'initial');
    $endInput.attr('type', "text");
    $endButton.attr('type', "submit");
    $endButton.attr('value', "Submit");
    $endButton.addClass("submit");

    $endForm.append($endLabel);
    $endForm.append($endInput);
    $endForm.append($endButton);

    refreshDisplay();
    stopTimer();

    $timeDisplayArea.children().text(`Time: ${timeLeft}`);
    $quizQuestionArea.append($endHeader);
    $quizAnswersArea.append($endMsg);
    $buttonsSection.append($endForm);

    $endForm.on('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('hello')

    const $submitButton = $('#initial');
    let nameIn = $submitButton.val().trim();

    highscores[highscoresCount] = {
        initial: nameIn,
        scoreNum: score, 
    }
    highscoresCount++;

    highscores = highscores.sort();

    localStorage.setItem('highscoresArray', JSON.stringify(highscores));
    window.location.replace("assets/html/highscores.html");
}

function displayScores() {
    if(highscores.length > 0) {
        for(let x = 0; x < highscores.length; x++) {
            let scoreItem = $('<li>');
            scoreItem.text(`${x + 1}.   ${highscores[x].initial.toUpperCase()} - ${highscores[x].scoreNum}`)
            $scoresList.append(scoreItem);
        }
    }

}

displayScores();

$backButton.on('click', function() {
    window.location.href = "https://trufl.github.io/javascript-quiz/";
});

$clearButton.on('click', function() {
    localStorage.removeItem('highscoresArray');
    $scoresList.children().remove();
})