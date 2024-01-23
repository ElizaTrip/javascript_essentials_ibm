const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
cards = shuffle(colors.concat(colors));
selectedCards = [];
score = 0;
timeLeft = 30;
gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById("timer");