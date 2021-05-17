
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

// Creates Main Page
// Creates the body and a container around the body
var body = document.body;
var containerEl = document.createElement(`section`);
// Creates the header section
var headerEl = document.createElement(`header`);
// Creates an H1 within the header
var h1El = document.createElement(`h1`);
// Creates div to hold instructions for the quiz within the header
var instructionEl = document.createElement(`div`);
// Creates a paragraph with quiz instructions within the instruction div
var infoEl = document.createElement(`p`);
// Creates div to hold button
var startEl = document.createElement(`div`);

// Creates a start button
var startButton = document.createElement(`button`);
startButton.id = `start`;
startButton.innerHTML = `Start!`;

startButton.addEventListener(`click`, () =>{
    if (headerEl.style.display === `block`){
        headerEl.style.display = `none`;
    } else {
        headerEl.style.display = `none`;
    }
});



// Text Content
h1El.textContent = `Coding Challenge Quiz`;
infoEl.textContent = `This is a coding challenge quiz. After you hit "Start", you will be presented with multiple choice questions and a timer will start. Try to answer all the questions as best as you can within the time limit. Any missed questions will result in a time reduction penalty. Once all questions are answered or time runs out, your score will be talied and hosted on the leaderboards at the end.`;



// Append Methods
// Appends the container to the body
body.appendChild(containerEl);
// Appends the header within the container
containerEl.appendChild(headerEl);
// Appends the H1 within the header
headerEl.appendChild(h1El);
// Appends a div into the header
headerEl.appendChild(instructionEl);
// Appends the quiz insructions to the div
instructionEl.appendChild(infoEl);
// Appends start div to the page
containerEl.appendChild(startEl);
// Appends button to the button div
startEl.appendChild(startButton);


// Styling
body.setAttribute(`style`, `background:#005990;`);
h1El.setAttribute(`style`, `margin:auto; width:50%; font-size:40px; text-align:center;`);
infoEl.setAttribute(`style`, `margin:auto; width:50%; text-align:center;`);
infoEl.setAttribute(`style`, `font-size:25px; text-align:center;`);
startButton.setAttribute(`style`, `font-size:22px; padding:5px; margin-left:35px; background:#58058d;`);


// // Creates a Timer
// var secondsLeft = 120;

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