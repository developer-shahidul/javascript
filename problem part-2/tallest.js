// boro abong suto sonka
const height = [65, 67, 75, 74, 49, 85, 98];
function getMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const max = getMax(height);
console.log("max value is:", max);

// home work

const old = [65, 67, 75, 74, 49, 85, 98];
function getMin(numbers) {
  let min = old[6];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const min = getMin(old);
console.log("min value is :", min);
