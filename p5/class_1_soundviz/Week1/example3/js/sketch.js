var mic;
var points = [];
var storedTime = 0;
var timeStarted = false;
var timeStamp = 0; //time tracking part
var timeStampX = 0; //time tracking part
var secStamp = 0; //time tracking part
var storedSec = 0;
var graphY; //do this later

var xIncrement = 5;

//SHOULD WE CLEAR LOCALSTORAGE?
var lsClear = true;

//quick custom functions
var store = function(data) {
    return JSON.stringify(data);
};

var unStore = function(data) {
    return JSON.parse(data);
}

Math.map = function(varToMap, varMin, varMax, mapToMin, mapToMax, clamp) {
    var mappedValue = mapToMin + (mapToMax - mapToMin) * ((varToMap - varMin) / (varMax - varMin));
    return mappedValue;
};

function setup() {

    mic = new p5.AudioIn();
    mic.start();

    createCanvas(1800, 255);

    text = createP(name);
    text.id("milk");
    text.position(400, 500);

    //IF BOOL SET, CLEAR LOCALSTORAGE 
    if (lsClear) {
        localStorage.clear();
    }
    //THIS PULLS THE EXISTING VALUE OF LOCAL STORAGE BEFORE WE OVERWRITE IT
    else if ("storedPoints" in localStorage) {
        points = unStore(localStorage.storedPoints);
    }

}

function draw() {
    background(255);

    storedTime = timeStamp;
    
    timeStamp = minute();

    storedSec = secStamp;
    
    secStamp = second();

    micLevel = mic.getLevel();

    println(constrain(height - micLevel * height * 5, 0, height));
    if (mouseIsPressed) {
        fill(255);

    } else {
        fill(0);
    }

    graphY = constrain(height - micLevel * height * 5, 0, height);

    points.push({
        x: millis() * .1,
        y: graphY,
        time: Date.now()
    });

    localStorage.setItem("storedPoints", store(points));

    var p = JSON.parse(localStorage.storedPoints);
    var l = p.length;
    var ptsMax = window.width/xIncrement;

    for (var i = 1; i < l; i++) {
        var lFromEnd = l-i;
        if (lFromEnd < ptsMax) {
            line(xIncrement * (ptsMax - lFromEnd -1), p[i - 1].y, xIncrement * (ptsMax - lFromEnd), p[i].y);
        }
    }

    stroke(0, 0, 0);

    if ((storedTime != timeStamp && secStamp == 0) || timeStarted == false) {
        text = createP(timeStamp);
        text.position(millis() / 100, 260);
        timeStarted = true;
    }

    if (keyIsPressed === true) {
        fill(0, 0, 255);
        console.log("KEY PRESSED");
        stroke(0, 0, 255);

    } else {}
}