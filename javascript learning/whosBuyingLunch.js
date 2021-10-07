// program to return a random element in an array!

function whos_buying_lunch() {
  var members = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  var len = members.length;
  console.log(members[Math.floor(Math.random() * len)]);
}

whos_buying_lunch();
