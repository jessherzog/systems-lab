var video;

function setup(){
	createCanvas(320, 568);
	video = createVideo('assets/IMG_5089.MOV');
	video.loop();
	video.hide();
	noStroke();
}

function draw(){
	image(video, 0, 0);
	video.loadPixels();
	video.updatePixels();
	// console.log(video.pixels);

	for (var i=0; i < video.pixels; i+=400) {
		fill(video.pixels[i], video.pixels[i+1], video.pixels[i+2], video.pixels[i+3]);

		var xPos = (i/4) % width;
		var yPos = Math.floor(i/width*4);

		ellipse(xPos, yPos, 50, 10); 
	}
}
