/*Exercise 1 */
window.onload = allWalls; /*top-leftboundary*/

function wallTop(){
	leftWall = document.getElementById("boundary1");
	leftWall.onmouseover = redWall;
}

function redWall(){
	var walls = document.querySelectorAll (".boundary");
	for ( var k=0; k<walls.length; k++)	{
		walls[k].classList.add("youlose");
	}
	 touch = false;
}

/*Exercise 2*/

	
function allWalls(){
	var walls = document.querySelectorAll (".boundary");
	for (var k=0; k<walls.length; k++)	{
		walls[k].addEventListener("mouseover", redWall);
	}
}

/*Exercise 3*/

function finishLine() {
	var finish = document.getElementById("end");
	end.mouseover = results();
}

function results(){
	if (touch == false) {
		alert("You lose");
	} else {
		alert ("You Win!");
	}	
}

	

