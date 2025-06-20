/**
 *     chair  ---> 3  cft
 *     table -----> 10 cft
 *     bed  ------> 50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;
}
const wood = woodQuantity(2, 1, 4);
console.log("wood Neded :", wood);

// homework
function shoppingcost(shartQuantity, pantQuantity, showsQuantity) {
  const shirt = 500;
  const pant = 300;
  const shows = 900;
  const totalShartCost = shirt * shartQuantity;
  const totalPantCost = pant * pantQuantity;
  const totalShowsCost = shows * showsQuantity;
  const totalCost = totalShartCost + totalPantCost + totalShowsCost;
  return totalCost;
}
const totalQuantity = shoppingcost(5, 5, 5);
console.log("my shopping cost :", totalQuantity);
