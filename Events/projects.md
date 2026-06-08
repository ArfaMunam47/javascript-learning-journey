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