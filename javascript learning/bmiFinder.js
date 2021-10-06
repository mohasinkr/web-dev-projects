function bmiCalculator(mass, height) {
  //to find the bmi of using mass in kg and height in metres...
  //formula --> BMI = mass/(height)²

  let bmi = mass / Math.pow(height, 2);
  return Math.round(bmi);
}

var mass = 65;
var height = 1.75;

var bmi = bmiCalculator(mass,height);
