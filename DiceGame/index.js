function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  var resultText = "";
  if (randomNumber1 > randomNumber2) {
    resultText = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText = "Player 2 Wins! 🚩";
  } else {
    resultText = "Draw!";
  }
  document.getElementById("result").innerHTML = resultText;
}

// Roll the dice once when the page loads
window.onload = rollDice;
