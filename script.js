// Snake wins against Water.
// Water wins against Gun.
// Gun wins against Snake.

alert('Welcome to Snake Water Gun Game.');
alert('Game guides : Snake wins against Water, Water wins against Gun, Gun wins against Snake, if your input not match to this three... your chance will be wasted...');
alert('Start Game');


let yourScore = 0;
let computerScore = 0;

for (let i = 0; i < 10; i++) {
  let array = ['snake', 'water', 'gun'];

  let randomArray = array[Math.floor(Math.random() * array.length)];
  alert(randomArray)

  let userChoice = prompt('Choose B/W Water, Gun and Snake');

  if (randomArray == userChoice) {
    alert('DRAW');
  }
  else if ((randomArray == 'snake' && userChoice == 'water') ||
    (randomArray == 'water' && userChoice == 'gun') ||
    (randomArray == 'gun' && userChoice == 'snake')) {
    computerScore += 1;
    alert('Computer WIN');
    alert('Computer Score is ' + computerScore + ' & Your Score is ' + yourScore);
  }
  else if (!array.includes(userChoice)) {
    alert('Please select Water, Gun, or Snake');
  }
  else {
    yourScore += 1;
    alert('You WIN');
    alert('Computer Score is ' + computerScore + ' & Your Score is ' + yourScore);
  }
}

if (computerScore < yourScore) {
  alert(`WINNER WINNER CHICKEN DINNER, You WIN with ${yourScore} score.`);
  alert(`Overview :   Your Score is ${yourScore}`);
} else {
  alert(`You Lose, Computer WIN with ${computerScore} score.`);
  alert(`Overview :  Computer Score is ${computerScore}`);
}