//Etabs Data
var tabE;
var Bvalue = [];
var sz = [];

function preload(){
    tabE = loadTable("Etabs_Output-3.csv");
}

function setup(){
    createCanvas(800, 800);
    colorMode(HSB, 300, 100, 100);
    strokeWeight(5);

//For loop for our circle variables
for(var i = 0; i < tabE.getRowCount(); i++){
    Bvalue[i] = tabE.getNum(i, 1);
    sz[i] = map(Bvalue[i], 1, 200, 20, 300);
  }
}

function draw(){
    for(var i = 0; tabE.getRowCount(); i++){
        fill(Bvalue[i], 80, 80);
        ellipse(100 *(i + 1), 20);

        fill(0);
        textSize(10);
        text(items[i], 100 *(i + 1), 20);

        fill(255);
        textSize(15);
        translate(5, 5, 10);
        textSize(Bvalue[i], 105 * (i + 1), 275);
    }
}