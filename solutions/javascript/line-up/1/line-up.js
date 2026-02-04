//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,number) => {
  let adding = 'th'
  let lastDigit = number.toString().slice(-1);
  let lastTwoDigit = number.toString().slice(-2);
  if (lastDigit == 1) {
    adding = 'st'
  }else if (lastDigit == 2) {
    adding = 'nd'
  }else if (lastDigit == 3) {
    adding = 'rd'
  }
  if (lastTwoDigit == 11 || lastTwoDigit == 12 || lastTwoDigit == 13 ) {
    adding = 'th'
  }
  return name + ', you are the ' + number + adding + ' customer we serve today. Thank you!'
};
