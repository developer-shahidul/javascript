/**
 * discount price
 *first-100 ---> 100
  101 to 200 --->90
  above 200----->70
 */
function layeardTotalDiscount(Quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (Quantity <= 100) {
    const total = Quantity * first100Price;
    return total;
  } else if (Quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = Quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = Quantity - 200;
    const remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
const total = layeardTotalDiscount(200);
console.log(total);

//remaining ==> baki
// if (Quantity <= 100)

//     গল্প: আপনি ১০০ বা তার কম শার্ট কিনছেন।

//     হিসাব: দোকানদার সরাসরি আপনার শার্টের সংখ্যাকে ১০০ দিয়ে গুণ করে মোট দাম বের করবে।

//         মোট দাম = (শার্টের সংখ্যা) × ১০০

// else if (Quantity <= 200)

//     গল্প: আপনি ১০০টির বেশি কিন্তু ২০০ বা তার কম শার্ট কিনছেন (যেমন: ১৫০টি)।

//     হিসাব: দোকানদার হিসাবটা দুই ধাপে করবে:

//         প্রথম ১০০টি শার্টের দাম: ১০০ × ১০০ = ১০,০০০ টাকা (এটা ফিক্সড)।

//         অতিরিক্ত শার্টের দাম: আপনি ১৫০টি শার্ট কিনলে অতিরিক্ত শার্ট হলো ১৫০ - ১০০ = ৫০ টি। এই ৫০টি শার্টের দাম হবে ৯০ টাকা করে। ৫০ × ৯০ = ৪,৫০০ টাকা।

//         মোট দাম: ১০,০০০ + ৪,৫০০ = ১৪,৫০০ টাকা।

// else

//     গল্প: আপনি ২০০টিরও বেশি শার্ট কিনছেন (যেমন: ২৫০টি)।

//     হিসাব: দোকানদার হিসাবটা তিন ধাপে করবে:

//         প্রথম ১০০টি শার্টের দাম: ১০০ × ১০০ = ১০,০০০ টাকা (ফিক্সড)।

//         পরবর্তী ১০০টি শার্টের দাম: ১০০ × ৯০ = ৯,০০০ টাকা (ফিক্সড)।

//         সব শেষের অতিরিক্ত শার্টের দাম: আপনি ২৫০টি শার্ট কিনলে, ২০০-এর পর অতিরিক্ত শার্ট হলো ২৫০ - ২০০ = ৫০ টি। এই ৫০টি শার্টের দাম হবে ৭০ টাকা করে। ৫০ × ৭০ = ৩,৫০০ টাকা।

//         মোট দাম: ১০,০০০ + ৯,০০০ + ৩,৫০০ = ২২,৫০০ টাকা।

/*************
 * 
 * 
 * 
 * 
 * 
 * Quantity বক্সের মধ্যে 150 সংখ্যাটি রাখা হতো।

ফাংশন চেক করতো: if (150 <= 100) -> এটি মিথ্যা (false)।

তাই কোড if ব্লক বাদ দিয়ে পরের else if ব্লকে চলে যেত।

সেখানে সে চেক করতো: if (150 <= 200) -> এটি সত্য (true)।

এখন, এই else if ব্লকের ভেতরে, Quantity-র মান হলো 150।
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
//  * 
// //  */
// function layeardTotalDiscount(Quantity) {
//   const rate1 = 100;
//   const rate2 = 85;
//   const rate3 = 70;
//   if (Quantity <= 100) {
//     const total = rate1 * 100;
//     return total;
//   } else if (Quantity <= 200) {
//     const first100Price = rate2 * 100;
//     const remainingQuantity = Quantity - 100;
//     const remainingTotal = remainingQuantity * 85;
//     const total = first100Price + remainingTotal;
//     return total;
//   } else {
//     const first100Price = rate3 * 100;
//     const second100Price = second100Price * 85;
//     const remainingQuantity = Quantity - 200;
//     const remainingTotal = remainingQuantity * 70;
//     const total = first100Price;
//   }
// }
// const total = layeardTotalDiscount(200);
// console.log(total);
