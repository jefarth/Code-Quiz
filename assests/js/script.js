
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


//-------!!!!!------- Creates Main Page -------!!!!!-------


// Creates the body
var body = document.body;
// Creates a container around the body
var container1El = document.createElement(`section`);
// Declares an id on container1
container1El.id = `home`;
// Creates the header section
var headerEl = document.createElement(`header`);
// Declares an id on the header
headerEl.id = `header`;
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
startButton.className = `buttonEl`;
startButton.innerHTML = `Start!`;
// Makes the button hide the current container
startButton.addEventListener(`click`, () =>{
    if (container1El.style.display === `block`){
        container1El.style.display = `none`;
    } else {
        container1El.style.display = `none`;
    }
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
headerEl.textContent = `Time Remaining: `;

// ----!!!----

// Append Methods

// Appends the header within the body
body.appendChild(headerEl);
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
// Appends start div to the page
container1El.appendChild(startEl);
// Appends button to the button div
startEl.appendChild(startButton);

// ----!!!----

// Styling

body.setAttribute(`style`, `background:#005990;`);
h1El.setAttribute(`style`, `margin:auto; width:50%; font-size:40px; text-align:center;`);
infoEl.setAttribute(`style`, `margin:auto; width:50%; text-align:center;`);
infoEl.setAttribute(`style`, `font-size:25px; text-align:center;`);

// Class style
document.querySelector(`.buttonEl`).setAttribute(`style`, 
`font-size:22px; padding:5px; margin-left:35px; background:#58058d;`);


//-------!!!!!------- Creates Question Page -------!!!!!-------


// Creates a second container around the body
var container2El = document.createElement(`section`);
// Declares an id on container2
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

// ----!!!----

// Answers

// Creates a button
var answer1 = document.createElement(`button`);
answer1.id = `answer1`;
answer1.className = `buttonEl`;
answer1.innerHTML = `Answer 1`;

var answer2 = document.createElement(`button`);
answer2.id = `answer2`;
answer2.className = `buttonEl`;
answer2.innerHTML = `Answer 2`;

var answer3 = document.createElement(`button`);
answer3.id = `answer3`;
answer3.className = `buttonEl`;
answer3.innerHTML = `Answer 3`;

var answer4 = document.createElement(`button`);
answer4.id = `answer4`;
answer4.className = `buttonEl`;
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

answerEl.querySelector(`.buttonEl`).setAttribute(`style`, 
`font-size:22px; padding:5px; margin-left:35px; background:#58058d;`);


// -----------!!!!!!!!!!!!-----------


// // Creates a Timer


// // Selects element by id
// var timeEl = document.getElementById("header");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// setTime();