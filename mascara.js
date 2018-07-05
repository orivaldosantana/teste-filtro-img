
var canvas; 
var button; 

var imgMascara;

var outputImage; 

function preload() {
  imgMascara = loadImage('amaraji.png');
}

function salvarCanvas() {
	saveCanvas(canvas,'mascaraAplicada','jpg'); 
	console.log("Testes bt");
	//createA("mascaraAplicada.jpg", "Baixar Imagem");  

}


function setup(){
	canvas = createCanvas(940,940); 
	background(220); 
	image(imgMascara,0,0); 
	createElement('h2','Clique no botão para salvar a imagem');
	button = createButton("Salvar Imagem"); 
	button.mousePressed(salvarCanvas); 

	textAlign(CENTER);
	textSize(22);
  	text('Arraste e solte uma imagem aqui.', width / 2, height / 2);
  	canvas.drop(gotFile);
}

function gotFile(file) {
  	var img = createImg(file.data).hide();
  	// Draw the image onto the canvas
  	image(img, 0, 0, width, height);
  	image(imgMascara,0,0); 
}


function draw() {


}



