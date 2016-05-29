#pragma strict
var count: int;
function Start () {
	count=0;
}

//this function destroys enemy bullets after a particular time
function Update () {
	count++;
	if(count==20){
		Destroy(gameObject);
	}
}