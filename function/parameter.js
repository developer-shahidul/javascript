function square(number) {
  console.log("value of the number parameter", number);
  borgo = number * number;
  console.log("square of the giben number is:", borgo);
}
square(4);
console.log(",,,,,,,,,,,,,,,,,");
square(12);
square(15);
square(121);

//.2

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(50, 40);
add(60, 80);

//.3

function addAll(a, b, c, d, e, f, g) {
  const total = a + b + c + d + e + f + g;
  console.log(a, b, c, d, e, f, g);
  console.log(total);
}
// addAll(4, 54, 44, 7, 87, 85, 78);
addAll(4, 54, 44, 7, 87, 85);
// akta man nai tai undefine dekhai , nan dekhai
