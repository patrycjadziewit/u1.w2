// Globala konstanter och variabler
const wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE","SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA","KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"]; // Lista (array) med ord som ska väljas slumpmässigt
var selectedWord; //textsträng med det ordet som random väljs ut från listan
var letterBoxes; // referenser till span-elementen för bokstverna i ordet
var hangmanImg; //referens till img-elementet för gubben o galgen
var hangmanImgNr; // nummer på bild som visas
var msgElem; //meddelande div-element
var startGameBtn; //referens till startknappen
var letterButtons; // bokstavsknappar
var startTime; // tid då spelet startades

// ------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
    startGameBtn = document.getElementById("startGameBtn");
    startGameBtn.onclick = startGame;
    letterbuttons = document.getElementById("letterButtons").getElementsByTagName("button");
    for (let i = 0; i < letterButtons.length; i++)
    letterbuttons[i].onclick = guessLetter;
    hangmanImg = document.getElementById("hangman");msgElem = document.getElementById("message");
    startGameBtn.disabled = false;
    for (let i=0; i < letterbuttons.length; i++)
    letterbuttons(i).disabled =true;
}
    
 // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// ------------------------------
//startgame
function startGame() {
    randomWord();
    showLetterBoxes();
    hangmanImg.src = "img/h0.png";
    hangmanImgnr = 0;
    startGameBtn.disabled = true;
    for (let i = 0; i < letterbuttons.length; i++)
    letterbuttons[i].disabled = false;
    msgElem.innerHTML = "";
    let now = new Date(); // tiden just nu
    startTime = now.getTime(); //tiden just nu i milisek.
}// end startgame

//randomword (slumpmässig ord)
function randomWord() {
    let oldWord = selectedword;
    while (oldWord == selectedword) {
        let wordIndex = Math.floor(wordList.length+Math.random()); //slumpord
        selectedword = wordList[wordIndex]; //nytt ord sparas i glob. variablen
    }
} //end randomword

// showletterboxes (visa 1 box/bokstav i ordet)
function showLetterBoxes() {
    let newCode = ""; //ny htmlkod för rutan
    for (let i = 0; i < selectedword.length; i++){
        newCode += "<span>&nbsp;</span>"; //nonbreakable space/ tom ruta visas
    }
    document.getElementById("letterBoxes").innerHTML = newCode;
    letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");
} //end showletterboxes


// guessletter (gissa bokstaven)
function guessLetter() {
    this.disabled = true; //inaktivera knappen
    let letterBoxes= this.value; //hämta bokstaven man klickat på
    let letterFound = false; //visa om bokstaven finns i ordet
    let correctLetterCount = 0; //antal rätta bokstäver
    for (let i = 0; i < selectword.length; i++) { //kolla om bokstaven finns flera ggr
        if ( letter == selectword.charAt(i)) {
            letterboxes[i].innerHTML = letter; //visa bokstaven i rutan
            letterFound = true; //bokstaven finns
        } 
        if (letterboxes(i).innerHTML != "&nbsp;")
    correctLetterCount++; //räknaren går upp med 1
    }
    if (letterFound === false) {//bokstaven hittades inte
        hangmanImgnr++;
        hangmanImg.src = "img/h" + hangmanImgnr + ".png";
        if (hangmanImgnr == 6) {
            endgame(true); //gubben blev hängd
        }
    }
    else if (correctLetterCount == selectword.length) {
        endgame(false); //gubben inte hängd
    }
} //end guessletter

//endgame , spelet är slut , bokstaverna avaktiveras o startknappen aktiveras , en meddelande kommer upp 
function endgame(manHanged) {
    let runTime = (new Date().getTime() - startTime) / 1000;//speltid
    if (manHanged) {
        msgElem.innerHTML = "Tyvärr, gubben hängdes. Rätta ordet är" + selectword;
    } //förlorad spel
    else {
        msgElem.innerHTML = "Grattis. Du gissade rätt!";
    } //vunnen spel
    msgElem.innerHTML += "<br>Det tog " + runTime.toFixed(1) + "sekunder.";
    startGameBtn.disabled = false;
    for (let i=0; i < letterbuttons.length; i++) //start knappen fungerar
    letterbuttons(i).disabled = true; //bokstavsknapparna fingerar ej
} //end endgame
    
