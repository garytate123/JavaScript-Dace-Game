function player1() {
    p1 = prompt("Enter player 1's name");
    document.querySelector(".playerOne").innerHTML = "Player 1 - " + p1;
}
   
function player2 () {
    p2 = prompt("Enter player 2's name");
    document.querySelector(".playerTwo").innerHTML = "player 2 - " + p2;
}
    
        
function playGame() { 
    var randonNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randonNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);
    
    // This is a shorter way to write the code
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randonNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🥇 " + p1 + " Wins!";
    } else if (randomNumber2 > randonNumber1) {
        document.querySelector("h1").innerHTML = p2 + " Wins!🥇";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

var audio = new Audio("dice.mp3")
    document.querySelector(".play-btn").addEventListener("click", function(){
        audio.play();
    });