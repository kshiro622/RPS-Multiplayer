//Initialize Firebase
var config = {
    apiKey: "AIzaSyCrkfu9wikjZg8DiZ-kgHC5mPmI4SQPYbU",
    authDomain: "rps-multiplayer-643af.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-643af.firebaseio.com",
    storageBucket: "rps-multiplayer-643af.appspot.com",
    messagingSenderId: "1002795360267"
};
firebase.initializeApp(config);
// Variable to reference the database
var database = firebase.database();
initialPlayerOne = 'Waiting for Player 1';
initialPlayerTwo = 'Waiting for Player 2';
playerOne = initialPlayerOne;
playerTwo = initialPlayerTwo;
database.ref().on("value", function (snapshot) {
    // If Firebase has a playerOne and playerTwo stored (first case)
    if (snapshot.child("playerOne").exists() && snapshot.child("playerTwo").exists()) {
        // Set the initial variables for playerOne and playerTwo equal to the stored values.
        playerOne = snapshot.val().playerOne;
        playerTwo = snapshot.val().playerTwo;
        // Change the HTML to reflect the initial value
        $('#player-one').html(playerOne);
        $('#player-two').html(playerTwo);
        console.log(playerOne);
        console.log(playerTwo);
    }
    // If Firebase has a playerOne stored (second case)
    else if (snapshot.child("playerOne").exists()) {
        playerOne = snapshot.val().playerOne;
        $('#player-one').html(playerOne);
        $('#player-two').html(playerTwo);
        console.log(playerOne);
        console.log(playerTwo);
    }
    // If firebase has neither player stored (last case)
    else {
        // Keep the initial variables equal to the initial values
        // Change the HTML to reflect the initial value
        $('#player-one').html(playerOne);
        $('#player-two').html(playerTwo);
        console.log(playerOne);
        console.log(playerTwo);
    }
    // If any errors are experienced, log them to console. 
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
// Adds player one and two to the game
$("#add-name").on("click", function () {
    if ((playerOne === initialPlayerOne) && (playerTwo === initialPlayerTwo)) {
        playerOneName = $('#name-input').val().trim();
        database.ref().set({
            playerOne: playerOneName
        });
        //Set value of variable
        playerOne = snapshot.val().playerOne;
        // Log the name of player
        console.log(playerOne);
        // Change the HTML
        $('#player-one').html(snapshot.val().playerOne);
    } else if (playerOne != initialPlayerOne) {
        playerTwoName = $('#name-input').val().trim();
        database.ref().set({
            playerOne: playerOneName,
            playerTwo: playerTwoName
        });
        //Set value of variable
        playerTwo = snapshot.val().playerTwo;
        // Log the name of playerTwo
        console.log(playerTwo);
        // Change the HTML
        $('#player-two').html(snapshot.val().playerTwo);
    } else {
        alert('There are already two players');
    }
});