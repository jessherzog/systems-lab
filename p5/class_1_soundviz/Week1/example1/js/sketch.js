var mic;
var ellipseY;
var arrayOfCircles = [];

var clearLocalStorage = true;

function setup() {

	if (clearLocalStorage){
		localStorage.clear();
	}

	createCanvas(1000,200);
	background(0);
	text = createP("shakshuka");
	text.class("coffee");
	text.position(100,200);

	mic = new p5.AudioIn();
	mic.start();

	if ("ptsArray" in localStorage){
		arrayOfCircles = JSON.parse(localStorage.ptsArray);
	}

}

function draw() {
	
	fill(255);
	stroke(255);
	micLevel = mic.getLevel();
	
	ellipseY = constrain(height - height * micLevel *5, 0, height);
	
	ellipse(millis() /100, ellipseY, 2, 2);
	
	arrayOfCircles.push(
			{
				x: millis()/100,
				y: ellipseY,
				time: Date.now()
			}
		);

	localStorage.setItem("ptsArray", JSON.stringify(arrayOfCircles));

	console.log(localStorage);

	var p = JSON.parse(localStorage.ptsArray);

	var textOnPage = "Local Stoarge Data: <br />";
	for(var i = 1; i < p.length; i++){
		if(i==p.length-1){
			//meaningless vvvv
			textOnPage += p.[i];
			// line(arrayOfCircles[i-1].x, arrayOfCircles[i-1].y, arrayOfCircles[i].x, arrayOfCircles[i].y);
		}
	}	
}