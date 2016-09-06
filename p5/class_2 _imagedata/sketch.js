var img;
var colorArray = [];

var sumR = 0;
var sumB = 0;
var sumG = 0;
var sumA = 0;

var avgR = 0;
var avgB = 0;
var avgG = 0;
var avgA = 0;

var circScale = 0;
var offset = 0;

var rSize = 0;
var gSize = 0; 
var bSize = 0;

var avgRfill = 255;
var avgGfill = 255;
var avgBfill = 255;


function preload(){
	img = loadImage("assets/gradie.jpg");
	
}

function setup(){

	//load pixels, minus alpha
	createCanvas(720, 1440);
	offset = height/2;

	image(img, 0, 0);
	loadPixels();
	updatePixels();
	// console.log(pixels[0]);
	// console.log(pixels[1]);
	// console.log(pixels[2]);


	//label rgb of each pixel in array
	for(var i=0; i<pixels.length/2; i+=4){
		colorArray.push(
		{
			r: pixels[i],
			g: pixels[i+1],
			b: pixels[i+2]
		});
	}

	//find sum of each 'r' 'b' 'g' value 
	for(var i=0; i<colorArray.length; i++){
		sumR += colorArray[i].r;
		sumG += colorArray[i].g;
		sumB += colorArray[i].b;
	}

	//then find average value of each
	avgR = sumR/colorArray.length;
	avgG= sumG/colorArray.length;
	avgB = sumB/colorArray.length;

	console.log(avgR);
	console.log(avgG);
	console.log(avgB);

	ellipseMode(CORNER);
	noStroke();
	circScale = img.height / (avgR + avgG + avgB);

	// localStorage.clear();
	// localStorage.setItem("arrayOfColors", JSON.stringify(colorArray));
	// console.log(localStorage.arrayOfColors);



}

function draw(){

	background(255);
	image(img, 0, 0);

	// animate in real time
	if(rSize < avgR * circScale){
		rSize++;
	}

	if(gSize < avgG * circScale){
		gSize++;
	}

	if(bSize < avgB * circScale){
		bSize++;
	}

	// animate average-filled circle 
	if(avgRfill > avgR){
		avgRfill--;
	}
	if(avgGfill > avgG){
		avgGfill--;
	}
	if(avgBfill > avgB){
		avgBfill--;
	}

	// set sizes without animation
	// rSize = avgR * circScale;
	// gSize = avgG * circScale;
	// bSize = avgB * circScale;

	// change back to avgR, avgG, avgB for no animation
	fill(avgRfill, avgBfill, avgGfill);
	ellipse(0, offset, offset, offset);

	fill(255, 0, 0);
	ellipse(0, offset, rSize, rSize);

	fill(0, 255, 0);
	ellipse(0, offset+rSize, gSize, gSize);

	fill(0, 0, 255);
	ellipse(0, offset+rSize+gSize, bSize, bSize);
	
}

// click to refresh animation
function mouseClicked(){
	rSize = 0;
	gSize = 0;
	bSize = 0;
	avgRfill = 255;
	avgGfill = 255;
	avgBfill = 255;

}