var depth = 20.0;
 
function Start ()
{
     Screen.showCursor = false;
}
 
function Update ()
{
     var mousePos = Input.mousePosition;
     var wantedPos = Camera.main.ScreenToWorldPoint (Vector3 (mousePos.x, mousePos.y, depth));
     transform.position = wantedPos;
}