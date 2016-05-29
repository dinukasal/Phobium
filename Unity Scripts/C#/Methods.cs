using UnityEngine;
using System.Collections;

public class Methods : MonoBehaviour {

	//This script contains code to load various levels in the game. 
	public void loadHowToPlay(){
		Application.LoadLevel ("HowToPlay");
	}

	public void loadSetUp(){
		Application.LoadLevel ("SetUp");
	}
	public void loadFound(){
		Application.LoadLevel ("Found");
	}

	public void loadFuhrer(){
		Application.LoadLevel ("fuhrer");
	}

	public void loadDarkCity(){
		Application.LoadLevel ("DarkCity");
	}

	public void loadMainMenu(){
		Application.LoadLevel ("MainMenu");
	}

	public void loadLocationSelect(){
		Application.LoadLevel ("PreTour");
	}

	public void loadAdishamMenu(){
		Application.LoadLevel ("AdishamMenu");
	}

	public void loadDunhindaMenu(){
		Application.LoadLevel ("DunhindaMenu");
	}

	public void loadAdishamPanaroma(){
		Application.OpenURL ("https://photosynth.net/embed.aspx?cid=cd905a59-a0b8-4598-9531-2b8ccda22914&delayLoad=true&slideShowPlaying=false");
	}

	public void loadAdishamVR(){
		Application.LoadLevel ("AdishamVR");
	}

	public void loadDunhindaPanaroma(){
		Application.OpenURL("http://www.pano.picture.lk/dunhinda/");
	}

	public void loadDunhindaVR(){
		Application.LoadLevel ("DunhindaVR");
	
	}

	public void loadOnTour(){
		Application.LoadLevel ("OnTour");
	}

	public void loadPlanTour(){
		Application.LoadLevel ("PlanTour");
	}

	public void loadMemoriesAdisham(){
		Application.LoadLevel ("MemoriesAdisham");
	}

	public void loadMemoriesDunhinda(){
		Application.LoadLevel ("MemoriesDunhinda");
	}

	public void loadOffers(){
		Application.LoadLevel ("Offers");
	}

	public void loadWorldWar2Menu(){
		Application.LoadLevel ("WorldWar2");
	}

	public void loadTheFuhrer(){
		Application.LoadLevel("Bunker");
	}

	public void loadLoadingTheFuhrer(){
		Application.LoadLevel ("OnTour");
	}
}
