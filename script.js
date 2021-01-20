/************************ DAY TRIP GENERATOR ********************/
// Function that generates RANDOM number
function randomNum() {
  let number = Math.trunc(Math.random() * 9) + 1;
  return number;
}

// DESTINATION Function that returns a randomly genenrated destination
function destination(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
  const destinationsArray = [
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

// RESTAURANNT Function that returns a randomly genenrated destination
function restaurant(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
  const restaurantsArray = [
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

// TRANSPORTATION Function that returns a randomly genenrated destination
function transport(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
  const meansOfTransport = [
    "foot",
    "teleport",
    "flyinig carpet",
    "cartwheel",
    "carjacking",
    "foot",
    "teleport",
    "flyinig carpet",
    "cartwheel",
    "carjacking",
  ];
  return meansOfTransport[num];
}

// ENTERTAINMENT Function that returns a randomly genenrated destination
function entertainment(num) {
  // num parameter is a randomly generated number by calling the randomnum function as argument
  const entertainmentArray = [
    "Open Mic Night",
    "Circus",
    "Magic Show",
    "Food Festival",
    "Carnival",
    "Sporting Event",
    "Pet Show",
    "Concert",
    "Book Reading Event",
    "Movies",
  ];
  return entertainmentArray[num];
}

// function that displays trip summary to member in a confirm modal box
function summary(name, dest, rest, trans, ent) {
  let summaryPhrase = `${name},\nBelow is the summary of your day trip: \n\nYour destiniation is ${dest}.\nYour restaurant is ${rest}.\nYour mode of transportation is ${trans}.\nYour entertainment option is ${ent}.\n\nClick 'OK' to accept this selection OR 'Cancel' for another random selection`;
  return summaryPhrase;
}

// function that displays trip details to member in the log after the summary is accepted
function details(name, dest, rest, trans, ent) {
  let detailsPhrase = `Dear ${name},\nWe are so excited to be able to plan your upcoming day trip, as a leader in the hospitality industry, we are committed to giving our clients a top notch experience that ensures value for money.\n\nKindly find below your trip details:\n\nWe have carefully selected ${dest} because of the great atmosphere it offers during the fall. You would love to return again!\nFor your feediing, there is no other place better than the acclaimed ${rest}, the food tastes so good it is rumored to have put many private chefs out of work😂.\nOn trips as this, transportation is key, always remember you can go anywhere by ${trans}.\n Lastly, your trip will not be complete without entertaining yourself by attending a ${ent}.\n\nPlease let us know if you need further clarification.\nYour dayTrip Team!`;
  return detailsPhrase;
}

function reselect(option) {
  if (option == 1) {
  } else if (option == 2) {
  } else if (option == 3) {
  } else if (option == 4) {
  }
}

alert(`Welome to your DAY TRIP GENERATOR`);
let name = prompt(`Can I have you name please?`, "Tripper...🤪");
alert(`Thanks ${name}.
Just a moment while I customize your day trip...`);

let destinationChoice = destination(randomNum());
let restaurantChoice = restaurant(randomNum());
let transportChoice = transport(randomNum());
let entertainimentChoice = entertainment(randomNum());

let tripSummary = summary(
  name,
  destinationChoice,
  restaurantChoice,
  transportChoice,
  entertainimentChoice
);

let agree = confirm(tripSummary);

let tripDetails = details(
  name,
  destinationChoice,
  restaurantChoice,
  transportChoice,
  entertainimentChoice
);

// if user agrees to the initial random selection
if (agree) {
  alert(
    `Thanks for using DayTrip Genenerator, your trip details will be sent to your console.  Check in 1 second`
  );
  console.log(tripDetails);
} else {
  // if user does not agree to the initial selection, they can choose what they'll like to change
  let option = prompt(
    `Which would you like a different option on?\n\n1] Enter 1 for DESTINATON\n2] Enter 2 for RESTAURANT\n3] Enter 3 for mode of TRANSPORTATION\n4] Enter 4 for ENTERTAINMENT\n5] Enter 5 for ALL`
  );
}

/*
let tripSummary = `${name},\nBelow is the summary of your day trip: \n\nYour destiniation is ${destinationChoice}.\nYour restaurant is ${restaurantChoice}.\nYour mode of transportation is ${transportChoice}.\nYour entertainment option is ${entertainimentChoice}.\n\nClick 'OK' to accept this selection OR 'Cancel' for another random selection`;
*/
/*
let tripDetails = `We are so excited to be able to plan your upcoming day trip, as a leader in the hospitality industry, we are committed to giving our clients a top notch experience that ensures value for money.\n\nKindly find below your trip details:\n\nWe have carefully selected ${destinationChoice} because of the great atmosphere it offers during the fall. You would love to return again!\nFor your feediing, there is no other place better than the acclaimed ${restaurantChoice}, the food tastes so good it is rumored to have put many private chefs out of work😂.\nOn trips as this, transportation is key, always remember you can go anywhere by ${transportChoice}.\n Lastly, your trip will not be complete without entertaining yourself by attending a ${entertainimentChoice}.\n\nPlease let us know if you need further clarification.\nYour dayTrip Team!`;
*/
