var video = document.querySelector('video');

// allows access to phone camera
var handleVideo = function(stream){
	video.src = window.URL.createObjectURL(stream);
}

function errorCallback(){
	console.log('User rejected');
}

// do we even have access to the camera?
function hasGetUserMedia(){
	// checks if something is null. 
	// if it isn't null, it exists and will return true. 
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
} 

if(hasGetUserMedia()){
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	navigator.getUserMedia({audio: true, video: true}, handleVideo, errorCallback)
} else {

}


