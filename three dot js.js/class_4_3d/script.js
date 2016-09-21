var viewAngle = 75;
var aspectRatio = window.innerWidth / window.innerHeight;
var near = 0.1;
var far = 1000;
var camera = new THREE.PerspectiveCamera(viewAngle, aspectRatio, near, far);
var scene = new THREE.Scene; 
var renderer = new THREE.WebGLRenderer;
var ptLight = new THREE.PointLight(0xffffff); 
var mouseX = 0;
var mouseY = 0;
var cube;
var cubeGroup;
var sphere;

function createCube(){
	var width = 100;
	var height = 100;
	var depth = 100;

	var box = new THREE.BoxGeometry(width, height, depth);
	for(var i=0; i<box.faces.length; i+=2){
		var hex = Math.random() * 0xffffff;
		box.faces[i].color.setHex(hex);
		box.faces[i+1].color.setHex(hex);	
	}
	var boxmaterial = new THREE.MeshStandardMaterial(
		{ 
			vertexColors: THREE.FaceColors, 
			wireframe: false 
		}
	);
	cube = new THREE.Mesh(box, boxmaterial);
}

function createSphere(){
	var radius = 200;
	var segments = 100;
	var rings = 1;

	var ball = new THREE.SphereGeometry(radius, segments, rings);
	var ballMaterial = new THREE.MeshStandardMaterial(
		{ color: 0xffffff, wireframe: true }
	);
	sphere = new THREE.Mesh(ball, ballMaterial);
	// sphere.position.x = 100; 
}

function initRend(){
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	document.addEventListener('mousemove', moveMouse, false);

	scene.add(ptLight);
	scene.add(camera);
	camera.position.z = 300;
	ptLight.position.set(10, 50, 130)

	createCube();
	scene.add(cube);

	createSphere();
	scene.add(sphere);
}

// more efficient/stable speed control than above
function animatedRend() {
	requestAnimationFrame(animatedRend);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	renderer.render(scene, camera);
	camera.position.x += (mouseX - camera.position.x) * 0.01;
	camera.position.y += (-mouseY - camera.position.y) * 0.01;
}

function moveMouse(event){
	mouseX = (event.clientX - window.innerWidth/2);
	mouseY = (event.clientY - window.innerHeight/2); 
}

initRend();
animatedRend();