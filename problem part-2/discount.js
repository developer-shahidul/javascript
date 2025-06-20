/***
 * up to 100  : 100
 * more than 100 to 200 :-->90
 * more than 200 -->70
 */
function discountPice(Quantity) {
  let total = 0;
  if (Quantity <= 100) {
    total = Quantity * 100;
  } else if (Quantity <= 200) {
    total = Quantity * 90;
  } else {
    total = Quantity * 70;
  }
  return total;
}
const totalp = discountPice(115);
console.log("Total price:", totalp);
