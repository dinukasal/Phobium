using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class PlayerHealthDisplay : MonoBehaviour {

	private int maxHealth;
	private Image healthBar;

	// Use this for initialization
	void Start () {
		maxHealth = 100;

		healthBar = transform.FindChild ("EnemyCanvas").FindChild ("HealthBG").FindChild ("Health")
			.GetComponent<Image> ();
	}

	//this method reduces the health of the player and recude the value in the health bar.
	public void Hit(int health){
		healthBar.fillAmount = (float)health / (float) maxHealth;
	}
}
