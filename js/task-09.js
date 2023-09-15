function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpanRef = document.querySelector(".color");
// console.log(colorSpanRef);
const changeColorRef = document.querySelector(".change-color");
// console.log(changeColorRef);
const bodyRef = document.body;
// console.log(bodyRef);
changeColorRef.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorSpanRef.textContent = randomColor;
});
