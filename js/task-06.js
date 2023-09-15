const inputValidationRef = document.querySelector("#validation-input");
// console.log(inputValidationRef);
inputValidationRef.addEventListener("blur", () => {
  const checkCurrectLength = parseInt(
    inputValidationRef.getAttribute("data-length")
  );
  const inputValue = inputValidationRef.value.length;

  if (inputValue === checkCurrectLength) {
    inputValidationRef.classList.remove("invalid");
    inputValidationRef.classList.add("valid");
  } else {
    inputValidationRef.classList.remove("valid");
    inputValidationRef.classList.add("invalid");
  }
});