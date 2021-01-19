/************************ DAY TRIP GENERATOR ********************/
// Function that generates RANDOM number
function randomNum() {
  let number = Math.trunc(Math.random() * 9) + 1;
  return number;
}

// DESTINATION Function that returns a randomly genenrated destination
function destination(num) {
  let destinationsArray = [
    "Milan",
    "Paris",
    "Los Angeles",
    "Dubai",
    "Sao Paolo",
    "New York",
    "Durban",
    "London",
    "Zurich",
    "Marekesh",
  ];
  return destinationsArray[num];
}
