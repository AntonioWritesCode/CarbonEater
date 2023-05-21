const psfData = [50, 60, 70, 80, 90, 100];
const weights = [136944, 144720, 152568, 160584, 165024, 168480];
const carbonData = [];
const costData = [];

for(i = 0; i < weights.length; i++){
    var carbonAddOn = weights[i] * 1/2000 * 5500;
    carbonAddOn = carbonAddOn/1000;
    carbonAddOn = Math.round(carbonAddOn);
    carbonData.push(carbonAddOn);
    var costAddOn = weights[i] * 1/2.20462 * 2.85;
    costAddOn = costAddOn/1000;
    costAddOn = Math.round(costAddOn);
    costData.push(costAddOn);
}



const maxPSF = psfData[psfData.length-1];
const maxCO2 = carbonData[carbonData.length-1];
const maxCost = costData[costData.length-1];

const minPSF = psfData[0];
const minCO2 = carbonData[0];
const minCost = costData[0];


upButton.onclick = function(){
    var tempText = document.getElementById("text1").innerHTML;
    tempText = tempText.substring(5);
    var currentNumber = Number(tempText);

    if(currentNumber == maxPSF){
        return;
    }

    var pos;
    for(i = 0; i < psfData.length; i++){
        if(psfData[i] == currentNumber){
            pos = i;
        }
    }

    currentNumber = psfData[pos+1];
    tempText = currentNumber.toString();
    document.getElementById("text1").innerHTML= "PSF: " + tempText;

    var scaleNumber = ((currentNumber - minPSF) * 100)/(maxPSF - minPSF);
    scaleNumber = 30 + scaleNumber * 70/100;
    tempText = scaleNumber.toString() + "%";

    document.getElementById("circle1").style.width = tempText;

    
    var index;
    for(i = 0; i < psfData.length; i++){
        if(currentNumber == psfData[i]){
            index = i;
        }
    }
    var carbon = carbonData[index];
    var cost = costData[index];
    var carbonText = carbon.toString();
    var costText = cost.toString();

    document.getElementById("text2").innerHTML= "CO2: " + carbonText + "k kg";
    document.getElementById("text3").innerHTML= "$" + costText + "k";

    var carbonScale = ((carbon - minCO2) * 100)/(maxCO2 - minCO2);
    carbonScale = 30 + carbonScale * 70/100;
    carbonText = carbonScale.toString() + "%";
    document.getElementById("circle2").style.width = carbonText;

    var costScale = ((cost - minCost) * 100)/(maxCost - minCost);
    costScale = 30 + costScale * 70/100;
    costText = costScale.toString() + "%";
    document.getElementById("circle3").style.width = costText;


}

downButton.onclick = function(){
    var tempText = document.getElementById("text1").innerHTML;
    tempText = tempText.substring(5);
    var currentNumber = Number(tempText);

    if(currentNumber == minPSF){
        return;
    }

    var pos;
    for(i = 0; i < psfData.length; i++){
        if(psfData[i] == currentNumber){
            pos = i;
        }
    }

    currentNumber = psfData[pos - 1];
    tempText = currentNumber.toString();
    document.getElementById("text1").innerHTML= "PSF: " + tempText;

    var scaleNumber = ((currentNumber - minPSF) * 100)/(maxPSF - minPSF);
    scaleNumber = 30 + scaleNumber * 70/100;
    tempText = scaleNumber.toString() + "%";

    document.getElementById("circle1").style.width = tempText;

    var index;
    for(i = 0; i < psfData.length; i++){
        if(currentNumber == psfData[i]){
            index = i;
        }
    }
    var carbon = carbonData[index];
    var cost = costData[index];
    var carbonText = carbon.toString();
    var costText = cost.toString();


    document.getElementById("text2").innerHTML= "CO2: " + carbonText + "k kg";
    document.getElementById("text3").innerHTML= "$" + costText + "k";

    var carbonScale = ((carbon - minCO2) * 100)/(maxCO2 - minCO2);
    carbonScale = 30 + carbonScale * 70/100;
    carbonText = carbonScale.toString() + "%";
    document.getElementById("circle2").style.width = carbonText;

    var costScale = ((cost - minCost) * 100)/(maxCost - minCost);
    costScale = 30 + costScale * 70/100;
    costText = costScale.toString() + "%";
    document.getElementById("circle3").style.width = costText;

}