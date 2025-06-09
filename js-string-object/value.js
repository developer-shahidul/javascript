const person = {
  name: "sador uddin",
  age: 22,
  profession: "developer",
  salary: 23000,
  married: true,
  "fav place": ["bandorban", "kuyakata", "sainmartin"],
};

person.salary = 30000;
person["age"] = 28;
person["fav place"] = ["swizerlan", "denmar", "dreamland"]; // poriborton kora hoice
// person["fav place"].push("swizerlan", "denmar", "dreamland"); // add kora hoice
console.log(person);
// string ke khujte gele third bracket aer modde quttetion dite hobe; onno khetre dot dile o hobe;

const keyName = "profession";


console.log(person[keyName]);
const propName='profession'
person[propName] = "develops";
console.log(person);

// person['propName'] = "develops"; single qutteton dile profession change hoye propName hoye jabe;