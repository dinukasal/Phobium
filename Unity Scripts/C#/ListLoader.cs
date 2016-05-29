using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

public class ListLoader : MonoBehaviour {

	private GameObject[] itemLabels = {null, null, null};
	private GameObject[] productLabels = {null, null, null};

	public GameObject Label1 = null;
	public GameObject Label2 = null;
	public GameObject Label3 = null;

	public GameObject ProdName1 = null;
	public GameObject ProdName2 = null;
	public GameObject ProdName3 = null;

	public GameObject Scrollbar = null;

	private List<string> Items = new List<string>();

	private List<string> ShopNames = new List<string>();

	// Use this for initialization
	void Start () {
		itemLabels [0] = Label1;
		itemLabels [1] = Label2;
		itemLabels [2] = Label3;

		productLabels [0] = ProdName1;
		productLabels [1] = ProdName2;
		productLabels [2] = ProdName3;

		//Items.Add ("Madhawa");
		//Items.Add ("Lucky");
		//Items.Add ("Sala");
		//Items.Add ("Pasiya");

		updateList ();
	}
	public string url = "https://ideamarthosting.dialog.lk/lakmalmApps/exploreUVA/offers.php";
	bool updating = false;
	public void updateList()
	{
		if (updating) {
			Debug.Log("Still Updating...");
			return;
		}
		updating = true;
		StartCoroutine ("RefreshList");
	}
	IEnumerator RefreshList()
	{
		WWW www = new WWW(url);
		yield return www;

		string str = www.text;
		Debug.Log (str);

		Items.Clear ();
		string[] items = str.Split (new string[] {"<br>","<br/>"}, System.StringSplitOptions.RemoveEmptyEntries);
		foreach (string s in items) {
			Debug.Log(s);
			string[] parameters = s.Split(new string[] {"<tag>","<tag/>"}, System.StringSplitOptions.RemoveEmptyEntries);

			Items.Add(parameters[0].Trim());
			ShopNames.Add(parameters[1].Trim());

		}



		Slider slider = Scrollbar.GetComponent<Slider> ();
		//slider.value = 0;

		updateScroll ((int)slider.value);

		updating = false;
	}

	public void ScrollBarUpdate()
	{

		Slider slider = Scrollbar.GetComponent<Slider> ();

		updateScroll ((int)slider.value);
	}
	void updateScroll(int scroll)
	{
		Debug.Log (scroll);
		int i = scroll;
		for (int j = 0; j < itemLabels.Length; j++) {
			Text t = itemLabels[j].GetComponent<Text>();
			Text c = productLabels[j].GetComponent<Text>();
			if(i < Items.Count)
			{
				t.text = Items[i];
				c.text = ShopNames[i];
			}
			else{
				t.text = "";
				c.text="";
			}
			i++;
		}
	}
	float lastFrameTime = 0;
	// Update is called once per frame
	void Update () {
		float delta = Time.time - lastFrameTime;
		if (delta > 4) {
			lastFrameTime = Time.time;
			updateList();
			Debug.Log("List updated");
		}

	}
}
