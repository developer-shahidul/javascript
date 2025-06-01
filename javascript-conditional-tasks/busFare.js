/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const Children = true;
const fare = 800;
const age = 10;
const Students = true;
const seniorCitizens = false;
let message = "";
let result;

// if (age < 10 || Children === true) {
//   massage = "You are a children. You get a free ticket.";
// } else if (Students === true) {
//   massage = fare * 0.5;
// } else if (seniorCitizens === true && age >= 60) {
//   massage = fare - (fare * 15) / 100;
// } else {
//   massage = fare;
// }
// console.log(massage);

result =
  age < 10 || Children === true
    ? "You are a children. You get a free ticket."
    : Students === true
    ? fare * 0.5
    : seniorCitizens === true && age >= 60
    ? fare - (fare * 15) / 100
    : fare;
console.log(result);
