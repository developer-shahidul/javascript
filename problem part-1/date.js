const today = new Date(); //→ এটা JavaScript-এর Date অবজেক্ট তৈরি করে।//today ভ্যারিয়েবলে বর্তমান দিনের সম্পূর্ণ তারিখ ও সময় সংরক্ষিত থাকবে।
const date = new Date("2062 - 10-19");
console.log(date.getMonth());
console.log(date.getDay);
const speceficDate = new Date(2091, 0, 26);
console.log(speceficDate);
speceficDate.setMonth(10);
console.log(speceficDate);
console.log(speceficDate.toDateString("en-GB"));
console.log(speceficDate.toLocaleDateString("en-GB"));

// unix epoc
