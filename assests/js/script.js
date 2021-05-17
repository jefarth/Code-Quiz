
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


//-------!!!!!------- Creates Global Header -------!!!!!-------


// Creates the body
var body = document.body;

// Creates the header section
var headerEl = document.createElement(`header`);
headerEl.id = `header`;
// Creates a box within the header
var timerEl = document.createElement(`box`);
timerEl.id = `timer`;

// ----!!!----

// Text Content
timerEl.textContent = `Time Remaining: `;

// ----!!!----

// Append Methods

// Appends the header within the body
body.appendChild(headerEl);
headerEl.appendChild(timerEl);

// ----!!!----

// Styling
timerEl.setAttribute(`style`, `border:solid 3px; background:#aaaaaa`);


//-------!!!!!------- Creates a Timer -------!!!!!-------

// --------!!!!!------ Only runs on time, need to add questions and else statement to end with questions

function countdown() {
    var timeLeft = 120;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
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
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }



//-------!!!!!------- Creates Main Page -------!!!!!-------


// Creates a container around the body
var container1El = document.createElement(`section`);
container1El.id = `home`;
// Creates the main section
var mainEl = document.createElement(`main`);
// Creates an H1
var h1El = document.createElement(`h1`);
// Creates div to hold instructions for the quiz within the main
var instructionEl = document.createElement(`div`);
// Creates a paragraph with quiz instructions within the instruction div
var infoEl = document.createElement(`p`);
// Creates div to hold button
var startEl = document.createElement(`div`);

// ----!!!----

// Creates a start button
var startButton = document.createElement(`button`);
startButton.id = `start`;
startButton.className = `colorPurple`;
startButton.innerHTML = `Start!`;
// Makes the button hide the current container
startButton.addEventListener(`click`, () =>{
    if (container1El.style.display === `block`){
        container1El.style.display = `none`;
    } else {
        container1El.style.display = `none`;
    } 
    // Calls countdown function on Start button press
    countdown();
});
// Button displays hidden Question Page
startButton.addEventListener(`click`, () =>{
    if (container2El.style.display === `none`){
        container2El.style.display = `block`;
    } else {
        container2El.style.display = `none`;
    }
});

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

// Class style
document.querySelector(`.colorPurple`).setAttribute(`style`, 
`font-size:22px; padding:5px; margin-left:35px; background:#58058d;`);


//-------!!!!!------- Creates Question Page -------!!!!!-------


// Creates a second container around the body
var container2El = document.createElement(`section`);
container2El.id = `questions`;
// Creates the main section
var mainEl = document.createElement(`main`);
// Creates an H1 within the main
var h1El = document.createElement(`h1`);
// Creates div to hold questions within the main
var questionsEl = document.createElement(`div`);
// Creates a paragraph with an array of questions within the questions div
var questionsArray = document.createElement(`p`);
// Creates div to hold answers
var answerEl = document.createElement(`div`);
answerEl.id = `answer-buttons`;
answerEl.className = `btn-grid`;

// ----!!!----

// Answers

// Creates a button
var answer1 = document.createElement(`button`);
answer1.id = `answer1`;
answer1.className = `colorPurple`;
answer1.innerHTML = `Answer 1`;

var answer2 = document.createElement(`button`);
answer2.id = `answer2`;
answer2.className = `colorPurple`;
answer2.innerHTML = `Answer 2`;

var answer3 = document.createElement(`button`);
answer3.id = `answer3`;
answer3.className = `colorPurple`;
answer3.innerHTML = `Answer 3`;

var answer4 = document.createElement(`button`);
answer4.id = `answer4`;
answer4.className = `colorPurple`;
answer4.innerHTML = `Answer 4`;

// Create an event listener that uses a for loop to check
// which answer was selected and look to see if it's the correct answer

// Makes the button hide the current container
// startButton.addEventListener(`click`, () =>{
//     if (container2El.style.display === `none`){
//         container2El.style.display = `block`;
//     } else {
//         container2El.style.display = `none`;
//     }
// });

// ----!!!----

// Text Content

h1El.textContent = `Questions`;
questionsArray.textContent = `lorem ipsum`;

// ----!!!----

// Append Methods

// Appends the container to the body
body.appendChild(container2El);
// Appends the main within the container
container2El.appendChild(mainEl);
// Appends the H1 within the main
mainEl.appendChild(h1El);
// Appends a div into the main
mainEl.appendChild(questionsEl);
// Appends the quiz insructions to the div
questionsEl.appendChild(questionsArray);
// Appends answer div to the page
container2El.appendChild(answerEl);
// Appends answer buttons to the answer div
answerEl.appendChild(answer1);
answerEl.appendChild(answer2);
answerEl.appendChild(answer3);
answerEl.appendChild(answer4);

// ----!!!----

// Styling

container2El.setAttribute(`style`, `display:none;`);
h1El.setAttribute(`style`, `margin:auto; width:50%; font-size:40px; text-align:center;`);
questionsArray.setAttribute(`style`, `margin:auto; width:50%; text-align:center;`);
questionsArray.setAttribute(`style`, `font-size:25px; text-align:center;`);
answerEl.setAttribute(`style`, `font-size:22px; padding:5px; margin-left:35px;`);


answerEl.querySelector(`.colorPurple`).setAttribute(`style`, 
`font-size:22px; padding:5px; margin-left:35px; background:#58058d;`);


// Selects element by id
// var timeEl = document.getElementById("header");

// var secondsLeft = 120;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.timerEl = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// setTime();


//-------!!!!!------- Creates Questions and Answers -------!!!!!-------


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