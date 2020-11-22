var input1Elem, input2Elem;
var msgElem; 
var selFruitsElem;
var selFruitNr;
// Globala variabler

function init() { 
    input1Elem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    msgElem = document.getElementById("message");
    selFruitsElem = document.getElementById("selectedFruits")
    document.getElementById("btn1").onclick = showFruit;
    document.getElementById("btn2").onclick = addFruits;
    selFruitNr = nr;

} // End init
window.onload = init; 



//funktion som visar bild på frukt när man skriver tal 1-5
function showFruit() {
    let nr = checkNr(input1Elem.value,5);
    input1Elem.value = nr;
    
document.getElementById("fruitImg").src = getFruitUrl(nr);
}

function getFruitUrl(nr) {
    let url;
    switch (nr) {
        case 1: url = "img/apple.png" ; break;
        case 2: url = "img/banana.png" ; break;
        case 3: url = "img/orange.png" ; break;
        case 4: url = "img/pear.png" ; break;
        case 5: url = "img/pineapple.png" ; break;
        default: url = "img/nofruit.png" ;
}
return url;
} // end getFruitUrl

// kontrollerar om det angivna värdet är ett tal och om den ligger i gränserna
function checkNr(nr, high){
    msgElem.innerHTML = "";
    if (isNaN(nr)) {
        msgElem.innerHTML = "du måste skriva ett tal med siffror"; return null;
    }
    if (nr < 1 || nr > high) {
        msgElem.innerHTML = "du måste skriva ett tal med siffror" + high; return null;
    }
    nr = parseInt(nr); //avrundar till heltal
   return nr;
}
function addFruits() {
    if (selFruitNr == 0) {
        msgElem.innerHTML = "du måste först välja en frukt"; return;
    }
    let amount = checkNr(input2Elem.value,9);
    if (amount == null) return;
    let fruitUrl = getFruitUrl(selFruitNr);
    let imgList = "";
    for (let i = 0; i < amount; i++) {
        imgList += " <img src='" + fruitUrl + "' alt='frukt'>";
    }
    selFruitsElem.innerHTML += imgList;
}