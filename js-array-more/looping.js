/***
 *       looping ......... tecniq
 *      for loop
 *      while loop
 *      do while > ignore
 *       for of  --> array loop korar jonno
 *       for in ---->object loop korar jonno
 */

// const friends = [ "rahim","karim", "dalim", "kolimulla", "solimulla"];
// for (const friend of friends) {
//   //   console.log(friend);
// }
//   console.log(friends);

// for (let i = 0; i < 8; i++) {
//   console.log(i);
//   console.log(friends[i]);
// }
// judi for loop aer sorbuccho sonkha onujayi upadan dewa na thake taile undefind dekhabe;

const friends = ["rahim", "karim", "dalim", "kolimulla", "solimulla"];
for (let i = 0; i < friends.length; i++) {
  //   console.log(i);
  //   console.log(friends[i]);
}

// array aer modde koita upada abong koto index porjonto ace

const numbers = [15, 5, 57, 44, 4, 7, 77, 5, 7, 7, 4, 788, 7];
for (let i = 0; i < numbers.length; i++) {
  //   console.log(i);
  //   console.log(numbers[i]);
}

// while
let i = 0;

while (i < numbers.length) {

  console.log(i);
  console.log(numbers[i]);
    i++;
}
