// Selecting elements

// Reset Game
const resetGame = document.getElementById("resetGame");

// Name Elements
const namePlayersBtn = document.getElementById("namePlayersBtn");
const nameInput = document.querySelector(".nameInput");
const closeInput = document.querySelector(".close-Input");
const palyer1Input = document.getElementById("palyer1Input");
const palyer2Input = document.getElementById("palyer2Input");
const submit = document.getElementById("submit");

// Rules Elements
const rulesBtn = document.getElementById("rulesBtn");
const rules = document.querySelector(".rules");
const closeRulesBtn = document.querySelector(".close-rules");
const overlay = document.querySelector(".overlay");

// Player 0
const player0El = document.querySelector(".player--0");
const namePlayer0 = document.getElementById("name--0");
const scorePlayer0 = document.getElementById("score--0");
const currentScore0 = document.getElementById("current--0");

// Player 1
const player1El = document.querySelector(".player--1");
const namePlayer1 = document.getElementById("name--1");
const scorePlayer1 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--1");

// Game buttons elements
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdScoreBtn = document.querySelector(".btn--hold");

// Field elemnets
const diceEl = document.querySelector(".dice");

// Rules Functions
function openRules() {
  // Open rules function
  rules.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Close rules function
function closeRules() {
  rules.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Name INPUT
function openNameInput() {
  // Open name input function
  nameInput.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Close rules function
function closeNameInput() {
  nameInput.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Input btn Events
namePlayersBtn.addEventListener("click", openNameInput);
closeInput.addEventListener("click", closeNameInput);
overlay.addEventListener("click", closeNameInput);

//Rules btn events
rulesBtn.addEventListener("click", openRules);
closeRulesBtn.addEventListener("click", closeRules);
overlay.addEventListener("click", closeRules);

// Starting conditions
let scoresArr, activePlayer, currentScore, playing;
init();

// Init function
function init() {
  scoresArr = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer0.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
}
