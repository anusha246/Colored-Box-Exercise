function drawBox(){
	//Set box attributes from boxCharacteristics form
	var color = document.boxCharacteristics.color.value;
	var width = parseInt(document.boxCharacteristics.width.value);
	var height = parseInt(document.boxCharacteristics.height.value);
	
	var context = document.getElementById('theCanvas').getContext('2d');
	
	//Clear the canvas
	context.clearRect(0, 0, 10000, 10000);
	
	//If any input is empty, show error
	if (color.length === 0 || isNaN(width) || isNaN(height)){
		document.getElementById("error_message").innerHTML = "Please input all box attributes";
	
	} else {
		document.getElementById("error_message").innerHTML = "";
		
		//Draw filled rectangle with attributes
		context.fillStyle = color;
		context.fillRect(0, 0, width, height);
	}
}