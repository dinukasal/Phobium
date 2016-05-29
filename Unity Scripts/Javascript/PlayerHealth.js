#pragma strict
var Health = 100;
var Effect : Transform;

var damageSound : AudioClip[];
var playSoundsGO : GameObject;

//This damage player method is called when it with a bullet on collision
function DammagePlayer (TheDammage : int)
{
	Health -= TheDammage;
	
	if(Health > 100){
		Health = 100;
	}
	
	//To update the health bar
	SendMessage("Hit",Health);
	
	Debug.Log("Damage done");
	if(Health <= 0)
	{
		Dead();
	}
}

//This is used to Respawn the mission
function Dead()
{   
    Application.LoadLevel(Application.loadedLevel);
}
