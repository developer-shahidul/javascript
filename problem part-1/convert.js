function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const shovoHeight = inchToFeet(75);
// console.log(shovoHeight);

// 6fit 3 inch ababe dekhabo //parseInt() → এটা সেই ভগ্নাংশ (decimal) মান থেকে শুধু পূর্ণ সংখ্যা অংশ নেয়।
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " fit " + inchRemaining + " inch ";
  return result;
}
const tomaHeight = inchToFeet2(75);
console.log(tomaHeight);

function milesToKilometer(miles) {
  const kilo = miles * 1.60934;
  return kilo;
}
function kiloMeterToMiles(kilo) {
  const miles = kilo * 0.621371;
  return miles;
}
