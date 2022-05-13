// Number Guessing Game

// Start Game
// Play Game
// End Game

function startGame() {
    // Introduction
    alert(
      "Welcome to the Guessing Game! You'll be guessing a random whole number. \nDo you have what it takes?\n\n[Enter] to continue."
    );
  
    // Setup
    // Determine Difficulty
    let difficulty = determineDifficulty();
    let minNum = 1;
    let maxNum;
    let score = 0;
  
    if (difficulty == "easy") {
      maxNum = 10;
    } else if (difficulty == "medium") {
      maxNum = 100;
    } else {
      maxNum = 1000;
    }
  
    // Generate Answer
    let answer = randomNumberInRange(minNum, maxNum);
  
    console.log(answer, difficulty);
  
    // Repeat Each Turn or Game Play as Needed
    playGame();
  
    // End Game with option of playing again
    endGame();
  
    // FUNCTIONS
  
    function playGame() {
      score++;
  
      let guess = prompt(
        `Type a number between ${minNum} and ${maxNum}:\n\n[Enter] to continue.`
      ).toLowerCase();
  
      if (guess == "quit") {
        // stop game
        alert("Goodbye!");
      } else {
        guess = parseInt(guess);
  
        // Check for a valid number, evaluate is it is
        if (isNaN(guess)) {
          // Ask for correct input
          alert(`${guess} is not a valid number. Try again.`);
        } else {
          // Evaluate the valid input
          evaluateGuess(guess, answer);
        }
  
        if (guess !== answer) {
          playGame();
        }
      }
    }
  
    function endGame() {
      let playAgain = prompt(
        `Nice! Your score was ${score}. \n\nWould you like to play again?\n\nType ['yes'] to play again.\n[Enter] to continue.`
      ).toLowerCase();
  
      if (playAgain == "yes") {
        startGame();
      } else {
        alert("Goodbye!");
      }
    }
  }
  
  function evaluateGuess(guess, answer) {
    if (guess > answer) {
      alert(`${guess} is too high!`);
    } else if (guess < answer) {
      alert(`${guess} is too low!`);
    } else {
      alert(`${guess} is correct!`);
    }
  }
  
  function determineDifficulty() {
    let difficulty = prompt(
      "Type your selected difficulty:\n\neasy\nmedium\nhard\n\n[Enter] to continue."
    ).toLowerCase();
    let difficultyPresets = ["easy", "medium", "hard"];
  
    if (difficultyPresets.includes(difficulty)) {
      return difficulty;
    } else {
      alert("You didn't provide a valid difficulty. Select again.");
      return determineDifficulty();
    }
  }
  
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  startGame();