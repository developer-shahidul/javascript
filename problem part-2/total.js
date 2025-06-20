const product = [
  { name: "shampo", price: 300 },
  { name: "chironi", price: 100 },
  { name: "shirt", price: 700 },
  { naem: "pant", price: 1200 },
];
function getShoppingTotal(products) {
  let total = 0;
  for (let product of products) {
    total = total + product.price;
  }
  return total;
}
const total = getShoppingTotal(product);
console.log("total price :", total);

// akadik Object ke jug ba concat kora
