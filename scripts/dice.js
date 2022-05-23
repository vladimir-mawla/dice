
window.onload = (event) => {
    console.log("hello")
    let x = Math.floor(Math.random() * 6) +1;
    let img1 = document.getElementById("img1")
    let y = Math.floor(Math.random() * 6) +1;
    let img2 = document.getElementById("img2")
    img1.src = "./images/dice" + x +".png";
    img2.src = "./images/dice" + y + ".png"
    
    if (x > y) {
        document.getElementById("title").innerHTML = "PLAYER 1 WINS"
        player1.push(x)
    }
    else if (x == y) {
        document.getElementById("title").innerHTML = "DRAW"
    }
    else{
        document.getElementById("title").innerHTML = "PLAYER 2 WINS"
        player2.push(y)
    }

    var player1 =[]
    var player2 =[]
    document.getElementById("text").innerHTML = "Player 1: " + player1.length +" Player 2: " + player2.length


}
