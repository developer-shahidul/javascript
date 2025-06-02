// js-array-tasks

/* 1. Declare an array 
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the fin
--- 
*/

// const fruits = ["mango", "banana", "jackfruits", "painapple", "cocunat"];
// console.log(fruits);
// console.log(fruits[3]);
// fruits[2] = "jambura";
// console.log(fruits);

/*
### 2. Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output

---*/
// let touristDestinations = ["Cox's Bazar", "Sundarbans", "Bandarban"];
// touristDestinations.push("sylhet sada pathor");
// touristDestinations.push("Rangamati", "Sylhet");
// touristDestinations.pop();
// console.log(touristDestinations);

/*
### 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.

---*/
// let books = ["bangla", "english", "math", "physics", "chemestry", "javascript"];
// console.log(books.includes("javascript"));
// if (books.includes("javascript")) {
//   console.log("Yes, the array contains a JavaScript book.");
// } else {
//   console.log("No, the JavaScript book is not in the array.");
// }
/*
### 4. Checking if it's an Array

**Instructions:**

    1. Create different variables, each containing either an array or a non-array value.

    2. Now use isArray to check if each variable is an array.

    3. Print a message to the console indicating whether each variable is an array or not.

----*/
// let books = ["bangla", "english", "math", "physics", "chemestry", "javascript"];
// let table = "10";
// let phone = "samsung";
// let bnak = "jonota";
// console.log(Array.isArray(books));
// console.log(Array.isArray(table));
// console.log(Array.isArray(phone));
// console.log(Array.isArray(bnak));
// if (Array.isArray(books)) {
//   console.log("books is an array");
// } else {
//   ("books is NOT an array");
// }
// if (Array.isArray(table)) {
//   console.log("table is an array");
// } else {
//   console.log("books is NOT an array");
// }
// if (Array.isArray(phone)) {
//   console.log("phone is an array");
// } else {
//   console.log("books is NOT an array");
// }
// if (Array.isArray(bnak)) {
//   console.log("bank is an array");
// } else {
//   console.log("books is NOT an array");
// }
// tarnari
// console.log(
//   Array.isArray(table) ? "table is an array" : "books is NOT an array"
// );
// console.log(
//   Array.isArray(phone) ? "phone is an array" : "books is NOT an array"
// );
// console.log(Array.isArray(bnak) ? "bank is an array" : "books is NOT an array");

/*
### 5. Combining Arrays

**Instructions:**

1. Create two arrays of your choice.
2. Use the concat method to combine o arrathe twys into a new array.
3. Print both the original arrays and the combined array using console.log().
*/
// Original arrays
const Fruits = ["apple", "banana", "mango"];
const Vegetables = ["carrot", "potato", "spinach"];

let Combined = Fruits.concat(Vegetables);

// Print all arrays
console.log("Fruits:", Fruits);
console.log("Vegetables:", Vegetables);
console.log("Combined:", Combined);
//  concat 2 ta array ke aksahte jug korbe
