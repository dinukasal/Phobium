#pragma strict
var TheDammage : int;

//This method is to detect collisions
function OnCollisionEnter (info : Collision)
{
	if(info.gameObject.tag == "Player"){
		Debug.Log("damage transferred");
		info.transform.SendMessage("DammagePlayer", TheDammage, SendMessageOptions.DontRequireReceiver);	
	}
}