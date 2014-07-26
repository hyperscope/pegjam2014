    var target : Transform;
    var smoothTime = 0.3;
    var xOffset : float = 1.0;
    var zOffset : float = 1.0;
 
    private var thisTransform : Transform;
    private var velocity : Vector2;
 
 
    function Start()
    {
           thisTransform = transform;
    }
 
    function LateUpdate()
    {
 
           thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x + xOffset, Time.deltaTime * smoothTime);
 
           thisTransform.position.z = Mathf.Lerp( thisTransform.position.z, target.position.z + zOffset, Time.deltaTime * smoothTime);
 
    
    //function OnTriggerStay (other : Collider){
	//if (other.gameObject.CompareTag("Black Orbit"))
		//{
		//damaging = true;
		//playerHealth -= 1; //Time.deltaTime;
		//}
    
    }