# Projects related to DOM
# Projects LINKS
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)
## Projects SOLUTIONS
```javascript
console.log("Arfa Munam")
```

# Project#.1 Solution CODE
```javascript
// Doing everything with my hands
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'brown') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# Project#.2 Solution CODE
# BMI CALCULATOR
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const results = form.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = weight / ((height * height) / 10000);
  const message = form.querySelector('#message');
  if (bmi < 18.6) {
    message.innerHTML =
      '<h2 style="color:black;font-size:30px;"><i>You are underweight</i></h2>';
  } else if (bmi > 18.6 && bmi < 24.9) {
    message.innerHTML =
      '<h2 style="color:black;font-size:30px;"><i>Your weight is quite normal</i></h2>';
  } else {
    message.inne\\rHTML =
      '<h2 style="color:black;font-size:30px;"><i>You are overweight</i></h2>';
  }
});

```
# Project#.3 Solution CODE
## DIGITAL CLOCK

```javascript
const clock= document.querySelector('#clock')
setInterval(function(){
let date= new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML= date.toLocaleTimeString()
},1000)
```

# Project#.4 Solution CODE
## GUESS THE NUMBER GAME

```javascript
let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const previous = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game is Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess > random) {
    displayMessage('Your number is TOO high');
  } else if (guess < random) {
    displayMessage('Your number is TOO low');
  }
}
function displayGuess(guess) {
  input.value = '';
  previous.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="heading"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const startNewGame = document.querySelector('#heading');
  startNewGame.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    input.value = '';
    prevGuess = [];
    numGuess = 1;
    previous.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
// Finally COMPLETED 4 P ROJECTS OF JS USING STACK BLITZ

```