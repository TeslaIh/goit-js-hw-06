function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBody = document.querySelector("body");
const spanColorCodeEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", changeColor);

function changeColor() {
  const colorChange = getRandomHexColor();
  spanColorCodeEl.textContent = colorChange;
  colorBody.style.backgroundColor = colorChange;
}