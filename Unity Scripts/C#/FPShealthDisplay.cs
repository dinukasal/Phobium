using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class FPShealthDisplay : MonoBehaviour {
	
	private int maxHealth;
	private Image healthBar;
	private Image deathImage;

	
	// Use this for initialization
	void Start () {
		maxHealth = 100;
		healthBar = transform.FindChild("Main Camera").FindChild ("EnemyCanvas").FindChild ("HealthBG").FindChild ("Health")
			.GetComponent<Image> ();

		deathImage = transform.FindChild ("Main Camera").FindChild ("DeathCanvas").FindChild ("HealthBG").GetComponent<Image>();

		deathImage.enabled = false;
	}

	//this method is called when the health is reduces
	public void Hit(int health){

		//this shows a blood splatter when shot
		Color temp = deathImage.color;
		temp.a = 1 - (float)health / (float) maxHealth;
		if (temp.a < 0.5f) {
			temp.a = 0;
		} else {
			deathImage.enabled = true;
			temp.a = temp.a-0.5f;
		}
		deathImage.color = temp;

		//Change the fill amount of the health bar
		healthBar.fillAmount = (float)health / (float) maxHealth;
	}

}
