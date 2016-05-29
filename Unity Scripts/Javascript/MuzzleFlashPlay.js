#pragma strict

var muzzleFlash: Renderer;
var muzzleLight: Light;
var crossHair: Renderer;

function Start () {
	//this makes the muzzle flash dissapear in the normal play
	muzzleFlash.enabled = false;
	muzzleLight.enabled = false;
	crossHair.enabled = true;
}

function Update () {
	//this senses whether there is a left click input
	if(Input.GetMouseButtonDown(0)){
		Shoot();
	}
}

function Shoot(){
	//When shooting happens, the cross hair dissapears and muzzle flash appears
	crossHair.GetComponent.<Renderer>().enabled = false;
	muzzleFlash.GetComponent.<Renderer>().enabled = true;
	muzzleLight.enabled = true;
	yield WaitForSeconds(0.02);
	crossHair.GetComponent.<Renderer>().enabled = true;
	muzzleFlash.GetComponent.<Renderer>().enabled = false;
	muzzleLight.enabled = false;
}