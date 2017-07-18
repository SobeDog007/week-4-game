/* 	Steven Sober
   	07/12/2017
   	Homework-04a
   	game.js */

// This file contains the Javascript for the Crystal Collector game.

// OBJECTS
// ===========================================================================

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

    	// Assign the value for the goal score.
    	this.goalScore = Math.floor(Math.random() * 
    		((this.maxGoalScore + 1) - this.minGoalScore) + 
    		  this.minGoalScore);

    	console.log(this.goalScore);

    	// Assign values for the crystals.
   		for (var i = 0; i < this.numberCrystals; i++)
   		{
   			this.crystalValues[i] = Math.floor(Math.random() * 
   				((this.maxCrystalValue + 1) - this.minCrystalValue) + 
   				  this.minCrystalValue);

   			console.log(this.crystalValues[i]);
   		}
    },
};

// VARIABLES
// ===========================================================================
var gameInProgress = false;

// MAIN EXECUTION
// ===========================================================================

$(document).ready(function() {

	// This function is run whenever the user clicks the "Start!" button.
	$("#start-button").on("click", function() {

		gameInProgress = true;

		game.startNewGame();

		// Add the crystal values to the button elements.
		$("#button-1").attr('data-number', game.crystalValues[0]);
		$("#button-2").attr('data-number', game.crystalValues[1]);
		$("#button-3").attr('data-number', game.crystalValues[2]);
		$("#button-4").attr('data-number', game.crystalValues[3]);

		// Display the current score values and win/loss record.
		$("#goal-score-box").html(game.goalScore);
		$("#user-score-box").html(game.userScore);
		$("#wins").html("Wins: " + game.wins);
		$("#losses").html("Losses: " + game.losses);
	});	

	// This function is run whenever the user clicks a crystal button button.
	$(".crystal").on("click", function() {

		// If the user clicks a crystal button before starting the game,
		// nothing happens.
		if (game.goalScore !== 0 && gameInProgress === true)
		{
			// Add the current value of the clicked crystal to the user score.
			//var updatedScore = game.userScore + 
			var clickedElement = $(this);

		    //console.log(clickedElement);
		    console.log(clickedElement.attr("data-number"));
		    game.userScore += parseInt(clickedElement.attr("data-number"));

		    $("#user-score-box").html(game.userScore);

			// If the user score equals the goal score, alert that the user has won
			// the game.
			if (game.userScore === game.goalScore)
			{
				alert("You Win!  Click Start! to play again!");
				game.wins++;
				$("#wins").html("Wins: " + game.wins);

				gameInProgress = false;
			}

			// If the user score exceeds the goal score, alert that the user has lost
			// the game.
			if (game.userScore > game.goalScore)
			{
				alert("You Lose!  Click Start! to play again!");
				game.losses++;
				$("#losses").html("Losses: " + game.losses);

				gameInProgress = false;
			}
		}
	});
});
