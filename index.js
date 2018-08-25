// Write your code in this file!

// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.

function scuberGreetingForFeet(someValue) {
  if (someValue <= 300){
    return 'This one is on me!'
  }
  else if (someValue >= 2500) {
    return 'No can do.'
  }
  else {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city) {
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.'
    break;
    case 'not as generous' :
      return 'Thank you.';
    break;
    default:
      return 'Bye.'

  }
}

// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.
