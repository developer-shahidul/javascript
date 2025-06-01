/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const marks = 70;

if (marks >= 90 && marks <= 100) {
  const grade = "A";
  console.log(grade);
}

// else if (marks >= 80 && marks <= 89) {
//   const grade = "B";
//   console.log(grade);
// }
// else if (marks >= 70 && marks <= 79) {
//   const grade = "C";
//   console.log(grade);
// }
// else if (marks >= 60 && marks <= 69) {
//   const grade = "D";
//   console.log(grade);
// }
// else if( marks >=0 && marks <=59) {
//   const grade ="F"
//   console.log(grade)
// }

grade =
  marks >= 90 && marks <= 100
    ? "A"
    : marks >= 80 && marks <= 89
    ? "B"
    : marks >= 70 && marks <= 79
    ? "C"
    : marks >= 60 && marks <= 69
    ? "D"
    : marks >= 0 && marks <= 59
    ? "F"
    : "Invalid";

console.log(grade);
