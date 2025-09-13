
const display = document.getElementById("display");
const exprDisplay = document.getElementById("expression-display");
let expression = "";

function appendValue(val) {
  expression += val;
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  exprDisplay.textContent = expression;
  display.value = "";
}

function calculate() {
  try {
    // Replace pi and e with math.js constants
    let expr = expression.replace(/pi/g, 'pi').replace(/e/g, 'e');
    // Replace ^ with ** for math.js
    expr = expr.replace(/\^/g, '**');
    // Evaluate with math.js
    const result = math.evaluate(expr);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
