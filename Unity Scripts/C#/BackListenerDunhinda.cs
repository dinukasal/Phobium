using UnityEngine;
using System.Collections;

public class BackListenerDunhinda : MonoBehaviour {
	
	// This listens to the Back button in the mission
	void Update () {
		if(Input.GetKeyDown(KeyCode.Escape)){
			Application.LoadLevel("DunhindaMenu");
		}
	
	}
}
