const jim = 21;
const tim = 45;
const kim = 87;

if (jim > tim && jim > kim) {
  console.log("jim is the ultimate bos");
} else if (tim > jim && tim > kim) {
  console.log("tim is the boss");
} else {
  console.log("kim is the kardashins boss");
}
maxOfThree(jim, tim, kim);

//...................................

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "jim is the ultimate bos";
  } else if (num2 > num1 && num2 > num3) {
    return "tim is the boss";
  } else {
    return "kim is the kardashins boss";
  }
}
const num1 = 51;
const num2 = 54;
const num3 = 87;
console.log(maxOfThree(num1, num2, num3));
///..................
const max = Math.max(12, 1, 26);
console.log("max ishuing Math.max", max);
