var input1Elem, input2Elem;  //referens till fälten man ska mata ett värde in
var msgElem; //referens till meddelnadet
var selFruitsElem; //referens på frukten som ska visas
var selFruitNr; //nr på valda frukten
// Globala variabler

//init 
function init() { 
    input1Elem = document.getElementById("input1"); //input1elem betyder det som är id märkt med "input1" i htmlkoden
    input2Elem = document.getElementById("input2"); //input2elem betyder det som är id märkt med "input2" i htmlkoden
    msgElem = document.getElementById("message"); //msgelem betyder det som är id märkt med "message" i htmlkoden
    selFruitsElem = document.getElementById("selectedFruits"); //selfruitselem betyder det som är id märkt med "selectedfruits" i htmlkoden
    document.getElementById("btn1").onclick = showFruit; //när man trycker på första knappen initieras showfruit funktionen
    document.getElementById("btn2").onclick = addFruits; //när man trycker på andra knappen initieras funktionen addfruits
    selFruitNr = 0;
} // End init

window.onload = init; //funktionen init utförs när fönstet löses in

//funktion som visar bild på frukt när man skriver tal 1-5 i "input1"
function showFruit() {
     let nr = checkNr(input1Elem.value,5); // hämta nr från "input 1" och högsta gränsen är 5
    if (nr == null) return;
    input1Elem.value = nr;
document.getElementById("fruitImg").src = getFruitUrl(nr); //det element som är id märkta med "fruitimg" i html byts ut till vald frukt baserad på nr man matar in
selFruitNr = nr; //sparar bilden i globala variabler
} //end showFruit

// byt nr till bild på frukt
function getFruitUrl(nr) {
    let url;
    switch (nr) { 
        case 1: url = "img/apple.png" ; break; //om man matar in 1 visas ett äpple
        case 2: url = "img/banana.png" ; break; //om man matar in 2 visas en banan
        case 3: url = "img/orange.png" ; break;
        case 4: url = "img/pear.png" ; break;
        case 5: url = "img/pineapple.png" ; break;
        default: url = "img/nofruit.png" ;
}
return url;
} // end getFruitUrl

// kontrollerar om det angivna värdet är ett tal och om den ligger i gränserna
function checkNr(nr, high) { 
    msgElem.innerHTML = "";
    if (isNaN(nr)) {
        msgElem.innerHTML = "du måste skriva ett tal med siffror"; return null;
    } //meddelandet som visas om man matar in något som inte är en siffra
    if (nr < 1 || nr > high) {
        msgElem.innerHTML = "du måste skriva ett tal mellan 1 och " + high; return null;
    } //meddelnadet som visas om man matar in en siffra utanför gränserna
    nr = parseInt(nr); //avrundar till heltal
   return nr ;
} //end checknr

//visa ett antal frukter
function addFruits() {
    if (selFruitNr == 0) {
        msgElem.innerHTML = "du måste först välja en frukt."; return;
    } //meddeleandet som visas om man inte vald nån frukt
    let amount = checkNr(input2Elem.value,9); //gränserna för "input2" är siffror med övre gränsen 9
    if (amount == null) return;
    let fruitUrl = getFruitUrl(selFruitNr); //få url på valda frukten från variablen selfruit
    let imgList = "";
    for (let i = 0; i < amount; i++) {
        imgList += " <img src='" + fruitUrl + "' alt='frukt'>";
    } //lägger till vald antal av vald frukt i lisatn genom att lägga in img tagen i html koden
    selFruitsElem.innerHTML += imgList; //lägger till bilderna efter i listan 
} //end addfruits