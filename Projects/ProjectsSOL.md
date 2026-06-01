# Projects related to DOM
# Projects LINKS
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)
## Projects SOLUTIONS
```javascript
console.log("Arfa Munam")
```
## Project#.1 Solution Code
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

# Project 2 Solution CODE
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
# Project 3 Solution CODE
## DIGITAL CLOCK

```javascript
const clock= document.querySelector('#clock')
setInterval(function(){
let date= new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML= date.toLocaleTimeString()
},1000)
```