const persons = ["rakib", "kajol", "sojol", "Bilkis", "munna", "Rabby", "akij"];
const sortedperson = persons.sort();
console.log(sortedperson);

// .sort() JavaScript-এর একটি মেথড, যা অ্যারেকে alphabetical (dictionary অনুযায়ী) সাজায়।
// sort bangla বাছাই করুন

// sort

// const numbers = [4, 6, 8, 9, 7, 3, 2, 4];
/***
 *        ascending   ==>  smaller to large   [2,3,4,6,7,8,9];
 *        descending  ==>  large to smaller   [9,8,7,6,4,3,2];
 */

const numbers = [4, 6, 8, 9, 7, 3, 2];
const numbers_asc = numbers.sort();
// console.log(numbers_asc);

const numbers2 = [4, 54, 3, 9, 7, 79, 8, 2];
const number_asc = numbers2.sort();
// console.log(number_asc); //not working

console;
const numbers_asc1 = [...numbers2].sort(function (a, b) {
  return a - b;
});
const numbers_des = [...numbers2].sort(function (a, b) {
  return b - a;
});
console.log(numbers_asc1);
console.log(numbers_des);

//[...numbers2]:-  কারণ .sort() মেথডটি মূল অ্যারেটাকেই পরিবর্তন (mutate) করে।

// তুমি যদি সরাসরি numbers2.sort() করো, তাহলে numbers2 অ্যারেটার ভ্যালুগুলো পরিবর্তিত হয়ে যাবে।

// কিন্তু আমরা চাই শুধু একটা নতুন অ্যারে তৈরি করে সেটা sort হোক — মূলটা যেন ঠিক থাকে। তাই কপি করা হয়েছে এইভাবে:[...numbers2]
