//simple js code that calculates the days,weeks and months 
// we have left if we live till 90 years.
function  lifeInWeeks(age){
    let rem_age = 90-age;
    let days = 365*rem_age;
    let weeks = 52*rem_age;
    let months = 12*rem_age;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left"); 
  }
  
  lifeInWeeks(52);