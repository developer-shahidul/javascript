/**
 *     array has some duplicate element
 *     []
 */

const biriyaniKhor = [
  "abul",
  "babul",
  "kabul",
  "labul",
  "jabul",
  "mukbul",
  "abul",
  "babul",
];

function noDublicateArray(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDublicateArray(biriyaniKhor);
console.log(uniqueArray);

//এই unique হলো সেই নতুন array যেটাতে শুধু non-duplicate (অদ্বিতীয়) মান রাখবো।
// প্রতিটা item চেক করবো unique array এর ভেতর আছে কিনা।

// যদি না থাকে, তাহলে unique তে push() করে দিবো।

// এর ফলে unique array-তে ডুপ্লিকেট কিছু থাকবে না।

const number = [21, 54, 5, 84, 54, 12, 5, 78];
function duplicateArray(array) {
  duplicate = [];
  seen = [];
  for (const item of array) {
    if (seen.includes(item)) {
      if (!duplicate.includes(item)) {
        duplicate.push(item);
      }
    } else {
      seen.push(item);
    }
  }
  return duplicate;
  return seen;
}
const duplicateArray2 = duplicateArray(number);
console.log(duplicateArray2);
console.log(seen);
console.log(duplicate);

// // ১. "আমি কি এই আইটেমটি আগে দেখেছি?"
// seen.includes(item) পরীক্ষা করে দেখে যে বর্তমান item-টি seen নামক array-তে আগে থেকেই আছে কি না।

// যদি উত্তর 'হ্যাঁ' হয় (অর্থাৎ if ব্লক কাজ করে): এর মানে item-টি একটি ডুপ্লিকেট। আমরা আগের কোনো ধাপে এটিকে দেখেছিলাম।

// যদি উত্তর 'না' হয় (অর্থাৎ else ব্লক কাজ করে): এর মানে হলো, আমরা এই item-টি প্রথমবার দে
// যদি আমরা item-টি আগে না দেখে থাকি, তাহলে আমরা সেটিকে seen array-তে push করে দিই বা যোগ করি। এটি করার ফলে,
// পরের বার যখন একই item আসবে, তখন আমরা তাকে ডুপ্লিকেট হিসেবে শনাক্ত করতে পারব।
/***
 * 
 * 
 * ধরুন array = [2, 2, 2] এবং লুপ চলছে।

    প্রথম 2 আসার পর: seen array-তে 2 যোগ হবে। duplicate খালি থাকবে []।

    দ্বিতীয় 2 আসার পর:

        seen.includes(2) সত্য হবে।

        এখন ভেতরের if পরীক্ষা হবে: if (!duplicate.includes(2))

        duplicate array এখন খালি ([]), তাই duplicate.includes(2) এর ফল false।

        !false এর ফল হয় true।

        যেহেতু if কন্ডিশন true হলো, duplicate.push(2) কোডটি চলবে। duplicate array এখন [2]।

    তৃতীয় 2 আসার পর:

        seen.includes(2) সত্য হবে।

        এখন ভেতরের if আবার পরীক্ষা হবে: if (!duplicate.includes(2))

        duplicate array-তে এখন 2 আছে ([2]), তাই duplicate.includes(2) এর ফল true।

        !true এর ফল হয় false।

        যেহেতু if
 * 
 * 
 * 
 */
