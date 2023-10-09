document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "";
  let currentOperator = "";
  let previousInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.getAttribute("data-value");

      if (buttonValue === "AC") {
        clearAll();
      } else if (buttonValue === "DEL") {
        deleteLastCharacter();
      } else if (buttonValue === "=") {
        calculateResult();
      } else if (
        buttonValue === "%" ||
        buttonValue === "/" ||
        buttonValue === "*" ||
        buttonValue === "-" ||
        buttonValue === "+"
      ) {
        handleOperator(buttonValue);
        // Display the operator in the calculator display
        appendToDisplay(buttonValue);
      } else {
        appendToDisplay(buttonValue);
      }
    });
  });

  function clearAll() {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    display.value = "";
  }

  function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  function calculateResult() {
    if (currentInput && previousInput && currentOperator) {
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);

      switch (currentOperator) {
        case "+":
          currentInput = (num1 + num2).toString();
          break;
        case "-":
          currentInput = (num1 - num2).toString();
          break;
        case "*":
          currentInput = (num1 * num2).toString();
          break;
        case "/":
          currentInput = (num1 / num2).toString();
          break;
        case "%":
          currentInput = ((num1 / 100) * num2).toString();
          break;
        default:
          break;
      }

      display.value = currentInput;
      previousInput = "";
      currentOperator = "";
    }
  }

  function handleOperator(operator) {
    if (currentInput && !currentOperator) {
      currentOperator = operator;
      previousInput = currentInput;
      currentInput = "";
    }
  }

  function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
  }
});
