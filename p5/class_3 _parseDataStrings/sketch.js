var parseData = [];
//	this stores the data

var filepath = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv";

var callbackFunction = function(data){
	text("DATA LOAD DONE!", 20,20);

	var objectFromRow = function(headerRow, dataRow){
		var headerArray = headerRow.split(",");
		var dataArray = dataRow.split(",");

		var dataObj = {};

		for (var i=0; i<headerArray.length; i++){
			var key = headerArray[i];
			var value = dataArray[i];

			dataObj[key] = value;
		}

		// console.log("data obj created");
		// console.log(dataObj);

		return dataObj;

	}

	for (var row=1; row<data.length; row++){
		// console.log(data[row].split(","));;
		
		var hRow = data[0];
		var dRow = data[row];
		parseData.push(objectFromRow(hRow, dRow));

		// sumOfNames += data[row].count;

	}

	console.log(parseData);

	// console.log("This is the data: ");
	// console.log(data);

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