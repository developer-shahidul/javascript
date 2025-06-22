function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  // Average time calculation
  let total = 0;
  for (let interviewTime of waitingTimes) {
    total += interviewTime;
  }
  const avg = Math.round(total / waitingTimes.length);
  const serialBefore = serialNumber - 1;
  const interviewDone = waitingTimes.length;
  const remaining = serialBefore - interviewDone;
  const watetime = remaining * avg;
  return watetime;
}
const avg = waitingTime([3, 5, 7, 11, 6], 10);
console.log(avg, "m");
