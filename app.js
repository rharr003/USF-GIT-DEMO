const heading = document.querySelector("h1");

function rgbString() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
setInterval(function () {
  heading.style.color = rgbString();
}, 1000);
