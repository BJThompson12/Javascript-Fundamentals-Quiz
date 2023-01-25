const questionBank = [
  {
    question: 'Commonly used data types DO Not include:',
    choice1: '1. strings',
    choice2: '2. booleans',
    choice3: '3. alerts',
    choice4: '4. numbers',
    answer: '3. alerts',
  },
  {
    question:
      'The condition in an if/else statement is enclosed with ________.',
    choice1: '1. quotes',
    choice2: '2. curly brackets',
    choice3: '3. parenthesis',
    choice4: '4. square brackets',
    answer: '3. parenthesis',
  },
  {
    question: 'Arrays in Javascript can be used to store',
    choice1: '1. numbers and stings',
    choice2: '2. other arrays',
    choice3: '3. booleans',
    choice4: '4. all the above',
    answer: '4. all the above',
  },
  {
    question:
      'String values must be enclosed within ______ when being assigned to variables',
    choice1: '1. commas',
    choice2: '2. curly brackets',
    choice3: '3. quotes',
    choice4: '4. parenthesis',
    answer: '3. quotes',
  },
  {
    question:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choice1: '1. JavaScript',
    choice2: '2. terminal.bash',
    choice3: '3. for loops',
    choice4: '4. console.log',
    answer: '4. console.log',
  },
  {
    question: 'What does the DOM stand for?',
    choice1: '1. Document Object Method',
    choice2: '2. Do Or Move',
    choice3: '3. Diagram Object Model',
    choice4: '4. Document Object Model',
    answer: '4. Document Object Model',
  },
  {
    question:
      'What is a JavaScript element that represents either TRUE or FALSE values?',
    choice1: '1. Boolean',
    choice2: '2. Condition',
    choice3: '3. Event',
    choice4: '4. RegExp',
    answer: '1. Boolean',
  },
  {
    question:
      'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
    choice1: '1. While Loop',
    choice2: '2. Conditional Loop',
    choice3: '3. Else Loop',
    choice4: '4. For Loop',
    answer: '1. While Loop',
  },
  {
    question:
      'What is the format called that is used for storing and transporting data?',
    choice1: '1. Font',
    choice2: '2. HTML',
    choice3: '3. JSON',
    choice4: '4. Syntax',
    answer: '3. JSON',
  },
  {
    question:
      'In JavaScript, what is a block of code called that is used to perform a specific task?',
    choice1: '1. Declaration',
    choice2: '2. Function',
    choice3: '3. String',
    choice4: '4. Variable',
    answer: '2. Function',
  },
  {
   question: 'Don\'t you think this quiz is pretty awesome 😎',
   choice1: '1. it\'s ok',
   choice2: '2. kind of',
   choice3: '3. I guess so',
   choice4: '4. Say yes and take your 10 points 🫠',
   answer: '4. Say yes and take your 10 points 🫠',
  },
];
let index = 0;
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
const finalScoreEl = document.getElementById('final-score');
const highScoreEl = document.getElementById('high-scores');
// define start button in HTML
let startButton = document.getElementById('start-button');
// define the question component in HTML
let questionComponent = document.getElementById('question-component');
// define Element with the questions
let preQuizElement = document.getElementById('pre-quiz');
const submitButtonEl = document.getElementById('submit-button');
const navEl = document.getElementById('nav-score');
let timerInterval;
let highScore;

let scoreEl = document.getElementById('high-score');

const goBackEl = document.getElementById('go-back');
goBackEl.addEventListener('click', reloadQuiz);
// reload the quiz to retake
function reloadQuiz() {
  location.reload();
}
const clearHighScoreEl = document.getElementById('clear-high-score-button');
clearHighScoreEl.addEventListener('click', clearStorage);

// add the listener to start quiz button to start function
startButton.addEventListener('click', startQuiz);

// listener for view high score
navEl.addEventListener('click', hiScorePage);
// button event listeners with a method to track the selection information
choice1Button.addEventListener('click', (event) => choiceClicked(event));
choice2Button.addEventListener('click', (event) => choiceClicked(event));
choice3Button.addEventListener('click', (event) => choiceClicked(event));
choice4Button.addEventListener('click', (event) => choiceClicked(event));

let scoreSubmit = document.getElementById('submit-button');

scoreSubmit.addEventListener('click', hiScorePage);
var olEl = document.getElementById('score-list');

function clearStorage() {
  localStorage.clear();
}

function hiScorePage(event) {
  event.preventDefault();
  console.log('hi');
  // must take in and identify the user input data
  var initialsEl = document.getElementById('high-score-input').value.trim();
  if (initialsEl !== '') {
    var highScoreArray =
      JSON.parse(window.localStorage.getItem('highScores')) || [];

    let newScore = {
      score: highScore,
      initials: initialsEl,
    };

    // add the score to the array
    highScoreArray.push(newScore);
    // when sending to local systme must stringify and then set it
    window.localStorage.setItem('highScores', JSON.stringify(highScoreArray));
  }

  preQuizElement.classList.add('hide');
  finalScoreEl.classList.add('hide');
  highScoreEl.classList.remove('hide');

  displayScore();
}

function displayScore() {
  correctAnswerEl.classList.add('hide');
  wrongAnswerEl.classList.add('hide');
  var highScoreArray =
    JSON.parse(window.localStorage.getItem('highScores')) || [];

  //when you get the local storage its an array describe value you want to return
  highScoreArray.sort((a, b) => {
    return b.score - a.score;
  });

  for (let i = 0; i < highScoreArray.length; i++) {
    // const element = array[i];
    var liTag = document.createElement('li');
    liTag.textContent =
      highScoreArray[i].initials + ' - ' + highScoreArray[i].score;
    olEl.appendChild(liTag);
  }
}

function startQuiz() {
  highScore = 0;
  setTime();
  preQuizElement.classList.add('hide');
  quizElement.classList.remove('hide');
  replaceInnerHTML(questionBank[index]);
  // questionComponent.classList.remove('hidden');
}

function choiceClicked(event) {
  // display the data from the event click
  console.log(event);
  // display the text of the button that was selected
  console.log(event.target.innerHTML);
  //compare the text of the user choice to the correct answer
  if (event.target.innerHTML == questionBank[index].answer) {
    correctAnswerEl.classList.remove('hide');
    wrongAnswerEl.classList.add('hide');
    highScore += 10;
  } else {
    wrongAnswerEl.classList.remove('hide');
    correctAnswerEl.classList.add('hide');
    secondsLeft = secondsLeft - 10;
  }
  if (event.target.innerHTML == questionBank[index].answer)
    // log the current score
    console.log(highScore);
  index++;
  if (index == questionBankLength) {
    testOver();
  }

  replaceInnerHTML(questionBank[index]);
}

// adding text to empty elements
function replaceInnerHTML(data) {
  // place data from the questionBank array into the html
  console.log(data);
  questionText.innerHTML = data.question;
  choice1Button.innerHTML = data.choice1;
  choice2Button.innerHTML = data.choice2;
  choice3Button.innerHTML = data.choice3;
  choice4Button.innerHTML = data.choice4;
}

let timeEl = document.getElementById('clock');
let secondsLeft = 90;
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval

      testOver();
    }
  }, 1000);
}

function testOver() {
  clearInterval(timerInterval);
  scoreEl.textContent = highScore;
  finalScoreEl.classList.remove('hide');
  quizElement.classList.add('hide');
}

function returnToQuiz() {
  preQuizElement.classList.remove('hide');
  highScoreEl.classList.add('hide');
}
// function enterInitials(){
//   submitButtonEl.addEventListener('click', (event) => choiceClicked(event));
// }

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
