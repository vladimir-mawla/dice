
window.onload = (event) => {
    console.log("hello")
    let x = Math.floor(Math.random() * 6) +1;
    let img1 = document.getElementById("img1")
    let y = Math.floor(Math.random() * 6) +1;
    let img2 = document.getElementById("img2")
    img1.src = "./images/dice" + x +".png";
    img2.src = "./images/dice" + y + ".png"
    
    if (x > y) {
        document.getElementById("text").innerHTML = "PLAYER 1 WINS"
    }
    else if (x == y) {
        document.getElementById("text").innerHTML = "DRAW"
    }
    else{
        document.getElementById("text").innerHTML = "PLAYER 2 WINS"
    }
}