//Create a reference for canvas 


canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");


//Give specific height and width to the car image


greencar_width = 75 ;
greencar_height = 100 ; 
background_image = "parkingLot.jpg";
greencar_image = "car2.png";



//Set initial position for a car image.

greencar_X = 5;
greencar_Y = 225;

function add() {
	
	
	//upload car, and background images on the canvas.
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

greencar_imgtag = new Image();
greencar_imgtag.onload = uploadgreencar;
greencar_imgtag.src = greencar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(greencar_imgtag, greencar_X, greencar_Y, greencar_width, greencar_height);
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
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_Y >= 0)
	{
           greencar_Y = greencar_Y - 10
		   console.log("When up arrow key is pressed, x =" +greencar_X + "y ="+greencar_Y);
		   uploadBackground();
		   uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_Y <= 500)
	{
           greencar_Y = greencar_Y + 10
		   console.log("When down arrow key is pressed, x =" +greencar_X + "y ="+greencar_Y);
		   uploadBackground();
		   uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
    if(Player_X > 0)
    {
        Player_X = Player_X - 10
        console.log("When left key is pressed, X = " + player_X + "Y = " + Player_Y);

        canvas.remove(greencar_image);
        grrencar_update();
    }
}


function right()
{
	//Define function to move the car right sidefunction right()
{
    if(Player_X <= 951)
    {
        Player_X = Player_X - 10
        console.log("When right key is pressed, X = " + player_X + "Y = " + Player_Y);

        canvas.remove(greencar_image);
        grrencar_update();
    }
}  

}
