// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let ride;
  if (someValue <= 400) {
    ride = 'This one is on me!';
  } else if (someValue < 2499) {
    ride = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    ride = 'No can do.'
  }
  return ride
}

function ternaryCheckCity(destination) {
  let response;
  destination === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response
}
