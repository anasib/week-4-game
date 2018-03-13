$(document).ready(function () {
    var computerGuess = Math.floor(Math.random() * 101 + 19);
    // selects a random number between 19 - 120 to be shown at the start of the game

    $('#randomNumber').text(computerGuess);
    // appending random number to the randomNumber id in the html doc

    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    // setting up random numbers for each jewel between 1 - 12

    var blue = document.getElementById('one');
    var green = document.getElementById('two');
    var red = document.getElementById('three');
    var yellow = document.getElementById('four');
    // storing jewels id in variables from html doc

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    // declaring variables for tallies
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // resets the game and random numbers
    function resetGame() {
        computerGuess = Math.floor(Math.random() * 101 + 19);
        console.log(computerGuess);
        $('#randomNumber').text(computerGuess);
        num1;
        num2;
        num3;
        num4;
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    };

    // adds the wins to the userTotal
    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        resetGame();
    };

    // adds the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        resetGame();
    };

    // click jewelType to accumulate score tally
    function playGame(jewelType, randomScore) {
        $(jewelType).on('click', function () {
            userTotal = userTotal + randomScore;
            console.log("New userTotal: " + userTotal);
            $('#finalTotal').text(userTotal);
            
            //sets win/lose conditions
            if (userTotal == computerGuess) {
                winner();
            }
            else if (userTotal > computerGuess) {
                loser();
            }
        });
    };

    playGame(blue, num1);
    playGame(green, num2);
    playGame(red, num3);
    playGame(yellow, num4);

});