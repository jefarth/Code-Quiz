
// Create body elements - header, body, lists, paragraphs, divs
// Create a start button
// Show new page with questions when start button is clicked
// Create a count-down timer that activates when start button is clicked
// Create array to hold questions
// Have questions in the array get picked randomly for the quiz
// Create a function to subtract time when answers are incorrect
// End game when all questions answered or timer hits 0
// Create a function to keep track of score
// User can save initials with score after game over

//-------!!!!!------- Global Variables -------!!!!!-------



//-------!!!!!------- Creates Global Header -------!!!!!-------


// Declares the body
const body = document.body;
// Creates the header section
const headerEl = document.createElement(`header`);
headerEl.id = `header`;
// Creates a box to hold the Timer within the header
const timerEl = document.createElement(`box`);
timerEl.id = `timer`;

// ----!!!----

// Append Methods

// Appends the header within the body
body.appendChild(headerEl);
headerEl.appendChild(timerEl);


//-------!!!!!------- Creates a Timer -------!!!!!-------


function countdown() {
    let timeLeft = 120;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = `Time Remaining: ` + timeLeft + ' seconds';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to a string
        timerEl.textContent = 'Out of Time!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);

    // Sets style around timer box
    timerEl.setAttribute(`style`, `border:solid 3px; background:#aaaaaa`);
  }

// Ends the timer when all questions have been answered
// function endTimer() {
//     var questionCount = 0;
  
//     // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var msgInterval = setInterval(function () {
//       // If there are no more words left in the message
//       if (questionsEl[questionCount] === undefined) {
//         // Use `clearInterval()` to stop the timer
//         clearInterval(msgInterval);
//       }
//     }, 1000);
//   }
  

//-------!!!!!------- Creates Main Page -------!!!!!-------


// Creates a container around the body
const container1El = document.createElement(`section`);
container1El.id = `home`;
// Creates the main section
var mainEl = document.createElement(`main`);
// Creates an H1
var h1El = document.createElement(`h1`);
// Creates div to hold instructions for the quiz within the main
const instructionEl = document.createElement(`div`);
// Creates a paragraph with quiz instructions within the instruction div
const infoEl = document.createElement(`p`);
// Creates div to hold button
const startEl = document.createElement(`div`);

// ----!!!----

// Creates a start button
const startButton = document.createElement(`button`);
startButton.id = `start`;
startButton.className = `btn`;
startButton.innerHTML = `Start!`;

// // Start button hides the current container
// startButton.addEventListener(`click`, () =>{
//     if (container1El.style.display === `block`){
//         container1El.style.display = `none`;
//     } else {
//         container1El.style.display = `none`;
//     } 
//     // Calls countdown function on Start button press
//     countdown();
// });
// // Start button displays hidden Question Page
// startButton.addEventListener(`click`, () =>{
//     if (container2El.style.display === `none`){
//         container2El.style.display = `block`;
//     } else {
//         container2El.style.display = `none`;
//     }
// });

// ----!!!----

// Text Content
h1El.textContent = `Coding Challenge Quiz`;
infoEl.textContent = `This is a coding challenge quiz. After you hit "Start", 
you will be presented with multiple choice questions and a timer will start. 
Try to answer all the questions as best as you can within the time limit. 
Any missed questions will result in a time reduction penalty. 
Once all questions are answered or time runs out, 
your score will be talied and hosted on the leaderboards at the end.`;

// ----!!!----

// Append Methods

// Appends the container within the body
body.appendChild(container1El);
// Appends the main within the container
container1El.appendChild(mainEl);
// Appends the H1 within the main
mainEl.appendChild(h1El);
// Appends a instruction div into the main
mainEl.appendChild(instructionEl);
// Appends the quiz insructions to the instruction div
instructionEl.appendChild(infoEl);
// Appends button div to the page
container1El.appendChild(startEl);
// Appends button to the button div
startEl.appendChild(startButton);

// ----!!!----

// Styling

body.setAttribute(`style`, `background:#005990;`);
h1El.setAttribute(`style`, `margin:auto; width:50%; font-size:40px; text-align:center;`);
infoEl.setAttribute(`style`, `margin:auto; width:50%; text-align:center;`);
infoEl.setAttribute(`style`, `font-size:25px;`);
startEl.setAttribute(`style`, `margin-left:35px;`);


//-------!!!!!------- Creates Question Page -------!!!!!-------


// Creates a second container around the body
var container2El = document.createElement(`section`);
container2El.id = `questions`;
container2El.class = `hide`;
// Creates the main section
var mainEl = document.createElement(`main`);
// Creates an H2 within the main
var h2El = document.createElement(`h2`);
// Creates div to hold questions within the main
const questionsEl = document.createElement(`div`);
// Creates div to hold answers
const answerEl = document.createElement(`div`);
answerEl.id = `answer-buttons`;

// ----!!!----

// Answers

// Buttons
const answer1 = document.createElement(`button`);
answer1.id = `answer1`;
answer1.className = `btn`;
answer1.innerHTML = `Answer 1`;

const answer2 = document.createElement(`button`);
answer2.id = `answer2`;
answer2.className = `btn`;
answer2.innerHTML = `Answer 2`;

const answer3 = document.createElement(`button`);
answer3.id = `answer3`;
answer3.className = `btn`;
answer3.innerHTML = `Answer 3`;

