#pragma strict
var Health = 100;
var Effect : Transform;
var target : GameObject;

function Start(){
	
}

function TakeAverage(){
	 
}

//ApplyDamage method is used to send damage message when a bullet is hitting an object
function ApplyDammage (TheDammage : int)
{	
	Health -= TheDammage;
	Debug.Log("Health pack life reduced");
	if(Health <= 0)
	{
		Dead();
	}
}

//If the health is less than 0, the Dear function is called.
function Dead()
{
	target.BroadcastMessage("DammagePlayer", -25);
	transform.position.y = transform.position.y+1;
	var boom = Instantiate (Effect, transform.position, transform.rotation);
	boom.transform.localScale = new Vector3 (1,1,1);
	Destroy(gameObject);
}