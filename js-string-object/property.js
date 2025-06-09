const person = {
  name: "sador uddin",
  age: 22,
  profession: "developer",
  salary: 23000,
  married: true,
  "fav place": ["bandorban", "kuyakata", "sainmartin"],
};

// console.log(person);
//1.... dot notation
// dot symble diya object aer property er value acces kora

// console.log(person.profession);
const income = person.salary;
// console.log(person.salary);

//2.... bracket notation
// third bracket diya object aer property er value acces kora

console.log(person["age"]);
const boyosh = person["age"];
console.log(boyosh);

// error
// console.log(person."fav place")
// solve
console.log(person["fav place"]);
