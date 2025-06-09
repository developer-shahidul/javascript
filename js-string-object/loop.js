const mobile = {
  brand: "samsung",
  name: "samsung s22 ultra",
  price: 150000,
  camera: "12mp",
  color: "black",
  isNew: true,
};

// for off : array
// for in : object
// prop == property

// Object এর property দেখার জন্য 	  for...in
// Array তে ঘুরে দেখার জন্য	          for...of
// Object এর keys array বানাতে	       Object.keys(obj)
// Object এর values array বানাতে	     Object.values(obj)
// Key-value জোড়া array বানাতে	      Object.entries(obj)

for (const prop in mobile) {
  // console.log(prop);
  // console.log(mobile[prop]);
}

// ➡️ এটি mobile object-এর প্রতিটি key-value জোড়াকে একটি nested array হিসাবে return করে।
// const key = Object.entries(mobile);
// console.log(key);

//  Bonus: Loop দিয়ে key-value একসাথে দেখানো
for (const [key, value] of Object.entries(mobile)) {
  console.log(key + ":", value);
}

// array banano hoice
const keys = Object.keys(mobile);

// console.log(keys);
// for (const key of keys) {
//   console.log(key, ":", mobile[key]);
// }
