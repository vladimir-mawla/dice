window.onload = (event) => {
  getScores();
  throw_dice();
};
var scores = { player1: 0, player2: 0 };

function throw_dice() {
  let x = Math.floor(Math.random() * 6) + 1;
  let img1 = document.getElementById("img1");
  let y = Math.floor(Math.random() * 6) + 1;
  let img2 = document.getElementById("img2");
  img1.src = "./images/dice" + x + ".png";
  img2.src = "./images/dice" + y + ".png";

  if (x > y) {
    document.getElementById("title").innerHTML = "PLAYER 1 WINS";
    scores.player1 += 1;
  } else if (x == y) {
    document.getElementById("title").innerHTML = "DRAW";
  } else {
    document.getElementById("title").innerHTML = "PLAYER 2 WINS";
    scores.player2 += 1;
  }
  saveScores();
}

function saveScores() {
  localStorage.setItem("score", JSON.stringify(scores));
}
function getScores() {
  JSON.parse(
    (document.getElementById("text1").innerHTML = localStorage.getItem("score"))
  );
}
