#pragma strict

var MaxHealth = 100;
var Health : int;
var maximumHitPoints = 100;
var hitPoints : float;
var regenerationSpeed : float = 5;

var damageSound : AudioClip[];
private var edamageSound : int = 0;

var playSoundsGO : GameObject;
var shakeGO : GameObject;
var die : AudioClip;
var deadReplacement : Transform;
var mySkin : GUISkin;
var canRegenerate : boolean = true;

private var radar : GameObject;
private var maxHitPoints : int;
var damageTexture : Texture;

private var time : float = 0.0;
private var alpha : float;
private var callFunction : boolean = false;
private var showTexture : boolean = false;
private var damageMessage : boolean = false;


//This script is used to keep track of the player stats
function Start ()
{
	Health = MaxHealth;
	GUI.Box (new Rect (0,0,100,50), "Top-left");	
}


//This method is called from the OnCollison method to reduce the heatlh of the Player
function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;
		//Playing sounds when bullets are hit
		playSoundsGO.GetComponent.<AudioSource>().clip = damageSound[Random.Range(0, damageSound.length)];
		playSoundsGO.GetComponent.<AudioSource>().volume = 0.4;
		playSoundsGO.GetComponent.<AudioSource>().Play();
		time += TheDammage/7;

		if(Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	RespawnMenuV2.playerIsDead = true; 
	Debug.Log("Player Died");
}

function RespawnStats ()
{
	Health = MaxHealth;
}

