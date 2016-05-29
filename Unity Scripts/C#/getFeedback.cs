using UnityEngine;
using System.Collections;

public class getFeedback : MonoBehaviour {

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.F))
		{
			Application.LoadLevel("Feedback");
		}	
	}
}
