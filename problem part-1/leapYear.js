/***
 *            LEAPYEAR
 *
 * simple logic / 100% true na
 *    year will be leap year if the year is divisible  the 4
 */
function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leap = isLeapYear(1995);
console.log(leap);

/**
 *1. those year that is not divisible by 100 and if the year is divisible by 4:
 *   then it will be a leap year.
 *2..if the year is divisible by 400 ,then it is a leap year
 **3..else it is not a leap year
 ***/

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const leapYear = isLeapYear2(2024);
const leapYear2 = isLeapYear2(2100);
const leapYear3 = isLeapYear2(1900);
const leapYear4 = isLeapYear2(2052);
console.log(leapYear, leapYear2, leapYear3, leapYear4);
