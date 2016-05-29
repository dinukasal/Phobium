#pragma strict
#pragma strict
var theBullet : Rigidbody;
var Speed = 10;

function Update () {
	if (Input.GetMouseButtonDown(0))
	{
		Shoot();
		Debug.Log("shooting done");
	}
	
}

function Shoot(){
		CordinateCorrection();
		//var clone = Instantiate(theBullet, transform.position, transform.rotation);
		var clone = Instantiate(theBullet, theBullet.position, theBullet.rotation);
		clone.transform.position.y = clone.transform.position.y + 1.0f;
		clone.velocity = transform.TransformDirection(Vector3(0, 0, Speed));
		GetComponent.<AudioSource>().Play();
		Destroy (clone.gameObject, 2.0f);
}

function CordinateCorrection(){
	theBullet.transform.localPosition.x =  0.00998;
	theBullet.transform.localPosition.y =   0.2167;
	theBullet.transform.localPosition.z = -0.0875;
	theBullet.transform.localRotation.x = 0;
	theBullet.transform.localRotation.y = 0;
	theBullet.transform.localRotation.z = 0;
}