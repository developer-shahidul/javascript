/***
 *         for a given  string tell me weather it has even
 *         number of cherecters or not
 */
function evenSizedString(str) {
  const size = str.length;
  //   console.log(str, size);
  if (size % 2 === 0) {
    // console.log("even size");
  } else {
    // console.log("odd size");
  }
}
evenSizedString("dhaka");
evenSizedString("faka");

// ..2

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

//..3

function numberOfElement(numbers) {
  const len = numbers.length;
  return len;
}
const leanthOfArray = numberOfElement([
  164, 4849, 898, 9879, 94, 949, 98798, 8,
]);
console.log(leanthOfArray);

//...4
function getAge(person) {
  const age = person.age;
  return age;
}
const person1 = { name: "shahidul islam", age: 24 };
const result = getAge(person1);
console.log(result);
