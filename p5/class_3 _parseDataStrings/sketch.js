var filepath = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv";

var callbackFunction = function(data){
	text("DATA LOADED !", 20,20);
	console.log("This is the data: ");
	console.log(data);
}

var errorFunction = function(error){
	console.log(error);
}


function setup(){
	createCanvas(1000, 1000);
	noLoop();
}

function draw(){
	loadStrings( filepath, callbackFunction, errorFunction);
	//	use callbackFunction to process the data 
	//	however you want to, while it's loading in	
	//	give functions w/o ()

}