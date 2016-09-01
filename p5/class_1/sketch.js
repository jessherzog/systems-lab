var mic;
var ellipseY;
var arrayOfCircles = [];

function setup() {
	createCanvas(800,600);
	background(255, 0, 0);
	text = createP("J j j jjj");
	text.class("tea");
	text.position(150, 400);

	mic = new p5.AudioIn();
	mic.start();

}

function draw() {

 	fill(255);
 	strokeWeight(1);

 	micLevel = mic.getLevel();
 	ellipseY = constrain(height - height * micLevel, 0, height);

 	println(ellipseY);
 	ellipse(millis()/100, ellipseY, 10, 10);

 	arrayOfCircles.push(
	 	{
	 		x: millis() / 100,
			y: ellipseY
	 	}
	);

 	for(var i = 1; i < arrayOfCircles.length; i++){
 		console.log(arrayOfCircles[i]);
 		line(arrayOfCircles[i-1].x, arrayOfCircles[i-1].y, arrayOfCircles[i].x, arrayOfCircles[i].y,)
 	}
}
