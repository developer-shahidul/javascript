// # js-problems-part2-practice-tasks

// ### Task -1:
// Find the lowest number in the array below.
// `const heights2 = [167, 190, 120, 165, 137];`

const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(number) {
  let min = number[0];
  for (let num1 of number) {
    if (num1 < min) {
      min = num1;
    }
  }
  return min;
}
const lowestNum = lowestNumber(heights2);
console.log(lowestNum);

// ---

/* ### Task -2: 
Find the friend with the smallest name.

`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];` */
const allNames = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallestNames(names) {
  let smallest = names[0];
  for (let name of names) {
    if (name.length < smallest.length) {
      smallest = name;
    }
  }
  return smallest;
}
const smallName = smallestNames(allNames);
console.log(" smallest nam :", smallName);
/*
### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
 */

function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
  const LaptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalLaptopPrice = laptopCount * LaptopPrice;
  const totalTablePrice = tabletCount * tabletPrice;
  const totalMObilePrice = mobileCount * mobilePrice;
  const totalCost = totalLaptopPrice + totalMObilePrice + totalTablePrice;
  return totalCost;
}
const totalCost = calculateElectronicsBudget(5, 9, 4);
console.log("totalCost :", totalCost);

/*
### Task-4: 

You are `given an array of phone objects`, each containing information about the `model,
 brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice`
 that takes this `array as input` and returns the `average price of phone`.

**Input**



        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];

 */
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(AllPhones) {
  let total = 0;
  for (let phone of AllPhones) {
    total = total + phone.price;
  }
  const phonePriceAvg = total / phones.length;
  return phonePriceAvg;
}

const AvgPrice = findAveragePhonePrice(phones);
console.log(AvgPrice);

/*
### Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience 
then adding the result to the starting salary. Now calculate is the total salary has to be provided by
 the company in a month.
```
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
```
 */

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function calculateTotalMonthlySalary(employeslist) {
  let total = 0;
  for (let employees of employeslist) {
    const totalIncrement = employees.experience * employees.increment;
    const currentSalary = totalIncrement + employees.starting;
    total += currentSalary;
    console.log("totalIncremen :", totalIncrement);
    console.log("currentSalary :", currentSalary);
  }
  return total;
}

const totalManthExpense = calculateTotalMonthlySalary(employees);

console.log("Total monthly salary:", totalManthExpense);
