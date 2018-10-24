/*Exercise 1 */
window.onload = wallTop; /*top-leftboundary*/

function wallTop(){
	leftWall = document.getElementById("boundary1");
	leftWall.onmouseover = redWall;
}

function redWall(){
	leftWall.classList.add("youlose");
	
}

	

