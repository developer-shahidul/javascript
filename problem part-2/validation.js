function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "pleace provide a nummber";
  }
  return num1 * num2;
}
// const result = multiply("5", "seven");
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "first name should be a string";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const full = first + " " + second;
  return full;
}
const full = fullName("rahan");
console.log(full);

function getPrice(product) {
  if (typeof product !== "object") {
    return "pleace provide an object";
  }
  const price = product.price;
  return price;
}

// const price = getPrice({ name: "chulkani dandi", price: 35, color: "blue" });
const price = getPrice(5);
console.log(price);

function getSecond(number) {
  console.log(Array.isArray(number));
  const second = number[1];
  return second;
}
const second = getSecond([1, 25, 69]);
console.log(second);
