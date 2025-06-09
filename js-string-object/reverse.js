// const sentence = "i am learning web Dev.";

// const result = ".veD bew gninrael ma i";reverse korle amon ashbe

// let reverse = "";
// for (const letter of sentence) {
//   //   console.log(letter);
//   reverse = letter + reverse;
// }

// console.log(reverse);

// ignore this solution

//2. for loop

// let rev = "";
// let sentence = "i am learning web Dev.";
// for (let i = 0; i < sentence.length; i++) {
//   //     console.log(i);
//   //   console.log(sentence[i]);
//   const letter = sentence[i];
//   rev = letter + rev;
// }
// console.log(rev);

// 3. shortcut
let sentence = "i am learning web Dev.";
const reversed = sentence.split("").reverse().join("");
console.log(reversed);
