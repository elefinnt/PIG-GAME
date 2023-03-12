'use strict';

//element selecting :
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initialising the starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling the dice function
btnRoll.addEventListener('click', function () {
  //1. generate a random number between 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check for a rolled 1.
  if (dice !== 1) {
    //add dice to current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore; //CHANGE LATER - DISPLAY AT CURRENT PLAYER AND NOT ALWASY PLAYR 1
  } else {
    //switch to next player
  }
});
