#pragma strict
var theBullet : Rigidbody;
var Speed: int;
var count: int;

function Start(){
	count = 0;
	var audio: AudioSource = GetComponent.<AudioSource>();
}

function Update () {
	count++;
	if(count%50==0 && count<300){
		Shoot();	
	}
	else if(count==115 || count==179 || count==212 || count==241 || count==275 || count==412 || count==521){
		Shoot();
	}
	else if(count==600){
		count = Random.Range(50, 250);
	}
}

function Shoot(){
		CordinateCorrection();
		var clone = Instantiate(theBullet, theBullet.position, theBullet.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0, 0, Speed));
		GetComponent.<AudioSource>().Play();
		Destroy (clone.gameObject, 1);
}

function CordinateCorrection(){
	theBullet.transform.localPosition.x =  -0.0007;
	theBullet.transform.localPosition.y =   -0.3292;
	theBullet.transform.localPosition.z = 0.0502;
	theBullet.transform.localRotation.x = 0;
	theBullet.transform.localRotation.y = 0;
	theBullet.transform.localRotation.z = 180;
}