const answer4 = document.createElement(`button`);
answer4.id = `answer4`;
answer4.className = `btn`;
answer4.innerHTML = `Answer 4`;

// Create an event listener that uses a for loop to check
// which answer was selected and look to see if it's the correct answer

// ----!!!----

// Text Content

h2El.textContent = `Questions`;

// ----!!!----

// Append Methods

// Appends the container to the body
body.appendChild(container2El);
// Appends the main within the container
container2El.appendChild(mainEl);
// Appends the H1 within the main
mainEl.appendChild(h2El);
// Appends a div into the main
mainEl.appendChild(questionsEl);
// Appends answer div to the page
container2El.appendChild(answerEl);
// Appends answer buttons to the answer div
answerEl.appendChild(answer1);
answerEl.appendChild(answer2);
answerEl.appendChild(answer3);
answerEl.appendChild(answer4);

// ----!!!----

// Styling


// --------!!!!--------
//  Toggle below comment off to have Start button function, Comment on to view page to work

// container2El.setAttribute(`style`, `display:none;`);

//--------!!!!-------- 


h2El.setAttribute(`style`, `margin:0 auto; width:50%; font-size:40px; text-align:center;`);
answerEl.setAttribute(`style`, `display:grid; gap:10px; font-size:22px; border:solid; width:25%; margin:0 auto;  padding:5px;`);
// Creates a loop to style all button elements
const button = document.querySelectorAll(`button`);

for (var i = 0; i < button.length; i++) {
    button[i].setAttribute(`style`, `font-size:22px; padding:5px; background:#58058d;`);
  }

//-------!!!!!------- Creates Questions and Answers -------!!!!!-------

const hideEl = document.getElementsByClassName(`hide`);
hideEl.setAttribute(`style`, `display:none`);

// Loops through all the containers to 
// for (var i = 0; i < containerEl.length; i++) {
//     containerEl[i].setAttribute(`style`, `display:none`);
//   }

startButton.addEventListener(`click`, startGame());


function startGame() {
    console.log(`Started`);
    container1El.classList.add(`hide`);
    container2El.classList.remove(`hide`);
    nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}


// var questions = [
//     {
//       question: "What is the capital of Germany?",
//       answers: [
//         {text: "Amsterdam"},
//         {text: "Berlin", isCorrect: true},
//         {text: "Prague"},
//       ]
//     },
//     {
//       question: "What is the capital of Morocco?",
//       answers: [
//         {text: "Nouakchott"},
//         {text: "Rabat", isCorrect: true},
//         {text: "Tripoli"},
//       ]
//     },
//     {
//       question: "What is the capital of Estonia?",
//       answers: [
//         {text: "Riga"},
//         {text: "Tallinn", isCorrect: true},
//         {text: "Vilnius"},
//       ]
//     },
//     {
//       question: "What is the capital of Australia?",
//       answers: [
//         {text: "Canberra", isCorrect: true},
//         {text: "Melbourne"},
//         {text: "Sydney"},
//       ]
//     },
//     {
//       question: "What is the capital of Canada?",
//       answers: [
//         {text: "Ottawa", isCorrect: true},
//         {text: "Toronto"},
//         {text: "Vancouver"},
//       ]
//     },
//     {
//       question: "What is the capital of Paraguay?",
//       answers: [
//         {text: "Asunción", isCorrect: true},
//         {text: "La Paz"},
//         {text: "Montevideo"},
//       ]
//     },
//     {
//       question: "What is the capital of Vietnam?",
//       answers: [
//         {text: "Hanoi", isCorrect: true},
//         {text: "Ho Chi Minh City"},
//         {text: "Phnom Penh"},
//       ]
//     },
//     {
//       question: "What is the capital of India?",
//       answers: [
//         {text: "Bangalore"},
//         {text: "Bombay"},
//         {text: "New Delhi", isCorrect: true},
//       ]
//     },
//     {
//       question: "What is the capital of Iraq?",
//       answers: [
//         {text: "Baghdad", isCorrect: true},
//         {text: "Damas"},
//         {text: "Tehran"},
//       ]
//     },
//     {
//       question: "What is the capital of Colombia?",
//       answers: [
//         {text: "Bogotá", isCorrect: true},
//         {text: "Caracas"},
//         {text: "Quito"},
//       ]
//     },
//   ];
//   var score = 0;
//   var iQuestion = 0;
  
//   function updateQuestionAndScore() {
//     if (iQuestion >= questions.length) {
//       document.getElementsByClassName('question')[0].outerHTML = '';
//       document.getElementsByClassName('answer')[2].outerHTML = '';
//       document.getElementsByClassName('answer')[1].outerHTML = '';
//       document.getElementsByClassName('answer')[0].outerHTML = '';
//       return;
//     }
//     document.getElementsByClassName('score')[0].innerHTML = score;  
//     document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question;
//     var answers = document.getElementsByClassName('answer');
//     for (let i = 0; i < answers.length; i++) {
//       answers[i].innerHTML = questions[iQuestion].answers[i].text;
//     }
//   }
  
//   document.addEventListener("DOMContentLoaded", function(event) { 
//     var answers = document.getElementsByClassName('answer');
//     for (let i = 0; i < answers.length; i++) {
//       answers[i].onclick = function() {
//         if (questions[iQuestion].answers[i].isCorrect) {
//           score++;
//         }
//         iQuestion++;
//         updateQuestionAndScore();
//       }
//     }
//     updateQuestionAndScore();
//   });