const secureBooking = function () {
  let passengerCount = 0;

  return () => {
    passengerCount++;
    console.log(`The new Passenger count is ${passengerCount}`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

function adder(x) {
  return function (y) {
    return x + y;
  };
}

const add10 = adder(5);
const add20 = adder(10);
console.log(add10(10));
console.log(add20(20));
