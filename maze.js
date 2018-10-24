/*Exercise 1 */
window.onload = allWalls; /*top-leftboundary*/

function wallTop(){
	leftWall = document.getElementById("boundary1");
	leftWall.onmouseover = redWall;
}

function redWall(){
	crash = true;
	var walls = document.querySelectorAll (".boundary");
	for ( var k=0; k<walls.length; k++)	{
		walls[k].classList.add("youlose");
	}
	 
}

/*Exercise 2*/

	
function allWalls(){
	var walls = document.querySelectorAll (".boundary");
	for (var k=0; k<walls.length; k++)	{
		walls[k].addEventListener("mouseover", redWall);
	}
}


	

