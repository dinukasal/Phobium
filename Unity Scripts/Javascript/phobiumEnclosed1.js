#pragma strict

var Health = 110;
var Effect : Transform;

function ApplyDammage (TheDammage : int)
{	
	SendMessage("Hit",Health);
	Health -= TheDammage;
	Debug.Log("Damage done");
	if(Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	transform.position.y = transform.position.y + 2;
	var boom = Instantiate (Effect, transform.position, transform.rotation);
	boom.transform.localScale = new Vector3 (1,1,1);
	Application.LoadLevel("PhobiumEnclosedSpaces");
	Destroy(gameObject);
}