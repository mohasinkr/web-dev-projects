//program to check whether the inputted year is a leap year

function leapyear_check(year) {
  let flag = false;
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 == 0) {
      flag = true;
    } else {
      flag = false;
    }
    flag=true;
  }
  return flag;
}
let year = prompt("Enter a year:");
let isLeapYear = leapyear_check(year);
console.log(isLeapYear);
