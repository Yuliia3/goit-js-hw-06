const fontSizeControlerRef = document.querySelector("#font-size-control");
// console.log(fontSizeControlerRef);
const text = document.querySelector("#text");

fontSizeControlerRef.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControlerRef.value}px`;
});