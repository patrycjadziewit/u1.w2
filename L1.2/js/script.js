var input1Elem, input2Elem, resultElem;

function init (){
    input1Elem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    resultElem = document.getElementById("result");
    document.getElementById("runBtn").onclick =areaCalculations
    } // End init
window.onload = init;

function areaCalculations (){
    var length; // Längd i meter
    var width; // Bredd i meter
    var area; //Yta i kvadratmeter

    length = Number(input1Elem.value);
    width = Number(input2Elem.value);
    
    //Area för en rektangel
    area = length * width;
    resultElem.innerHTML = "<p>Rektangelns area är" + area + "m<sup>2</sup></p>";

    //Area för en ellips
    area = 3.14 * length * width / 4;
    resultElem.innerHTML += "<p>Ellipsens area är " + area + "m<sup>2</sup></p>";

    //Arean om längden ökas med 5
    area = (length + 5) * width;
    resultElem.innerHTML += "<p>Längden + 5 ger rektangelns area" + area + "m<sup>2</sup></p>";

    //Arean om längden ökas med 50% och bredden med 3 meter
    area = (length * 1.5) * (width + 3);
    resultElem.innerHTML += "<p>Om längden ökas med 50% och bredden med 3m blir rektangelns area" + area + "m<sup>2</sup></p>";

    //Arean av triangel i fot
    area = (length * 3.28) * (width * 3.28) /2;
    resultElem.innerHTML += "<p>Triangelns area blir" + area + "fot<sup>2</sup></p>"
    } // End areaCalculations