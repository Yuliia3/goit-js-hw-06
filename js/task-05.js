const inputNameRef = document.querySelector("#name-input");
// console.log(inputNameRef);
const outputNameRef = document.querySelector("#name-output");
// console.log(outputNameRef);
inputNameRef.addEventListener("input", (event) => {
  const inputText = event.target.value;
  outputNameRef.textContent = inputText === "" ? "Anonymous" : inputText;
});