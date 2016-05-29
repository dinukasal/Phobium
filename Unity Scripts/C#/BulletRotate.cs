﻿using UnityEngine;
using System.Collections;

public class BulletRotate : MonoBehaviour {
	public int RotateSpeed = 5;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (transform.GetComponent<Rigidbody>().velocity != Vector3.zero)
		{
			transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(new Vector3(transform.GetComponent<Rigidbody>().velocity.x,0,transform.GetComponent<Rigidbody>().velocity.z)), Time.deltaTime * RotateSpeed);
		}
	}
}
