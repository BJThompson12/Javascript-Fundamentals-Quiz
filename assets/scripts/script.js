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
let questionComponent = document.getElementById("question-component")
// define Element with the questions
let preQuizElement = document.getElementById("pre-quiz")

// add the listener to start quiz button to start function
startButton.addEventListener("click",startQuiz)

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