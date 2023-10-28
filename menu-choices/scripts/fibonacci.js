function generateFibonacci() {
  let input = document.getElementById("fibonacci-input");
  let result = document.getElementById("result-fibonacci");

  let num = parseInt(input.value);

  if (isNaN(num) || num < 1) {
    result.textContent = "Please enter a valid positive number.";
    return;
  }

  let fibonacciSequence = [0, 1];

  while (fibonacciSequence.length < num) {
    let nextValue =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextValue);
  }

  result.textContent = fibonacciSequence.join(", ");
}

let input = document.getElementById("fibonacci-input");

input.addEventListener("input", generateFibonacci);
