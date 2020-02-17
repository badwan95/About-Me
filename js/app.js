'use strict';
var userName = prompt('What is your name?');
alert('Well hello there ' + userName + ' ! It\'s nice to meet you on my "About me" web page!');
alert('Please answer the questions with yes or no!');

var enjoyClass = prompt('Do you think that I am enjoying this class?').toLowerCase();
if (enjoyClass === 'yes') {
  alert('Yes! this class is very fun indeed and I\'m enjoying it');
} else if (enjoyClass === 'no') {
  alert('Wrong! I\'m enjoying this class a lot :)');
} else {
  alert('Please answer with a yes or no!');
}
// console.log('Your answer to the first question was ' + enjoyClass);

var havePets = prompt('Do I have a pet?').toLowerCase();
switch (havePets) {
case 'yes':
  alert('Wrong! I dont have a pet but i would like to have one.');
  break;
case 'no':
  alert('That\'s right! I dont have a pet');
  break;
default:
  alert('Please answer with yes or no!');
  break;
}
// console.log('Your answer to the second question was ' + havePets);

var weight = prompt('Do I weight over 70 kilograms? ').toLowerCase();
switch (weight) {
case 'yes':
  alert('No! I\'m just 64 Kilograms');
  break;
case 'no':
  alert('Yep that\'s right, i weight only 64 kilograms');
  break;
default:
  alert('Please answer with a yes or a no');
  break;
}
// console.log('Your answer to the third question was ' + weight);

var height = prompt('Is my height over 170 cm?').toLowerCase();
switch (height) {
case 'yes':
  alert('Yes, my height is 177 cm');
  break;
case 'no':
  alert('No, my height is over 170 cm');
  break;
default:
  alert('Please answer with a yes or a no');
  break;
}
// console.log('Your answer to the fourth question was ' + height);

var grades = prompt('Where my final average grades in university above 80?').toLowerCase();
switch (grades) {
case 'yes':
  alert('Yes, my grade was 80.1! (barely over 80 haha)');
  break;
case 'no':
  alert('No, my grades were above 80');
  break;
default:
  alert('Please answer with a yes or a no');
  break;
}
// console.log('Your answer to the fifth question was ' + grades );
alert('Well it was nice to chat with you, ' + userName + ' ! Hope you enjoy your stay on my website.');


