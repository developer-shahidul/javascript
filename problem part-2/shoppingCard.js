const product = [
  { name: "shampo", price: 300, Quantity: 2 },
  { name: "chironi", price: 100, Quantity: 3 },
  { name: "shirt", price: 700, Quantity: 5 },
  { naem: "pant", price: 1200, Quantity: 1 },
];
function totalPurchase(products) {
  let total = 0;
  for (let product of products) {
    const productPrice = product.price * product.Quantity;
    console.log(productPrice);
    total = productPrice + total;
  }
  return total;
}
const shoppingcost = totalPurchase(product);
console.log(shoppingcost);
