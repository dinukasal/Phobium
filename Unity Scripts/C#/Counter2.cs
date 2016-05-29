using UnityEngine;
using System.Collections;

public class Counter2 : MonoBehaviour {
	public int count = 0;
	public int limit;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		count++;
		//This is to do the transition from Cutscene to the Phophecy found screen 
		if (count == limit) {
			Application.LoadLevel("Found");
		}
	}
}
