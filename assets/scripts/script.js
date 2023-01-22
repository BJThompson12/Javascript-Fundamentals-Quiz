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
// define start button in HTML
let startButton = document.getElementById("start-button")
// defin the question component in HTML
let questionComponent = document.getElementById('question-component')
// define Element with the questions
let preQuizElement = document.getElementById('pre-quiz')

// add the listener to start quiz button to start function
startButton.addEventListener('click',startQuiz)

const questionBank = [
  {
   question: 'Commonly used data types DO Not include:',
   choice: 'strings', 'booleans', 'alerts', 'numbers',
   answer: 'alerts'
  },
  {
   question: 'The condition in an if/else statement is enclosed with ________.',
   choice: 'quotes', 'curly brackets', 'parenthesis', 'square brackets',
   answer: 'parenthesis'
   },
   {
    question: 'Arrays in Javascript can be used to store',
    choice: 'numbers and stings', 'other arrays', 'booleans', 'all the above',
    answer: 'all the above'
   },
   {
    question: 'String values must be enclosed within ______ when being assigned to variables',
   choice: 'commas','curly brackets', 'quotes', 'parenthesis',
   answer: 'quotes'
   },
   {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
   choice: 'JavaScript','terminal.bash', 'for loops', 'console.log',
   answer: 'console.log'
   },
   {
    question: 'JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.',
   choice: 'Display','Speak', 'Output', 'Show',
   answer: ''
   }
   {
    question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
   choice: 'Boolean','Condition', 'Event', 'RegExp',
   answer: 'Boolean'
   },
   {
    question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
   choice: 'While Loop','Else Loop', 'Conditional Loop', 'For Loop',
   answer: 'While'
   },
   {
    question: 'What is the format called that is used for storing and transporting data?',
   choice: 'Font','HTML', 'JSON', 'Syntax',
   answer: 'JSON'
   },
   {
    question: 'In JavaScript, what is a block of code called that is used to perform a specific task?',
   choice: 'Declaration','Function', 'String', 'Variable',
   answer: 'Function'
   }
]
const questionList = ['Commonly used data types DO NOT include:'];

const answerList = ['strings', 'Booleans', 'alerts', 'numbers'];
const answerList2 = ['test', 'test', 'test', 'test']

function startQuiz (){
  preQuizElement.classList.add("hidden");
  questionComponent.classList.remove("hidden");
  question.textContent += "Commonly used data types do not include";
  
  
  answerList.forEach((array) => {
    let li = document.createElement('li');
    li.innerText = array;
    possibleAnswers.appendChild(li);
  });
  
  setTimeout(wait, 3000)

}

let question = document.getElementById('question-text')
let possibleAnswers = document.getElementById('answer-list')



function wait(){
  document.getElementById('answer-list').innerHTML = '';

  answerList2.forEach((array) => {
    let li = document.createElement('li');
    li.innerText = array;
    possibleAnswers.appendChild(li);
  });
}

// let buttonChange = document.append('button')