#pragma strict

var Effect : Transform;
var TheDammage : int;
//var flash : GameObject;
//var anim : Animation;

function Start(){
	//anim = flash.GetComponent(Animation);
}
function Update () {
	
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	
	if (Input.GetMouseButtonDown(0))
	{
		if (Physics.Raycast (ray, hit, 200))
		{
			Debug.Log("Hit");	
			if (hit.collider.gameObject.tag == "enemy"){
					//anim.Play();
				var particleClone = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
				Destroy(particleClone.gameObject, 2);
				Debug.Log("Before shoot");
				hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);	
				Debug.Log("After shoot");
			}
		}
	}
	
}