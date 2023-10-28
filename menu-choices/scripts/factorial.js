document.addEventListener("DOMContentLoaded", function () {
  let factorialInput = document.getElementById("factorial-input");
  let resultFactorial = document.getElementById("result-factorial");

  factorialInput.addEventListener("input", function () {
    let inputValue = parseInt(factorialInput.value);

    if (!isNaN(inputValue) && inputValue >= 0) {
      resultFactorial.textContent = `The factorial of ${inputValue} is ${calculateFactorial(
        inputValue
      )}.`;
    } else {
      resultFactorial.textContent = "Please enter a valid non-negative number.";
    }
  });

  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
});
