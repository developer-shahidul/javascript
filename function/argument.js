function doubleIt(number) {
  const doubled = number * 2;
  console.log(doubled);
}
console.log("i will call the function");
doubleIt(15);
console.log(",,,,,,,,,,,,,,,,,,,,,,,,");
doubleIt(94);
console.log("..................");
doubleIt(234);
const money = 112;
doubleIt(money);

function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(num1, num2, "difference is :", diff);
}
const fatherAge = 40;
const motherAge = 20;
difference(fatherAge, motherAge)