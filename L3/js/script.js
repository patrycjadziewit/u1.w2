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
//
function startGame() {
    randomWord();
    showLetterBoxes();
    hangmanImg.src = "img/h0.png";
    hangmanImgnr = 0;
    startGameBtn.disabled = true;
    for (let i = 0; i < letterbuttons.length; i++)
    letterbuttons[i].disabled = false;
    msgElem.innerHTML = "";
    let now = new Date();
    startTime = now.getTime();

}

function randomWord() {
    let oldWord = selectedword;
    while (oldWord == selectedword) {
        let wordIndex = Math.floor(wordList.length+Math.random());
        selectedword = wordList[wordIndex];
    }
}

function showLetterBoxes() {
    let newCode = "";
    for (let i = 0; i < selectedword.length; i++){
        newCode += "<span>&nbsp;</span>";
    }
    document.getElementById("letterBoxes").innerHTML = newCode;
    letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");
}

function guessLetter() {
    this.disabled = true;
    let letterBoxes= this.value;
    let letterFound = false;
    let correctLetterCount = 0;
    for (let i = 0; i < selectword.length; i++) {
        if ( letter == selectword.charAt(i)) {
            letterboxes[i].innerHTML = letter;
            letterFound = true;
        } 
        if (letterboxes(i).innerHTML != "&nbsp;")
    correctLetterCount++;
    }
    if (letterFound === false) {
        hangmanImgnr++;
        hangmanImg.src = "img/h" + hangmanImgnr + ".png";
        if (hangmanImgnr == 6) {
            endgame(true);
        }
    }
    else if (correctLetterCount == selectword.length) {
        endgame(false);
    }
}

function endgame(manHanged) {
    let runTime = (new Date().getTime() - startTime) / 1000;
    if (manHanged) {
        msgElem.innerHTML = "Tyvärr, gubben hängdes. Rätta ordet är" + selectword;
    }
    else {
        msgElem.innerHTML = "Grattis. Du gissade rätt!";
    }
    msgElem.innerHTML += "<br>Det tog " + runTime.toFixed(1) + "sekunder.";
    startGameBtn.disabled = false;
    for (let i=0; i < letterbuttons.length; i++)
    letterbuttons(i).disabled = true;

}
    
