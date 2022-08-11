
var randomNumber1 = Math.floor(Math.random()*6) +1; //1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImafeSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImafeSource1);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomImafeSource1 > randomImageSource2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomImafeSource1 < randomImageSource2){
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
