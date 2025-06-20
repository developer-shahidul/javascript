const disha = 46;
const salman = 98;
if (disha > salman) {
  console.log("disha will get the strawberry");
} else {
  console.log("salman will eat the strawbetty");
}

//inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const max = getMax(40, 56);
const max2 = getMax(80, 45);

const ultimateMax = getMax(max, max2);
console.log("max of two is:", ultimateMax);
