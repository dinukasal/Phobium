using UnityEngine;
using System.Collections;

public class Counter : MonoBehaviour {
	public int count = 0;
	public int limit;

	// Update is called once per frame
	void Update () {
		count++;
		if (count == limit) {
			Application.LoadLevel("PreTour");
		}
	}
}
