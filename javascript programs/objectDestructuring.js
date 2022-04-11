const person = { name: "MKR", age: 21, sex: "MALE" };

const { name:myname, age:myage, sex:mysex } = person;

console.log(
  `Name of the user : ${myname}\n Age of the user: ${myage} \n Sex of the user: ${mysex}`
);
console.log();

//or

const robot = { name: "robo007", age: 1, sex: "other" };

const { name,age,sex} = robot;

console.log(
  `Name of the robo : ${name}\n Age of the robo: ${age} \n Sex of the robo: ${sex}`
);


