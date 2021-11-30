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
