const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

//  for of
const rev_numbers = [];
for (let number of numbers) {
  // rev_numbers.unshift(number);
}
// console.log(rev_numbers);
// let ... of ব্যবহার করা হয় অ্যারে বা iterable গুলোর ভিতরের প্রতিটি আইটেম একটার পর একটা বের করার জন্য।

for (let number of [...numbers].reverse()) {
  rev_numbers.push(number);
}
console.log(rev_numbers);

// decremental for loop side == bangla হ্রাস
// for
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  // console.log(num);
  rev_rev_numbers.push(num);
}
// console.log(rev_rev_numbers);

// যেকোনো ফাংশন কল করার সময় () ব্যবহার করতে হয়। [] ব্যবহার হয় শুধুমাত্র অ্যারে বা অবজেক্টের ইনডেক্স বা প্রপার্টি এক্সেস করার জন্য।
// 🔍 ধরো numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// → তাহলে numbers.length = 10

// তোমার লুপ শুরু হচ্ছে i = 10 থেকে
// কিন্তু:

//     numbers[10] = undefined

//     কারণ index হয় 0, 1, 2 — 10 index নাই!
// index aer man 10 ta theke 1 ta "-" kore dile 9 ta hobe ,
//  undefind dekhabe na,numbers.length - 1
