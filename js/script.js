

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = Math.random();

// DOCUMENT READY FUNCTION BELOW

$("button").click(function() {
  $("#userChoice").text($("#input").val());
});

$("#choices").click (function(){
    $("#computerChoice").text ($("#input").val());
     if (randomNumber > .33)
    {
        computerChoice = "rock";
    }
       if (randomNumber > .66)
    {
        computerChoice = "scissors";
    }
       if (randomNumber > .33)
    {
        computerChoice = "paper";
    }
    else{
        randomChoice = "";
    }
    
    
    
});