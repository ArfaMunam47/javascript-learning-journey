# Project SOLUTION CODE
## project no. 5
## unlimited Colors
```javascript
let randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let inter;
let startChangingColor = function () {
  let name = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!inter) {
    inter = setInterval(name, 1000);
  }
};
let stopChangingColor = function () {
  clearInterval(inter);
  inter = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
## project no. 6
## keyboard MAGIC

```javascript

const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table style='padding:10px;border:2px solid grey;border-radius:5px;'>
  <tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr>
  <th>${e.key === ' ' ? 'Space' : e.key}</th>
  <th>${e.keyCode}</th>
  <th>${e.code}</th>
  </tr>
  </table>`;
});

```