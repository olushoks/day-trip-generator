/************************ DAY TRIP GENERATOR ********************/
// Function that generates RANDOM number
function randomNum() {
  let number = Math.trunc(Math.random() * 9) + 1;
  return number;
}

// DESTINATION Function that returns a randomly genenrated destination
function destination(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
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
    "Marrakech",
  ];
  return destinationsArray[num];
}

// DESTINATION Function that returns a randomly genenrated destination
function restaurant(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
  let restaurantsArray = [
    "Massimo del Gelato",
    "Le Cantine de Meme",
    "Redbird",
    "Al Dawaar",
    "Tordesilhas",
    "Zeughauskeller",
    "The Ledbury",
    "Joop's Place",
    "Buuddakan",
    "Votre Table",
  ];
  return restaurantsArray[num];
}
