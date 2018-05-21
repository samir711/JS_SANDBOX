/* 
GAME FUNCTION:
- Player must guess a number between min and max
- Players get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answwer if loose
- Let player choose to play again


*/

// Game Values

let min = 1,
  max = 10,
  winningNum = getRandomNum(min,max),
  guessesLeft = 3;



//UI Elements

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and Max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }

});


// Listen for guess
guessBtn.addEventListener('click', function () {

  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate 
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} `, 'red');
  }

  // Check if won
  if (guess === winningNum) {

    // //Game Over - won
    gameOver(true, `${winningNum} is correct, YOU  WIN !`);
    // // Disable input
    // guessInput.disabled = true;

    // // Change border color
    // guessInput.style.borderColor = 'green';

    // // Set message

    // setMessage(`${winningNum} is correct, YOU  WIN !`, 'green');

  } else {

    //Wrong number
    guessesLeft -= 1;


    if (guessesLeft === 0) {
      // Game over - lost

      gameOver(false, `Game Over, you lost. The corrrect number was ${winningNum}`);
      // // Disable input
      // guessInput.disabled = true;

      // // Change border color
      // guessInput.style.borderColor = 'red';

      // // Set message

      // setMessage(`Game Over, you lost. The corrrect number was ${winningNum}`, 'red');

    } else {
      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input

      guessInput.value = '';
      // Tell user its the wrong number.
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left  `, 'red');
    }


  }

});



function gameOver(won, msg) {

  let color;

  won === true ? color = 'green' : color = 'red';
  
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again 

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}

// Get Winning Number

function getRandomNum(min, max) {
  
  let maxNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(maxNumber);
  return maxNumber;
  




}

//Set Messsage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg
}