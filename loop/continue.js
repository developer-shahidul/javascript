// continue ===> skip rest of the code for this iteration
// break ====> I am done with this loop. loop end.

// for (let n = 1; n < 10; n++) {
//   if (n % 2 === 1) {
//     continue;
//   }

//   console.log(n);
// }
// while
let n = 0;
while (n < 50) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }

  console.log(n);
}

// যদি হয়, তাহলে continue; দিয়ে লুপ স্কিপ করে নিচের console.log(n) অংশে না গিয়ে পরবর্তী সংখ্যায় চলে যাচ্ছে।

// অর্থাৎ শুধুমাত্র বিজোড় সংখ্যা স্কিপ হচ্ছে, আর জোড় সংখ্যা (even) গুলো প্রিন্ট হচ্ছে। niche ultu hobe

// for (let n = 1; n < 10; n++) {
//   if (n % 2 === 0) {
//     continue;
//   }
//   console.log(n);
// }
