function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }
  const { name, testScore, schoolGrade, isFFamily } = obj;
  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    testScore > 50 ||
    typeof schoolGrade !== "number" ||
    schoolGrade > 30
  ) {
    return "Invalid Input";
  }
  let total = testScore + schoolGrade;
  if (isFFamily) {
    total += 20;
  }
  return total >= 80;
}
const totalMarks = calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
});
console.log(totalMarks);
