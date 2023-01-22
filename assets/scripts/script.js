const questionBank = [
  {
   question: 'Commonly used data types DO Not include:',
   choice: ['strings', 'booleans', 'alerts', 'numbers'],
   answer: 'alerts'
 },
 {
   question: 'The condition in an if/else statement is enclosed with ________.',
   choice: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
   answer: 'parenthesis'
 },
   {
    question: 'Arrays in Javascript can be used to store',
    choice: ['numbers and stings', 'other arrays', 'booleans', 'all the above'],
    answer: 'all the above'
   },
   {
    question: 'String values must be enclosed within ______ when being assigned to variables',
   choice: ['commas','curly brackets', 'quotes', 'parenthesis'],
   choice1:
   choice2:
   answer: 'quotes'
   },
   {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
   choice: ['JavaScript','terminal.bash', 'for loops', 'console.log'],
   answer: 'console.log'
   },
   {
    question: 'JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.',
   choice: ['Display','Speak', 'Output', 'Show'],
   answer: ''
   },
   {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
   choice: ['Boolean','Condition', 'Event', 'RegExp'],
   answer: 'Boolean'
   },
   {
    question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
   choice: ['While Loop','Else Loop', 'Conditional Loop', 'For Loop'],
   answer: 'While'
   },
   {
    question: 'What is the format called that is used for storing and transporting data?',
   choice: ['Font','HTML', 'JSON', 'Syntax'],
   answer: 'JSON'
   },
   {
    question: 'In JavaScript, what is a block of code called that is used to perform a specific task?',
   choice: ['Declaration','Function', 'String', 'Variable'],
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