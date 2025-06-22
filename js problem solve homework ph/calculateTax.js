function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    typeof expenses !== "number" ||
    income < 0 ||
    expenses < 0 ||
    income < expenses
  ) {
    return "Invalid Input";
  }
  const profit = income - expenses;
  const tax = profit * 0.2;
  return tax;
}
const totalTax = calculateTax(10000, 3000);
console.log(totalTax);
