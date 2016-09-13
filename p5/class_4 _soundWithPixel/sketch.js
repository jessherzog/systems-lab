var portrait;
var img;

var mic;
var micLevel;
var lsClear = true;
var soundPoints = [];
var soundY = 0;

var imgPoints = [];
var distortion;

var store = function(data) {
	return JSON.stringify(data);
}

function preload(){
	portrait = loadImage("http://66.media.tumblr.com/bdae9db1e09a324d1130e5147c1c6a66/tumblr_o03veta4ls1un35xho1_320.jpg");
}

function setup(){
	createCanvas(320, 320);
	mic = new p5.AudioIn();
	mic.start();
	portrait.loadPixels();
	portrait.updatePixels();
	img = createImage(portrait.width, portrait.height);
	img.loadPixels();
	if(lsClear){
		localStorage.clear();
	}

	for (var i = 0; i<portrait.pixels.length; i+=4){
		imgPoints.push({
			x: (i/4)%width,
			y: Math.floor(i/(4 * width)),
			r: portrait.pixels[i],
			g: portrait.pixels[i+1],
			b: portrait.pixels[i+2],
			a: portrait.pixels[i+3]
		})
	}
	for(var i = 0; i <imgPoints.length; i++){
		img.set(imgPoints[i].x, imgPoints[i].y, color(imgPoints[i].r, imgPoints[i].g, imgPoints[i].b, imgPoints[i].a));
	}
	println(imgPoints[600]);
}

function draw(){
	background(255);
	//image(portrait,0,0);
	micLevel = mic.getLevel();
	soundY = constrain(height - micLevel * height * 5, 320, 420);
	distortion = map(micLevel, 0, 0.02, 0, 5000);
	soundPoints.push({
		x: millis() * .1,
		y: soundY
	});

	// for(var i = 0; i <imgPoints.length; i++){
	// 	img.set(imgPoints[i].x, imgPoints[i].y, color(imgPoints[i].r, imgPoints[i].g, imgPoints[i].b, imgPoints[i].a));
	// }

	img.updatePixels();
	image(img,0,0);

	localStorage.setItem("storedSound", store(soundPoints));
	var p = JSON.parse(localStorage.storedSound);
	var l = p.length;
	var ptsMax = window.width;

	for(var i = 1 ; i< l; i++){
		var lFromEnd = l - i;

		//line (soundPoints[i-1].x, soundPoints[i-1].y, soundPoints[i].x, soundPoints[i].y);
		line(ptsMax - lFromEnd - 1, p[i -1].y , ptsMax - lFromEnd, p[i].y)
	}


	var randomSeed = Math.floor(random(0, imgPoints.length));

	for (var i=5; i<Math.floor(distortion); i++) {
		imgPoints[Math.abs(randomSeed.x)] += Math.floor(distortion);
	}

}