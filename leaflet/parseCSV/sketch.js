// each coordinate point is an object, lat/lon are keys that have values.

var parsedData = [];
//	this stores the data

var filepath1 = "/assets/routes CSV/sept_3.csv";
var filepath2 = "/assets/routes CSV/sept_4.csv";
var filepath3 = "/assets/routes CSV/sept_5.csv";
var filepath4 = "/assets/routes CSV/sept_6.csv";
var filepath5 = "/assets/routes CSV/sept_7.csv";

var callbackFunction = function(data){

	var objectFromRow = function(headerRow, dataRow){
		var headerArray = headerRow.split(",");
		var dataArray = dataRow.split(",");

		var dataObj = {};

		for (var i=0; i<headerArray.length-40; i+=40){
			if(dataArray[i] < 40.72){
				var key = headerArray[i];
				var value = dataArray[i];
				dataObj[key] = value;	
			}
		}
		
	// console.log(dataObj);		
	console.log(dataObj.value);
	}

	for (var row=1; row<data.length; row++){
		var hRow = data[0];
		var dRow = data[row];
		parsedData.push(objectFromRow(hRow, dRow));
	}

}

var errorFunction = function(error){
	console.log(error);
}

function setup(){
	createCanvas(1000, 1000);
	noLoop();
}

function draw(){
	loadStrings(filepath1, callbackFunction, errorFunction);

	//	use callbackFunction to process the data 
	//	however you want to, while it's loading in	
	//	give functions w/o ()
}

// heat maps - more points are hotter, possible data vis

