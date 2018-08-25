// Write your code in this file!
function scuberGreetingForFeet(number) {
  if (number < 400) {
    return 'This one is on me!'
  } else if (number > 2500) {
    return 'No can do.'
  } else if (number > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city) {
  let response = '';

  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.'

  return response;
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
  }
  return response;
}
