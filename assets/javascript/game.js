/* 	Steven Sober
   	07/12/2017
   	Homework-04a
   	game.js */

// This file contains the Javascript for the Crystal Collector game.

var game = {

	// Basic game components:
    goalScore:      0,    
    userScore:      0,
    wins:           0,
    losses:         0,
    crystalValues:  [],

    // Adds scalability if you want to add more crystals to the game or 
    // change the values later.
    numberCrystals:    4,  
    minCrystalValue:   1,
    maxCrystalValue:  12,
    minGoalScore:     19,
    maxGoalScore:    120,

    // At the beginning of a new game, assign values for the goal score and 
    // crystals.  According to the MDN documentation, the usage of Math.random
    // below cannot return the max value, therefore the max value is increased
    // by one.
    startNewGame: function()
    {
    	this.userScore     = 0;
    	this.crystalValues = [];

    	this.goalScore = Math.floor(Math.random() * 
    		 ((maxGoalScore + 1) - minGoalScore) + minGoalScore);
    	console.log(this.goalScore);

    	// Assign values for the crystals.
   		for (var i = 0; i < this.numberCrystals; i++)
   		{
   			this.crystalValues[i] = Math.floor(Math.random() * 
   				 ((maxCrystalScore + 1) - minCrystalScore) + minCrystalScore);
   			console.log(this.crystalValue[i]);
   		}
    },

    // Checks if the guessed letter is in the puzzle word.  If the guess is
    // correct, update the displayArray.  Otherwise, reduce the number of
    // remaining guesses and add the guessed letter to the guessArray.
    // guessChecker: function(userGuess, puzzle)
    // {
    // 	var guessFound = false;

    //     for (var i = 0; i < puzzle.length; i++)
    //     {
    //     	if (userGuess.toLowerCase() === puzzle.charAt(i).toLowerCase())
    //     	{
    //     		game.displayArray[i] = puzzle.charAt(i);
    //     		guessFound = true;

    //     		// If no more dashes are in the array then the game is won!
    //     		if (!game.displayArray.includes("_"))
    //     		{
    //     			game.gamesWon++; 

    //     			game.resetGame();
    //     		}
    //     	}
    //     }

    //     if (guessFound === false)
    //     {
    //     	// If the user has already guessed this letter, do not penalize again.
    //     	if (!this.guessArray.includes(userGuess))
    //     	{
    //     		this.numberGuesses--;
    //     		this.guessArray.push(userGuess);

    //     		// Check to see if there are any guesses left.
    //     		if (this.numberGuesses === 0)
    //     		{
    //     			// Game Over!
    //     			game.resetGame();
    //     		}
    //     	}
    //     }
    // },

    // resetGame: function()
    // {

    // }
};

// VARIABLES
// ==========================================================================
var gameInProgress = false;

// MAIN EXECUTION
// ==========================================================================

// This function is run whenever the user clicks a crystal.
//document.onkeyup = function(event) {

$(".btn").on("click", function() {

	if (gameInProgress === false)
	{
		game.startNewGame();
		gameInProgress = true;
	}

	// Add the current value of the clicked crystal to the user score.
	//var updatedScore = game.userScore + 

	var clickedElement = $(this);

    console.log(clickedElement);
    console.log(clickedElement.attr("value"));

    //$("#user-score-box").text(clickedElement.attr("value"));

	// If the user score equals the goal score, alert that the user has won
	// the game.
	if (game.userScore == game.goalScore)
	{
		alert("You Win!  Let's play again!")
		game.wins++;
		game.startNewGame();
	}


	// If the user score exceeds the goal score, alert that the user has lost
	// the game.
	if (game.userScore > game.goalScore)
	{
		alert("You Lose!  Let's play again!")
		game.losses++;
		game.startNewGame();
	}






 //    // Determines which key was pressed.
 //    var userGuess = event.key;

	// // If the displayArray is empty, choose a word and build the array.
	// if (game.displayArray.length === 0)
	// {
	// 	puzzle = game.selectNewWord();
	// 	console.log("Puzzle: " + puzzle);

	// 	game.arrayBuilder(puzzle);
	// 	console.log("Dashes: " + game.displayArray);
	// }

 //    //Check the guessed letter against the puzzle word.
 //    game.guessChecker(userGuess, puzzle);

	// var html =
 //        "<p>Wins: " + game.gamesWon + "</p>" +
 //        "<p>Current Word: " + game.displayArray + "</p>" +
 //        "<p>Guesses Remaining: " + game.numberGuesses + "</p>" +
 //        "<p>Letters Guessed: " + game.guessArray + "</p>";

 //        // Set the inner HTML contents of the #game div to our html string
 //        document.querySelector("#game").innerHTML = html;
 });
