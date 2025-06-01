const salary = 25000;
const ifBcs = true;
const height = 6.2;
const hasCar = false;

// if (salary > 2000 && height > 6.8) {
//   console.log("su-------------parto");
// } else {
//   console.log("onno patro khujo");
// }
// && holo 2 ta man oi fullfill korte hobe , sotto hote hobe, nahole else hobe.

// if (salary > 25000 || height > 6.8) {
//   console.log("esho baba kobul");
// } else {
//   console.log("bag toi mukbul");
// }
//  || akta condition mile galei  hobe , akta o na hole else hobe,

//........ More and more condition
// if (salary > 2500 || height > 6.8 || ifBcs == true) {
//   console.log("tmr 14 gust raji");
// } else {
//   console.log("bag toi mukbul");
// }

// if (salary > 2500 && height > 6.8 && ifBcs == true) {
//   console.log("tmr 14 gust raji");
// } else {
//   console.log("bag toi mukbul");
// }

//............. COMPLEX-CONDITION
if ((salary > 25000 && hasCar == true) || ifBcs == true) {
  console.log("tmr 14 gust raji");
} else {
  console.log("bag toi mukbul");
}
