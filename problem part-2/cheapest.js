const phones = [
  { name: "samsung", price: 80000, camera: "12mp", color: "black" },
  { name: "Apple", price: 200000, camera: "12mp", color: "black" },
  { name: "Xiomi", price: 20000, camera: "12mp", color: "black" },
  { name: "realme", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 22000, camera: "12mp", color: "black" },
  { name: "Walton", price: 17000, camera: "12mp", color: "black" },
];
function getCheapestPhone(phones) {
  let min = phones[0];
  for (let phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);
