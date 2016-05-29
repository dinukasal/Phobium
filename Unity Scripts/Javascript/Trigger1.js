#pragma strict
var Music: GameObject;
var FPS: GameObject;

//Following objects are used to keep track of the locations where the soldiers are instantiated
var Enemy : GameObject;
var HealthPack: GameObject;
var RunningEnemy: GameObject;

var EnemyLocation1: Rigidbody;
var Runner1: Rigidbody;
var HealthPack1: Rigidbody;

var EnemyLocation2: Rigidbody;
var Runner2: Rigidbody;
var HealthPack2: Rigidbody;

var EnemyLocation3: Rigidbody;
var Runner3: Rigidbody;
var HealthPack3: Rigidbody;

var EnemyLocation4: Rigidbody;
var Runner4: Rigidbody;
var HealthPack4: Rigidbody;

var EnemyLocation5: Rigidbody;
var Runner5: Rigidbody;
var HealthPack5: Rigidbody;

var EnemyLocation6: Rigidbody;
var Runner6: Rigidbody;
var HealthPack6: Rigidbody;

var EnemyLocation7: Rigidbody;
var Runner7: Rigidbody;
var HealthPack7: Rigidbody;

var EnemyLocation8: Rigidbody;
var Runner8: Rigidbody;
var HealthPack8: Rigidbody;

var EnemyLocation9: Rigidbody;
var Runner9: Rigidbody;
var HealthPack9: Rigidbody;

var treasure : GameObject;
var Effect : Transform;

var count = 0;

function OnTriggerEnter(info: Collider){

//Following if and else conditions are used to check whether the player is reaching a particular trigger
//These triggers are used to instantiate enemies. 
	if(info.gameObject.tag=="trigger"){
	
		var cloneEnemy = Instantiate(Enemy, EnemyLocation1.position, EnemyLocation1.rotation);
		cloneEnemy.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner1 = Instantiate(RunningEnemy, Runner1.position, Runner1.rotation);
		cloneRunner1.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack1 = Instantiate(HealthPack, HealthPack1.position, HealthPack1.rotation);
		cloneHealthPack1.GetComponent(HealthPackHealth).target = FPS;
		
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger2"){
	
		var cloneEnemy2 = Instantiate(Enemy, EnemyLocation2.position, EnemyLocation2.rotation);
		cloneEnemy2.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner2 = Instantiate(RunningEnemy, Runner2.position, Runner2.rotation);
		cloneRunner2.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack2 = Instantiate(HealthPack, HealthPack2.position, HealthPack2.rotation);
		cloneHealthPack2.GetComponent(HealthPackHealth).target = FPS;
		
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger3"){
	
		var cloneEnemy3 = Instantiate(Enemy, EnemyLocation3.position, EnemyLocation3.rotation);
		cloneEnemy3.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner3 = Instantiate(RunningEnemy, Runner3.position, Runner3.rotation);
		cloneRunner3.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack3 = Instantiate(HealthPack, HealthPack3.position, HealthPack3.rotation);
		cloneHealthPack3.GetComponent(HealthPackHealth).target = FPS;
		
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger4"){
	
		var cloneEnemy4 = Instantiate(Enemy, EnemyLocation4.position, EnemyLocation4.rotation);
		cloneEnemy4.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner4 = Instantiate(RunningEnemy, Runner4.position, Runner4.rotation);
		cloneRunner4.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack4 = Instantiate(HealthPack, HealthPack4.position, HealthPack4.rotation);
		cloneHealthPack4.GetComponent(HealthPackHealth).target = FPS;
		
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger5"){
	
		var cloneEnemy5 = Instantiate(Enemy, EnemyLocation5.position, EnemyLocation5.rotation);
		cloneEnemy5.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner5 = Instantiate(RunningEnemy, Runner5.position, Runner5.rotation);
		cloneRunner5.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack5 = Instantiate(HealthPack, HealthPack5.position, HealthPack5.rotation);
		cloneHealthPack5.GetComponent(HealthPackHealth).target = FPS;
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger6"){
	
		var cloneEnemy6 = Instantiate(Enemy, EnemyLocation6.position, EnemyLocation6.rotation);
		cloneEnemy6.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner6 = Instantiate(RunningEnemy, Runner6.position, Runner6.rotation);
		cloneRunner6.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack6 = Instantiate(HealthPack, HealthPack6.position, HealthPack6.rotation);
		cloneHealthPack6.GetComponent(HealthPackHealth).target = FPS;
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger7"){
	
		var cloneEnemy7 = Instantiate(Enemy, EnemyLocation7.position, EnemyLocation7.rotation);
		cloneEnemy7.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner7 = Instantiate(RunningEnemy, Runner7.position, Runner7.rotation);
		cloneRunner7.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack7 = Instantiate(HealthPack, HealthPack7.position, HealthPack7.rotation);
		cloneHealthPack7.GetComponent(HealthPackHealth).target = FPS;
		Destroy(info.gameObject);
	}
	else if(info.gameObject.tag=="trigger8"){
	
		var cloneEnemy8 = Instantiate(Enemy, EnemyLocation8.position, EnemyLocation8.rotation);
		cloneEnemy8.GetComponent(AdvancedAIV2).Target = Music.transform;
		
		var cloneRunner8 = Instantiate(RunningEnemy, Runner8.position, Runner8.rotation);
		cloneRunner8.GetComponent(AdvancedAIRobot).Target = Music.transform;
		
		var cloneHealthPack8 = Instantiate(HealthPack, HealthPack8.position, HealthPack8.rotation);
		cloneHealthPack8.GetComponent(HealthPackHealth).target = FPS;
		Destroy(info.gameObject);
	}
	
	else if(info.gameObject.tag == "trigger9"){
		Application.LoadLevel("CutScene");
	}
}


