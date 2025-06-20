function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, oparation) {
  if (oparation === "add") {
    const result = add(a, b);
    return result;
  } else if (oparation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (oparation === "multiply") {
    return multiply(a, b);
  } else if (oparation === "divide") {
    return divide(a, b);
  } else {
    return "only 'add', 'subtract', 'multiply','divide', operation is allow. ";
  }
}
let result = calculator(5, 7, "add");
console.log(result);
result = calculator(5, 7, "subtract");
console.log(result);
result = calculator(5, 7, "multiply");
console.log(result);
result = calculator(5, 7, "divide");
console.log(result);
