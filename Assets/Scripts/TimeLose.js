     var toggleGUI : boolean;
     
    function OnTriggerEnter (other : Collider) {
    //if (other.gameObject.CompareTag("Box"))
    toggleGUI = true;
    }
     
    //function OnTriggerExit (other : Collider) {
    //toggleGUI = false;
    //}
     
    function OnGUI () {
    if (toggleGUI == true)
    GUI.Label (Rect (10, 300, 100, 20), "You Lose");
    }
