#pragma strict

var z: float;

function Update () {
	downToGround(z);
}


function downToGround(y: float){
	transform.position.y = y;
}