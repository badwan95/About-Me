'use strict';
var userName = prompt('What is your name?');
var userScore = 0;
alert('Well hello there ' + userName + ' ! It\'s nice to meet you on my "About me" web page!');
alert('Please answer the questions with yes/no or y/n !');
function enjoyClass() {
  var enjoyClass = prompt('Do you think that I am enjoying this class?').toLowerCase();
  if (enjoyClass === 'yes' || enjoyClass === 'y') {
    alert('Yes! this class is very fun indeed and I\'m enjoying it');
    userScore = userScore + 1;
  } else if (enjoyClass === 'no' || enjoyClass === 'n') {
    alert('Wrong! I\'m enjoying this class a lot :)');
  } else {
    alert('Please answer with a yes or no!');
  }
  console.log('Your answer to the first question was ' + enjoyClass);
}
enjoyClass();

function havePets() {
  var havePets = prompt('Do I have a pet?').toLowerCase();
  switch (havePets) {
  case 'yes':
  case 'y':
    alert('Wrong! I dont have a pet but i would like to have one.');
    break;
  case 'no':
  case 'n':
    alert('That\'s right! I dont have a pet');
    userScore = userScore + 1;
    break;
  default:
    alert('Please answer with yes or no!');
    break;
  }
  console.log('Your answer to the second question was ' + havePets);
}
havePets();

function weight() {
  var weight = prompt('Do I weight over 70 kilograms? ').toLowerCase();
  switch (weight) {
  case 'yes':
  case 'y':
    alert('No! I\'m just 64 Kilograms');
    break;
  case 'no':
  case 'n':
    alert('Yep that\'s right, i weight only 64 kilograms');
    userScore = userScore + 1;
    break;
  default:
    alert('Please answer with a yes or a no');
    break;
  }
  console.log('Your answer to the third question was ' + weight);
}
weight();

function height() {
  var height = prompt('Is my height over 170 cm?').toLowerCase();
  switch (height) {
  case 'yes':
  case 'y':
    alert('Yes, my height is 177 cm');
    userScore = userScore + 1;
    break;
  case 'no':
  case 'n':
    alert('No, my height is over 170 cm');
    break;
  default:
    alert('Please answer with a yes or a no');
    break;
  }
  console.log('Your answer to the fourth question was ' + height);
}
height();

function grades() {
  var grades = prompt('Were my final average grades in university above 80?').toLowerCase();
  switch (grades) {
  case 'yes':
  case 'y':
    alert('Yes, my grade was 80.1! (barely over 80 haha)');
    userScore = userScore + 1;
    break;
  case 'no':
  case 'n':
    alert('No, my grades were above 80');
    break;
  default:
    alert('Please answer with a yes or a no');
    break;
  }
  console.log('Your answer to the fifth question was ' + grades );
}
grades();
function favNumber() {
  var favNumber = prompt('From 0 to 10, which number do you think is my favorite?');
  favNumber = Number(favNumber);
  var numberTries = 0;

  for (numberTries = 0; numberTries < 3; numberTries++) {

    if (favNumber === 6) {
      alert('Thats right! my favorite number is 6');
      userScore = userScore + 1;
      break;
    } else if (favNumber === 0 || favNumber === 1 || favNumber === 2 || favNumber === 3 || favNumber === 4 || favNumber === 5) {
      alert('That number is too low!');
      favNumber = prompt('From 0 to 10, which number do you think is my favorite?');
      favNumber = parseInt(favNumber);
    } else if (favNumber === 7 || favNumber === 8 || favNumber === 9 || favNumber === 10) {
      alert('That number is too high!');
      favNumber = prompt('From 0 to 10, which number do you think is my favorite?');
      favNumber = parseInt(favNumber);

    } else if (favNumber > 10 || favNumber < 0 || isNaN(favNumber) === true) {
      alert('This is not a number between 0 and 10!');
      favNumber = prompt('Please put a number between 0 and 10!');
      favNumber = parseInt(favNumber);
    }
  }
  if (numberTries === 3) {
    alert('You got the answers all wrong! the right answer was 6!');
  }
}
favNumber();

function favGames() {
  var favGames = ['dota', 'csgo', 'fifa', 'witcher'];
  var gameGuess = prompt('Name one of my favorite video games?');
  var rightGuess = 0;
  for (var gameAttempts = 0; gameAttempts < 5; gameAttempts++) {
    for (var i = 0; i < favGames.length; i++) {
      if (gameGuess === favGames[i]) {
        rightGuess = 1;
      }
    }
    if (rightGuess === 1) {
      userScore = userScore + 1;
      alert('That\'s right! ' + gameGuess + ' is one of my favorite games!');
      break;
    }
    gameGuess = prompt('Wrong guess, try another game!');
  }
  alert('My favorite games are: ' + favGames[0] + ', ' + favGames[1] + ', ' + favGames[2] + ', ' + favGames[3] + '.');
}
favGames();
alert('You scored ' + userScore + ' Out of 7!');
alert('Well it was nice to chat with you, ' + userName + ' ! Hope you enjoy your stay on my website.');




