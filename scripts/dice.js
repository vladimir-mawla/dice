var player1 = 0;
var player2 = 0;

window.onload = (event) => {
    throw_dice();
    getScores();
}

function throw_dice() {
    let x = Math.floor(Math.random() * 6) +1;
    let img1 = document.getElementById("img1")
    let y = Math.floor(Math.random() * 6) +1;
    let img2 = document.getElementById("img2")
    img1.src = "./images/dice" + x +".png";
    img2.src = "./images/dice" + y + ".png"

    if (x > y) {
        document.getElementById("title").innerHTML = "PLAYER 1 WINS"
        player1 += 1
        
    }
    else if (x == y) {
        document.getElementById("title").innerHTML = "DRAW"
    }
    else{
        document.getElementById("title").innerHTML = "PLAYER 2 WINS"
        player2 += 1
        
    }
    saveScores();
    
    
}
getScores();
function saveScores() {
    localStorage.setItem("player1", JSON.stringify(player1));
    localStorage.setItem("player2", JSON.stringify(player2));
}
function getScores() {
    document.getElementById("text1").innerHTML = localStorage.getItem("player1");
    document.getElementById("text2").innerHTML = localStorage.getItem("player2");
}