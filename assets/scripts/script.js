const questionBank = [
  {
    question: 'Commonly used data types DO Not include:',
    choice1: 'strings',
    choice2: 'booleans',
    choice3: 'alerts',
    choice4: 'numbers',
    answer: 'alerts',
  },
  {
    question:
      'The condition in an if/else statement is enclosed with ________.',
    choice1: 'quotes',
    choice2: 'curly brackets',
    choice3: 'parenthesis',
    choice4: 'square brackets',
    answer: 'parenthesis',
  },
  {
    question: 'Arrays in Javascript can be used to store',
    choice1: 'numbers and stings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all the above',
    answer: 'all the above',
  },
  {
    question:
      'String values must be enclosed within ______ when being assigned to variables',
    choice1: 'commas',
    choice2: 'curly brackets',
    choice3: 'quotes',
    choice4: 'parenthesis',
    answer: 'quotes',
  },
  {
    question:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choice1: 'JavaScript',
    choice2: 'terminal.bash',
    choice3: 'for loops',
    choice4: 'console.log',
    answer: 'console.log',
  },
  {
    question:
      'JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.',
    choice1: 'Display',
    choice2: 'Speak',
    choice3: 'Output',
    choice4: 'Show',
    answer: '',
  },
  {
    question:
      'What is a JavaScript element that represents either TRUE or FALSE values?',
    choice1: 'Boolean',
    choice2: 'Condition',
    choice3: 'Event',
    choice4: 'RegExp',
    answer: 'Boolean',
  },
  {
    question:
      'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
    choice1: 'While Loop',
    choice2: 'Conditional Loop',
    choice3: 'Else Loop',
    choice4: 'For Loop',
    answer: 'While',
  },
  {
    question:
      'What is the format called that is used for storing and transporting data?',
    choice1: 'Font',
    choice2: 'HTML',
    choice3: 'JSON',
    choice4: 'Syntax',
    answer: 'JSON',
  },
  {
    question:
      'In JavaScript, what is a block of code called that is used to perform a specific task?',
    choice1: 'Declaration',
    choice2: 'Function',
    choice3: 'String',
    choice4: 'Variable',
    answer: 'Function',
  },
];
const correctAnswer = 'Correct';
const incorrectAnswer = 'Incorrect';
const questionBankLength = questionBank.length;
const questionText = document.getElementById('question-text');
const questionButton = document.getElementById('question-button');
const answerResponse = document.getElementById('answer-response');
const choice1Button = document.getElementById('choice-1');
const choice2Button = document.getElementById('choice-2');
const choice3Button = document.getElementById('choice-3');
const choice4Button = document.getElementById('choice-4');
const quizElement = document.getElementById('quiz');
const correctAnswerEl = document.getElementById('correct-answer');
const wrongAnswerEl = document.getElementById('wrong-answer');


// define start button in HTML
let startButton = document.getElementById('start-button');
// define the question component in HTML
let questionComponent = document.getElementById('question-component');
// define Element with the questions
let preQuizElement = document.getElementById('pre-quiz');
let highScore = ''
// add the listener to start quiz button to start function
startButton.addEventListener('click', startQuiz);

// button event listeners with a method to track the selection information
choice1Button.addEventListener('click', (event) => choiceClicked(event));
choice2Button.addEventListener('click', choiceClicked);
choice3Button.addEventListener('click', choiceClicked);
choice4Button.addEventListener('click', choiceClicked);

function startQuiz() {
  preQuizElement.classList.add('hide');
  quizElement.classList.remove('hide');
  buildHtml(questionBank[index]);
  // questionComponent.classList.remove('hidden');
 
}
//   let text = "<ul>";
// for (let i = 0; i < questionBankLength; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
index = 0;

function choiceClicked(event) {
  // display the data from the event click
  console.log(event)
  // display the text of the button that was selected
  console.log(event.target.innerText)
  console.log(event.target.innerHTML)
  //compare the text of the user choice to the correct answer
  if (event.target.innerHTML === questionBank.answer[index]){
    correctAnswerEl.classList.remove('hide');
    wrongAnswerEl.classList.add('hide');
  } else {
    wrongAnswerEl.classList.remove('hide');
    correctAnswerEl.classList.add('hide');
  }
  index ++;
  if (index === 10){
    quizElement.classList.add('hide');
    return
  }
  //tercisry operartor
  // index = index ? (index += 1) : 0;
  buildHtml(questionBank[index]);
  
}

// create the template variable
let template = document.getElementById('quiz');

// adding text to empty elements
function buildHtml(data) {
// check the selected data
  console.log(data);
  questionText.innerHTML = data.question;
  choice1Button.innerHTML = data.choice1;
  choice2Button.innerHTML = data.choice2;
  choice3Button.innerHTML = data.choice3;
  choice4Button.innerHTML = data.choice4;
}

// function checkForCorrectAnswer () {
//   if (== questionBank.answer)
// }
// run a compare of the inner html to see if it matches the answer
//   // create the html template and inject the needed data
//   document.getElementById('quiz').innerHTML = template
//   // insert the html into the DOM
//  template.innerHTML =
//    `<div id="question-component">
//       <div 
//         <h1 id="question-text">${data.question}</h1>
//       </div>
//       <div id="question-buttons"> 
//         <button id='choice-1' class='button'>${data.choice1}</button>
//         <button id='choice-2' class='button'>${data.choice2}</button>
//         <button id='choice-3' class='button'>${data.choice3}</button>
//         <button id='choice-4' class='button'>${data.choice4}</button>
//       </div>
//       <div id="answer-response"></div>
//     </div>
// //   `;
//   parentDiv = document.createElement('div');
//   h1Div = document.createElement('div');
//   h1El = document.createElement('h1');
//   h1El.innerHTML = data.question;
//   // combine the tree structure
//   h1Div.innerHTML = h1El;
//   parentDiv.innerHTML = h1Div;
//   // structure for button div
//   buttonDiv = document.createElement('div');
//   buttonEl1 = document.createElement('button');
//   buttonEl1.addEventListener('click', choiceClicked);
//   buttonEl1.innerHTML = data.choice1;
//   buttonEl2 = document.createElement('button');
//   buttonEl1.addEventListener('click', choiceClicked);
//   buttonEl2.innerHTML = data.choice2;
//   buttonEl3 = document.createElement('button');
//   buttonEl1.addEventListener('click', choiceClicked);
//   buttonEl3.innerHTML = data.choice3;
//   buttonEl4 = document.createElement('button');
//   buttonEl1.addEventListener('click', choiceClicked);
//   buttonEl4.innerHTML = data.choice4;
// // structure button div under parent Div
//   buttonDiv.innerHTML += buttonEl1;
//   buttonDiv.innerHTML += buttonEl2; 
//   buttonDiv.innerHTML += buttonEl3; 
//   buttonDiv.innerHTML += buttonEl4; 
// //structure button parent div into the section parent div
//   parentDiv.innerHTML += buttonDiv;

  // choice1Button.addEventListener('click', choiceClicked);


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
