const price = [20000, 16000, 50000, 12000, 30000, 100000];
function getMin(numbers) {
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const cheap = getMin(price);
console.log("cheapest one is :", cheap);
// cheapest = sosta ,dam kom
