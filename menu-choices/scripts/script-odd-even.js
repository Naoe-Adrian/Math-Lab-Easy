function checkOddEven() {
  let inputOddEven = document.getElementById("odd-even-input");
  let resultOddEven = document.getElementById("result");

  inputOddEven.addEventListener("input", () => {
    let inputValue = inputOddEven.value;

    if (inputValue === "") {
      resultOddEven.textContent = "";
    } else if (!isNaN(inputValue)) {
      let number = parseInt(inputValue, 10);
      if (number % 2 === 0) {
        resultOddEven.textContent = `The number ${number} is EVEN.`;
      } else {
        resultOddEven.textContent = `The number ${number} is ODD.`;
      }
    } else {
      resultOddEven.textContent = "Please enter a valid number (digits only).";
    }
  });
}
checkOddEven();
