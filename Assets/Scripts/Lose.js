function OnTriggerEnter(other : Collider ) {
    	if (other.gameObject.tag == "Sphere") {
    		Application.LoadLevel ("Lose");
    	}
    }