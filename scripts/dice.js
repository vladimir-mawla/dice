
window.onload = (event) => {
    console.log("hello")
    let x = Math.floor(Math.random() * 6) +1;
    let img1 = document.getElementById("img1")

    if(x == 1){
        img1.src = "./images/dice1.png";
    } if(x == 2){
        img1.src = "./images/dice2.png";
    } if(x == 3){
        img1.src = "./images/dice3.png";
    } if(x == 4){
        img1.src = "./images/dice4.png";
    } if(x == 5){
        img1.src = "./images/dice5.png";
    } if(x == 6){
        img1.src = "./images/dice6.png";
    }


}