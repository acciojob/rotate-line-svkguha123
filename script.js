//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

setInterval(() => {
  angle += 1;
  line.style.transform = `rotate(${angle}deg)`;
}, 10);