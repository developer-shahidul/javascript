// const math = {
//   min: function min(num1, num2) {
//     return num2;
//   },
// };
// console.log(math.min);

const min = Math.min(45, 5, 854, 45, 6, 48, 84, 65, 5, 54, 49, 96, 6, 25);
console.log(min);
const max = Math.max(45, 5, 854, 45, 6, 48, 84, 65, 5, 54, 49, 96, 6, 25);
console.log(max);
console.log(Math.PI); //........  π=3.1416
console.log(Math.abs(-88)); //..কোনো সংখ্যার অ্যাবসোলিউট ভ্যালু (ধনাত্মক মান) রিটার্ন করে।
console.log(Math.abs(5 - 10));
console.log(Math.round(2.25));
Math.round(); //.................ফাংশনটি দশমিক সংখ্যাকে নিকটতম পূর্ণসংখ্যায় রাউন্ড করে দেয়।
console.log(Math.round(2.8)); // যদি দশমিক অংশ 0.5 বা তার বেশি হয় → উপরের পূর্ণসংখ্যা নেয়
console.log(Math.round(2.5)); // যদি দশমিক অংশ 0.49 বা কম হয় → নিচের পূর্ণসংখ্যা নেয়
console.log(Math.floor(54.9999));
console.log(Math.floor(54.55)); //Math.floor() ফাংশনটি যেকোনো দশমিক সংখ্যাকে নিচের দিকে পূর্ণসংখ্যায় নামিয়ে দেয় (মানে, সবচেয়ে কাছের ছোট পূর্ণসংখ্যা নেয়)।
console.log(Math.ceil(2.995));
console.log(Math.ceil(2.00001)); //Math.ceil() ফাংশনটি যেকোনো দশমিক সংখ্যাকে উপরের দিকে পূর্ণসংখ্যায় উঠিয়ে দেয় (ceiling মানে "ছাদ" অর্থাৎ উপরের দিক)।
console.log(Math.random()); //.....Math.random() → 0 থেকে 1 এর মধ্যে দশমিক সংখ্যা
console.log(Math.random() * 10); //* 0 →10  থেকে 10  PORJONTO  এর মধ্যে দশমিক সংখ্যা
const rand = Math.round(Math.random() * 10);
console.log(rand); //........... → এটাকে নিকটতম পূর্ণসংখ্যায় রূপান্তর করে
