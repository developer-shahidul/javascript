/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (let i = 55; i < 85; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

// while
let n = 55;
while (n < 85) {
  n++;
  if (n % 2 === 0) {
    continue;
  }

  if (n % 5 === 0) {
    continue;
  }
  console.log(n);
}
