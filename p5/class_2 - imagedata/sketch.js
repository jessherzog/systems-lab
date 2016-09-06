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


function preload(){
	img = loadImage("assets/gradie.jpg");
	
}


function setup(){
	
	//load pixels
	createCanvas(720, 720);
	image(img, 0, 0);
	loadPixels();
	updatePixels();
	console.log(pixels[0]);
	console.log(pixels[1]);
	console.log(pixels[2]);
	console.log(pixels[3]);


	//label rgba of each pixel in array
	for(var i=0; i<pixels.length; i+=4){
		colorArray.push(
		{
			r: pixels[i],
			g: pixels[i+1],
			b: pixels[i+2],
			a: pixels[i+3]
		});
	}

	//find sum of each 'r' 'b' 'g' 'a' value 
	for(var i=0; i<colorArray.length; i++){
		sumR += colorArray[i].r;
		sumG += colorArray[i].g;
		sumB += colorArray[i].b;
		sumA += colorArray[i].a;
	}

	//then find average value of each
	avgR = sumR/colorArray.length;
	avgG= sumG/colorArray.length;
	avgB = sumB/colorArray.length;
	avgA = sumA/colorArray.length;

	console.log(avgR);
	console.log(avgG);
	console.log(avgB);
	console.log(avgA);

	ellipseMode(CORNER);
	noStroke();

	// localStorage.clear();
	// localStorage.setItem("arrayOfColors", JSON.stringify(colorArray));
	// console.log(localStorage.arrayOfColors);

}

function draw(){
	fill(avgR, avgB, avgG);
	ellipse(0, 0, width, height);
	
}