'use strict';
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.between').textContent);

// document.querySelector('.number').textContent = 50;
// // console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.score').textContent = 80;

// document.querySelector('.guess').value = 50;

// console.log(document.querySelector('.guess').value);

let secNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;
// console.log(secNum);
const displayMessagge = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = 'Correct Number';

  //If guess doesnt have value
  if (!guess) {
    //   document.querySelector('.message').textContent = 'Give a Number Human'
    displayMessagge('Give a Number Human');
  }
  //if value is equal to secNum
  else if (guess === secNum) {
    // document.querySelector('.message').textContent = 'Yesss Correct Number';
    displayMessagge('Yesss Correct Number');
    if (score > Highscore) {
      Highscore = score;
      document.querySelector('.highscore').textContent = Highscore;
    }

    //tuyrns the background color green and the secNum value width
    document.querySelector('.number').textContent = secNum;
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secNum) {
    if (score > 0) {
      //   document.querySelector('.message').textContent =
      //     guess > secnum ? 'Too High' : 'Too Low';

      displayMessagge(guess > secNum ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'Game Over';
      displayMessagge('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
  //value is less than
  //   else if (guess < secNum) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Number is too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
  //   //value is greater than
  //   else if (guess > secNum) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Number is too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over';
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessagge('Start guessing...');
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
