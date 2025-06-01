//            Multi level-condition
// const price = 4000;

// if (price >= 5000) {
//   // 10% discount
//   const discount = (price * 10) / 100;
//   const payment = price - discount;
//   console.log(payment);
// } else if (price > 2500) {
//   // 5% discount
//   const discount = (price * 5) / 100;
//   const payment = price - discount;
//   console.log(payment);
// } else {
//   console.log(price);
// }

const age = 30;
const price = 500;

if (age <= 12) {
  console.log("you can eat for free");
} else if (age >= 60) {
  // 50% discount
  const discount = (price * 50) / 100;
  const payment = price - discount;
  console.log(discount);
} else if (age >= 50) {
  // 25%
  const discount = (price * 25) / 100;
  const payment = price - discount;
  console.log(payment);
} else if (age >= 40) {
  // 15%
  const discount = (price * 15) / 100;
  const payment = price - discount;
  console.log(payment);
} else {
  console.log(price);
}
