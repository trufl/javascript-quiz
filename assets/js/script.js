const $timeDisplayArea = $('#time-display');
const $quizQuestionArea = $('#quiz-question');
const $quizAnswersArea = $('#quiz-answers');
const $buttonsSection = $('#buttons-section');
const $scoresList = $('#scores-list');
const $backButton = $('#go-back');
const $clearButton = $('#clear-scores');
let highscores = [];
let score = 0;
let timeLeft = 0;

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
                    answer: "",
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


// function getQuestion(obj) {
//     return obj.question;
// }

// function getCorrectAnswer(obj) {
//     for(let x = 0; x < obj.answers.length; x++){
//         if(obj.answers[x].isTrue){
//             return obj.answers[x].answer;
//         }
//     }
//  }

function init() {
    const $welcomeHeading = $('<h1>');
    const $welcomeMsg = $('<p>');
    const $startButton = $('<button>');

    $welcomeHeading.text("Welcome to the JavaScript quiz!");
    $welcomeMsg.text(`
    Try to answer the following code-related questions within the time limit. Keep in mind that
    incorrect answers will penalize your score/time by ten seconds!
    `);
    $startButton.text("Start Quiz")

    $welcomeMsg.addClass('welcome-text');

    $quizQuestionArea.append($welcomeHeading);
    $quizAnswersArea.append($welcomeMsg);
    $buttonsSection.append($startButton);

    $startButton.on('click',function() {
        $welcomeHeading.remove();
        $welcomeMsg.remove();
        $startButton.remove();

        startQuiz();
    });
}

 init();

 function startQuiz() {
    console.log("Hello World");
 }