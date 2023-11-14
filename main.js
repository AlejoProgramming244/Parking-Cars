//Create a reference for canvas 

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d")

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

width_greencar_image = 75;
heigth_greencar_image = 100;

//Set initial position for a car image.

positionX_greencar_image = 5;
positionY_greencar_image = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, positionX_greencar_image, positionY_greencar_image, width_greencar_image, heigth_greencar_image);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		

		if((e.key === 'w') || (e.key === "W"))
		{
			up();
			console.log("up W");
		}
	
		if((e.key === 's') || (e.key === "S"))
		{
			down();
			console.log("down S");
		}
		
		if((e.key === 'a') || (e.key === "A"))
		{
			left();
			console.log("left A");
		}
	
		if((e.key === 'd') || (e.key === "D"))
		{
			right();
			console.log("right D");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(positionY_greencar_image >= 60)
	{
		positionY_greencar_image = positionY_greencar_image - 10;
		console.log("El carro se movió en Y hacia arriba, Coordenadas en Y: ", positionY_greencar_image, " Coordenadas en X: ", positionX_greencar_image);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(positionY_greencar_image <= 230)
	{
		positionY_greencar_image = positionY_greencar_image + 10;
		console.log("El carro se movió en Y hacia abajo, Coordenadas en Y: ", positionY_greencar_image, " Coordenadas en X: ", positionX_greencar_image);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(positionX_greencar_image >= 0)
	{
		positionX_greencar_image = positionX_greencar_image - 10;
		console.log("El carro se movió en Y hacia la izquierda, Coordenadas en Y: ", positionY_greencar_image, " Coordenadas en X: ", positionX_greencar_image);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(positionX_greencar_image <= 730)
	{
		positionX_greencar_image = positionX_greencar_image + 10;
		console.log("El carro se movió en Y hacia la derecha, Coordenadas en Y: ", positionY_greencar_image, " Coordenadas en X: ", positionX_greencar_image);
		uploadBackground();
		uploadgreencar();
	}
}
