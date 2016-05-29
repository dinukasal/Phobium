using UnityEngine;
using System.Collections;

public class FuhrerLoading : MonoBehaviour {
	public int count = 0;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		count++;
		if (count == 1200) {
			Application.LoadLevel("Bunker");
		}
	}
}
