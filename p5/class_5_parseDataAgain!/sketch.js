Math.map = function(valueToMap, min, max, minToMap, maxToMap){
	var mappedValue = minToMap + (maxToMap - minToMap), ((maxToMap - minToMap) * (max - min));

	// ???????????? 

}

function setup(){
	createCanvas(1000, 1000);
	noLoop();
}

var parsedData = [];
//	this stores the initial data

var finalData = {};

var filepath = "https://data.cityofnewyork.us/api/views/25th-nujf/rows.csv";

var callbackFunction = function(data){
	// text("DATA LOAD DONE!", 20,20);

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
		// console.log(data[row].split(","));
		
		var hRow = data[0];
		var dRow = data[row];
		parsedData.push(objectFromRow(hRow, dRow));

		// sumOfNames += data[row].count;
	}

	var dataRow = parsedData[0];
	// console.log("This is the data: ");
	console.log(parsedData);
	
	//sorts testVar lowest to highest
	var sortFunction = function(a,b){
		return a.RNK-b.RNK;
		// accesses the value at RNK, RNK acts as an index
	};

	parsedData.sort(sortFunction);
	
	for(var row in parsedData){
		var thisRow = parsedData[row];
		if (thisRow.ETHCTY == "HISPANIC" && thisRow.GNDR == "FEMALE"){
			finalData[thisRow.NM] = thisRow;
			//show by baby name
		}	
	}

	console.log(parsedData);

for (var rowIndex in parsedData){
	var txt = "";
	var dataRow = parsedData[rowIndex];

	// go thru every single row, objects dont have a length property!
	for(var key in dataRow){
		dataRow[key];
		txt += dataRow[key] + " ";
	}
	// creates a string for each value in object
	text(txt, 20, 20*rowIndex);
	}	
}

var errorFunction = function(error){
	console.log(error);
}

function draw(){
	loadStrings( filepath, callbackFunction, errorFunction);
	//	use callbackFunction to process the data 
	//	however you want to, while it's loading in	
	//	give functions w/o ()

}