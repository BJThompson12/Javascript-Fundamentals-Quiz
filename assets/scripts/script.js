const questionBank = [
  {
   question: 'Commonly used data types DO Not include:',
   choice1: 'strings',
   choice2:'booleans', 
   choice3: 'alerts',
   choice4: 'numbers',
   answer: 'alerts'
 },
 {
   question: 'The condition in an if/else statement is enclosed with ________.',
   choice1: 'quotes',
   choice2: 'curly brackets',
   choice3: 'parenthesis',
   choice4: 'square brackets',
    answer: 'parenthesis'
 },
   {
    question: 'Arrays in Javascript can be used to store',
    choice1: 'numbers and stings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all the above',
    answer: 'all the above'
   },
   {
    question: 'String values must be enclosed within ______ when being assigned to variables',
   choice1: 'commas',
   choice2: 'curly brackets',
   choice3: 'quotes',
   choice4: 'parenthesis',
   answer: 'quotes'
   },
   {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
   choice1: 'JavaScript',
   choice2: 'terminal.bash', 
   choice3: 'for loops',
   choice4: 'console.log',
   answer: 'console.log'
   },
   {
    question: 'JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.',
   choice1: 'Display',
   choice2:'Speak', 
   choice3: 'Output',
   choice4: 'Show',
   answer: ''
   },
   {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
   choice1: 'Boolean',  
   choice2: 'Condition',
   choice3: 'Event',
   choice4: 'RegExp',
   answer: 'Boolean'
   },
   {
    question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
   choice1: 'While Loop', 
   choice2: 'Conditional Loop',
   choice3: 'Else Loop',
   choice4: 'For Loop',
   answer: 'While'
   },
   {
    question: 'What is the format called that is used for storing and transporting data?',
    choice1: 'Font',
    choice2: 'HTML',
    choice3: 'JSON', 
    choice4: 'Syntax',
    answer: 'JSON'
   },
   {
    question: 'In JavaScript, what is a block of code called that is used to perform a specific task?',
   choice1: 'Declaration', 
   choice2: 'Function',
   choice3: 'String',
   choice4: 'Variable',
   answer: 'Function'
   }
]
const correctAnswer = 'Correct';
const incorrectAnswer = 'Incorrect';
const questionBankLength = questionBank.length;
const questionText = document.getElementById('question-text');
const questionButton = document.getElementById('question-button');
const answerResponse = document.getElementById('answer-response')
let index
// define start button in HTML
let startButton = document.getElementById("start-button")
// defin the question component in HTML
let questionComponent = document.getElementById('question-component')
// define Element with the questions
let preQuizElement = document.getElementById('pre-quiz')
// add the listener to start quiz button to start function
startButton.addEventListener('click',startQuiz)

function startQuiz (){
  preQuizElement.classList.add('hidden');
  questionComponent.classList.remove('hidden');
  showQuestion()
  buildHtml()
  // h1.innerText = questionBank.question[0],
  // question.textContent += "Commonly used data types do not include";
}
//   let text = "<ul>";
// for (let i = 0; i < questionBankLength; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
index=null
const testArray =[ {
  question: 'test123',
  choice: ['abc', 'defg']
},
{
  question: 'test123',
  choice: ['abc', 'defg']
}
]
function correctAnswerChosen(){
  //tercisry operartor
  index = index ? index+=1 : 0
  buildHtml(testArray[index])
}
function buildHtml (data){
  console.log(data)
  innerHtml = 
  `<div id="question-component" class="hidden">
      <div>
        <h1 id="question-text">${data.question}</h1>
      </div>
      <div id="question-buttons"> 
        <button class="button">${data.choice1}</button>
        <button class="button"></button>
        <button class="button"></button>
        <button class="button"></button>
      </div>
      <div id="answer-response"></div>
    </div>
  `
  
}
function showQuestion () {
  console.log(testArray[0].choice)
  questionText.innerText = testArray.choice;
  questionButtons.innerText = testArray.choice;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
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