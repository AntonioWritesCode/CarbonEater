const maxPSF = 100;
//const maxCO2;
//const maxCost;

const minPSF = 50;
//const minCO2;
//const minCost;

let element = document.getElementById("elementId");
      let opacity = 0;
      function fade() {
         if (opacity >= 1) {
            return;
         }
         opacity += 0.01;
         element.style.opacity = opacity;
         requestAnimationFrame(fade);
      }
      requestAnimationFrame(fade);

upButton.onclick = function(){
    var tempText = document.getElementById("text1").innerHTML;
    tempText = tempText.substring(5);
    var currentNumber = Number(tempText);

    if(currentNumber == 100){
        return;
    }

    currentNumber++;
    tempText = currentNumber.toString();
    document.getElementById("text1").innerHTML= "PSF: " + tempText;

    currentNumber = ((currentNumber - minPSF) * 100)/(maxPSF - minPSF);
    currentNumber = 30 + currentNumber * 70/100;
    tempText = currentNumber.toString() + "%";

    document.getElementById("circle1").style.width = tempText;
}

downButton.onclick = function(){
    var tempText = document.getElementById("text1").innerHTML;
    tempText = tempText.substring(5);
    var currentNumber = Number(tempText);

    if(currentNumber == 50){
        return;
    }

    currentNumber--;
    tempText = currentNumber.toString();
    document.getElementById("text1").innerHTML= "PSF: " + tempText;

    currentNumber = ((currentNumber - minPSF) * 100)/(maxPSF - minPSF);
    currentNumber = 30 + currentNumber * 70/100;
    tempText = currentNumber.toString() + "%";

    document.getElementById("circle1").style.width = tempText;
}

