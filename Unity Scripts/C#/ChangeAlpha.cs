using UnityEngine;
using System.Collections;

public class ChangeAlpha : MonoBehaviour {

	//This is used to change the Alpha of the Blood splatter on Screen.
	void change(float health){
		GetComponent<SpriteRenderer> ().color = new Color (1,1,1,health);
	}
}
